import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = "https://clcl6084local.app.n8n.cloud/webhook-test/b9fcf34e-5752-414d-b422-a74d8a2122e9";

export async function GET(req: NextRequest) {
  try {
    // URL에서 이메일 파라미터 추출
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' }, 
        { status: 400 }
      );
    }

    // 이메일 형식 간단 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' }, 
        { status: 400 }
      );
    }

    // 웹훅에 이메일 파라미터와 함께 요청
    const webhookUrl = `${WEBHOOK_URL}?email=${encodeURIComponent(email)}`;
    
    const response = await fetch(webhookUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Report API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch report data' }, 
      { status: 500 }
    );
  }
}


