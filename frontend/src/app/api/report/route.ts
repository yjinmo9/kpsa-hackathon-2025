import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = "https://clcl6084local.app.n8n.cloud/webhook-test/750e13e8-8226-4f24-a9da-2379df806641";

export async function POST(req: NextRequest) {
  try {
    // 요청 body에서 이메일과 회사명 추출
    const body = await req.json();
    const { email, name } = body;
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required in request body' }, 
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json(
        { error: 'Company name is required in request body' }, 
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

    // 웹훅에 POST 요청으로 이메일, 회사명 전송
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Webhook error: ${response.status} ${response.statusText}`, errorText);
      
      return NextResponse.json(
        { 
          error: 'Webhook request failed',
          details: `${response.status} ${response.statusText}`,
          webhookUrl: WEBHOOK_URL
        }, 
        { status: 502 }
      );
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


