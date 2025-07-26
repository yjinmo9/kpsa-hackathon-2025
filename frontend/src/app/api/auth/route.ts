import { NextRequest, NextResponse } from 'next/server';

interface KISAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export async function POST(request: NextRequest) {
  try {
    const appKey = process.env.KIS_APP_KEY;
    const appSecret = process.env.KIS_APP_SECRET;

    if (!appKey || !appSecret) {
      return NextResponse.json(
        { error: 'API credentials not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://openapi.koreainvestment.com:9443/oauth2/tokenP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        appkey: appKey,
        appsecret: appSecret,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('KIS Auth Error:', errorText);
      return NextResponse.json(
        { error: `Failed to get access token: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data: KISAuthResponse = await response.json();
    
    return NextResponse.json({
      access_token: data.access_token,
      token_type: data.token_type,
      expires_in: data.expires_in,
      expires_at: Date.now() + (data.expires_in * 1000)
    });

  } catch (error) {
    console.error('Error in auth route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}