import { NextRequest, NextResponse } from 'next/server';
import { kisApi } from '@/lib/kis-api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const stockCode = searchParams.get('code');
    const keyword = searchParams.get('keyword');

    switch (action) {
      case 'search':
        if (!keyword) {
          return NextResponse.json(
            { error: 'Keyword is required for search' },
            { status: 400 }
          );
        }
        const searchResult = await kisApi.getStockInfo(keyword);
        return NextResponse.json(searchResult);

      case 'price':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for price' },
            { status: 400 }
          );
        }
        const priceResult = await kisApi.getStockPrice(stockCode);
        return NextResponse.json(priceResult);

      case 'basic-info':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for basic info' },
            { status: 400 }
          );
        }
        const basicInfoResult = await kisApi.getStockBasicInfo(stockCode);
        return NextResponse.json(basicInfoResult);

      default:
        // 기본적으로 주식 현재가 조회
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required' },
            { status: 400 }
          );
        }
        const defaultResult = await kisApi.getStockPrice(stockCode);
        return NextResponse.json(defaultResult);
    }
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stock data' },
      { status: 500 }
    );
  }
}