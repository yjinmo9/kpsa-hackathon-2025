import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export interface AIAnalysisRequest {
  title: string;
  content: string;
  userSelection: string;
}

export interface AIAnalysisResponse {
  analysis: string;
  recommendations: string[];
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface CompanyInfo {
  company: string;
  industry: string;
  pipeline: string;
  products: string;
  advantage: string;
  summary: string;
}

export async function extractTechKeywords(companyInfo: CompanyInfo): Promise<string[]> {
  try {
    const prompt = `
다음 회사 정보를 분석하여 핵심 기술 키워드 3개를 추출해주세요.

회사명: ${companyInfo.company}
산업분야: ${companyInfo.industry}
파이프라인: ${companyInfo.pipeline}
제품: ${companyInfo.products}
경쟁우위: ${companyInfo.advantage}
요약: ${companyInfo.summary}

요구사항:
1. 바이오/제약/의료 분야의 핵심 기술 용어로 추출
2. 영어로 표기 (예: CAR-T, mRNA, Immunotherapy)
3. 정확히 3개만 추출
4. 각 키워드는 10자 이내로 간결하게
5. 쉼표(,)로 구분하여 응답

응답 형식: keyword1, keyword2, keyword3
`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: '당신은 바이오/제약 기술 전문가입니다. 회사 정보를 분석하여 핵심 기술 키워드를 정확하게 추출합니다.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 100,
      temperature: 0.3,
    });

    const content = response.choices[0]?.message?.content || '';
    
    // Parse keywords from the response
    const keywords = content
      .split(',')
      .map(keyword => keyword.trim())
      .filter(keyword => keyword.length > 0)
      .slice(0, 3); // Ensure only 3 keywords
    
    // Fallback keywords if extraction fails
    if (keywords.length < 3) {
      const fallbackKeywords = ['Biotechnology', 'Drug Development', 'Healthcare'];
      while (keywords.length < 3) {
        keywords.push(fallbackKeywords[keywords.length]);
      }
    }
    
    return keywords;
  } catch (error) {
    console.error('Tech keyword extraction error:', error);
    // Return default keywords if API fails
    return ['Biotechnology', 'Drug Development', 'Healthcare'];
  }
}

export async function getKoreanAnalysis(request: AIAnalysisRequest): Promise<AIAnalysisResponse> {
  try {
    const prompt = `
당신은 한국의 바이오/제약 투자 전문가입니다. 다음 정보를 바탕으로 한국어로 분석해주세요:

제목: ${request.title}
내용: ${request.content}
사용자 선택: ${request.userSelection}

다음 형식으로 응답해주세요:
1. 투자 분석 (200자 이내)
2. 추천사항 (3개 항목)
3. 위험도 (LOW/MEDIUM/HIGH)

한국의 바이오 투자 환경과 시장 상황을 고려하여 실용적인 조언을 제공해주세요.
`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: '당신은 한국의 바이오/제약 투자 전문가입니다. 한국어로만 응답하며, 실용적이고 구체적인 투자 조언을 제공합니다.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content || '';
    
    // Parse the response (simple parsing for demo)
    const lines = content.split('\n').filter(line => line.trim());
    
    let analysis = '';
    let recommendations: string[] = [];
    let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' = 'MEDIUM';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('투자 분석') || line.includes('분석')) {
        analysis = lines[i + 1] || '';
      } else if (line.includes('추천') || line.includes('권고')) {
        for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
          if (lines[j] && lines[j].trim() && !lines[j].includes('위험도')) {
            recommendations.push(lines[j].replace(/^\d+\.\s*/, '').trim());
          }
        }
      } else if (line.includes('위험도')) {
        if (line.includes('HIGH') || line.includes('높음')) riskLevel = 'HIGH';
        else if (line.includes('LOW') || line.includes('낮음')) riskLevel = 'LOW';
        else riskLevel = 'MEDIUM';
      }
    }
    
    // Fallback if parsing fails
    if (!analysis) analysis = content.substring(0, 200);
    if (recommendations.length === 0) {
      recommendations = [
        '전문가와 상담 후 투자 결정',
        '포트폴리오 분산 투자 고려',
        '시장 동향 지속적 모니터링'
      ];
    }

    return {
      analysis,
      recommendations,
      riskLevel
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('AI 분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }
}