// app/api/bio-news/route.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";
import * as cheerio from "cheerio";

// ✅ OpenAI 인스턴스
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

// ✅ GPT를 통한 키워드 추출
async function extractKeywords(question: string, maxKeywords = 2): Promise<string[]> {
  const prompt = `
  아래 문장은 바이오 기술, 치료제, 또는 기업에 대한 질문이야.
  이 질문에서 핵심 키워드를 ${maxKeywords}개 이내로 추출해줘.
  - 키워드는 일반 명사 대신 고유 기술명 한 단어, 회사명, 제품명 한 단어를 우선해줘
  - 쉼표로 구분해줘

  질문: "${question}"
  키워드:
  `;

  console.log("🧠 GPT 키워드 추출 요청:", question);

  const chat = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  const raw = chat.choices[0].message.content || "";
  const keywords = raw.split(",").map((kw) => kw.trim());

  console.log("✅ 추출된 키워드:", keywords);
  return keywords;
}

// ✅ 뉴스 페이지에서 대표 이미지 추출
async function extractImage(url: string): Promise<string | null> {
  try {
    const html = await fetch(url).then((res) => res.text());
    const $ = cheerio.load(html);

    const ogImage = $('meta[property="og:image"]').attr("content");
    if (ogImage) return ogImage;

    const firstImg = $("img").first().attr("src");
    return firstImg || null;
  } catch (e) {
    console.warn("⚠️ 이미지 추출 실패:", e);
    return null;
  }
}

// ✅ 바이오인 RSS 뉴스 검색
async function getBioinNews(keyword: string, maxResults = 5) {
  console.log(`📡 뉴스 검색 시작: "${keyword}"`);

  const Parser = require("rss-parser");
  const rss = new Parser();
  const feed = await rss.parseURL("https://www.bioin.or.kr/rss/rssNews.xml");

  const matched = [];

  for (const entry of feed.items || []) {
    if (
      entry.title?.toLowerCase().includes(keyword.toLowerCase()) ||
      entry.contentSnippet?.toLowerCase().includes(keyword.toLowerCase())
    ) {
      const image = await extractImage(entry.link || "");
      matched.push({
        title: entry.title,
        link: entry.link,
        published: entry.pubDate,
        image,
      });
      if (matched.length >= maxResults) break;
    }
  }

  console.log(`📰 "${keyword}" 관련 뉴스 ${matched.length}건 추출됨`);
  return matched;
}

// ✅ API POST 핸들러
export async function POST(req: NextRequest) {
  const { question } = await req.json();
  console.log("📥 요청 질문:", question);

  if (!question) {
    return NextResponse.json({ error: "No question provided." }, { status: 400 });
  }

  const keywords = await extractKeywords(question);
  let results: any[] = [];

  for (const keyword of keywords) {
    const news = await getBioinNews(keyword, 3);
    results = [...results, ...news];
    if (results.length >= 3) break;
  }

  console.log("📤 최종 응답 결과:", results.slice(0, 3));
  return NextResponse.json(results.slice(0, 3));
}
