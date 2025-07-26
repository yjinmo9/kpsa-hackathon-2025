<<<<<<< Updated upstream
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY! });
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
const index = pinecone.Index("medicinecheck");

export async function POST(req: NextRequest) {
  const body = await req.json();
  const query = body.query;

  if (!query) {
    console.warn("❌ Missing query");
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  console.log("🔍 Received query:", query);

  try {
    // 1. 임베딩 생성
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: query,
=======
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    return NextResponse.json({ 
        company: '알테오젠',
        technology: ['이중표적 항체', '개량신약', 'PEGylation'],
>>>>>>> Stashed changes
    });

    const queryEmbedding = embedding.data[0].embedding;
    console.log("✅ Created embedding. Vector length:", queryEmbedding.length);

    // 2. Pinecone 유사도 검색
    const results = await index.query({
      vector: queryEmbedding,
      topK: 3,
      includeMetadata: true,
    });

    console.log("🔎 Pinecone query results:", JSON.stringify(results, null, 2));

    const match = results.matches?.[0];
    if (!match) {
      console.warn("No match found for query:", query);
      return NextResponse.json({ error: "No match found" }, { status: 404 });
    }

    const metadata = match.metadata as Record<string, any>;
    console.log("Matched metadata:", metadata);

    const rag_type = metadata.rag_type || "unknown";
    console.log("RAG Type:", rag_type);

    const response =
      rag_type === "company"
        ? {
            type: "abouttech",
            data: {
              company: metadata.company || "N/A",
              industry: metadata.industry || "N/A",
              pipeline: metadata.pipeline || "N/A",
              products: metadata.products || "N/A",
              tech_codes: metadata.tech_codes || "N/A",
              advantage: metadata.advantage || "N/A",
              summary: metadata.summary || "N/A",
              abouttech: metadata.abouttech || [],
            },
          }
        : { type: rag_type, metadata };

    console.log("Final API response:", response);
    return NextResponse.json(response);
  } catch (error: any) {
    console.error("❌ Error in /api/search:", error);
    return NextResponse.json(
      { error: "Internal Server Error", detail: error.message },
      { status: 500 }
    );
  }
}


