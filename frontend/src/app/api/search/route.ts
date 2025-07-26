import { NextRequest, NextResponse } from 'next/server';
import { kisApi } from '@/lib/kis-api';

export async function GET(request: NextRequest) {
    return NextResponse.json({ 
        company: '삼성바이오로직스',
        technology: ['바이오 칩', '바이오시밀러', '세포배양'],
    });
}