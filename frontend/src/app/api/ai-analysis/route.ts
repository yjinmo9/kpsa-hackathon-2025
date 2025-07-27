import { NextRequest, NextResponse } from 'next/server';
import { getKoreanAnalysis, AIAnalysisRequest } from '@/lib/openai';

export async function POST(request: NextRequest) {
  try {
    const body: AIAnalysisRequest = await request.json();
    
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: '제목과 내용이 필요합니다.' },
        { status: 400 }
      );
    }

    const analysis = await getKoreanAnalysis(body);
    
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('AI Analysis API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'AI 분석 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}