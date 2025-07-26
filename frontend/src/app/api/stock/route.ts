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

      case 'conclusion':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for conclusion' },
            { status: 400 }
          );
        }
        const conclusionResult = await kisApi.getStockConclusion(stockCode);
        return NextResponse.json(conclusionResult);

      case 'daily':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for daily price' },
            { status: 400 }
          );
        }
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        const dailyResult = await kisApi.getStockDailyPrice(
          stockCode, 
          startDate || undefined, 
          endDate || undefined
        );
        return NextResponse.json(dailyResult);

      case 'asking':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for asking price' },
            { status: 400 }
          );
        }
        const askingResult = await kisApi.getStockAskingPrice(stockCode);
        return NextResponse.json(askingResult);

      case 'investor':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for investor data' },
            { status: 400 }
          );
        }
        const investorResult = await kisApi.getStockInvestor(stockCode);
        return NextResponse.json(investorResult);

      case 'period':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for period price' },
            { status: 400 }
          );
        }
        const period = (searchParams.get('period') as 'D' | 'W' | 'M' | 'Y') || 'D';
        const adjustedPrice = (searchParams.get('adjustedPrice') as '0' | '1') || '1';
        const periodResult = await kisApi.getStockPeriodPrice(stockCode, period, adjustedPrice);
        return NextResponse.json(periodResult);

      case 'minute-today':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for minute price' },
            { status: 400 }
          );
        }
        const timeCode = (searchParams.get('timeCode') as '1' | '3' | '5' | '10' | '15' | '30' | '60') || '1';
        const minuteTodayResult = await kisApi.getStockTodayMinutePrice(stockCode, timeCode);
        return NextResponse.json(minuteTodayResult);

      case 'minute-daily':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for daily minute price' },
            { status: 400 }
          );
        }
        const targetDate = searchParams.get('targetDate');
        if (!targetDate) {
          return NextResponse.json(
            { error: 'Target date is required for daily minute price' },
            { status: 400 }
          );
        }
        const timeCodeDaily = (searchParams.get('timeCode') as '1' | '3' | '5' | '10' | '15' | '30' | '60') || '1';
        const minuteDailyResult = await kisApi.getStockDailyMinutePrice(stockCode, targetDate, timeCodeDaily);
        return NextResponse.json(minuteDailyResult);

      // === 종목정보 관련 액션들 ===
      
      case 'basic-info':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for basic info' },
            { status: 400 }
          );
        }
        const basicInfoResult = await kisApi.stockInfo.getStockBasicInfo(stockCode);
        return NextResponse.json(basicInfoResult);

      case 'company-info':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for company info' },
            { status: 400 }
          );
        }
        const companyInfoResult = await kisApi.stockInfo.getCompanyInfo(stockCode);
        return NextResponse.json(companyInfoResult);

      case 'elw-price':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for ELW price' },
            { status: 400 }
          );
        }
        const elwPriceResult = await kisApi.stockInfo.getELWPrice(stockCode);
        return NextResponse.json(elwPriceResult);

      case 'sector-info':
        const sectorInfoResult = await kisApi.stockInfo.getSectorInfo();
        return NextResponse.json(sectorInfoResult);

      case 'holidays':
        const startDateHoliday = searchParams.get('startDate');
        const endDateHoliday = searchParams.get('endDate');
        if (!startDateHoliday || !endDateHoliday) {
          return NextResponse.json(
            { error: 'Start date and end date are required for holidays' },
            { status: 400 }
          );
        }
        const holidaysResult = await kisApi.stockInfo.getHolidays(startDateHoliday, endDateHoliday);
        return NextResponse.json(holidaysResult);

      case 'index-info':
        const indexCode = searchParams.get('indexCode') || '0001'; // 기본값: 코스피
        const indexInfoResult = await kisApi.stockInfo.getIndexInfo(indexCode);
        return NextResponse.json(indexInfoResult);

      case 'etf-price':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for ETF price' },
            { status: 400 }
          );
        }
        const etfPriceResult = await kisApi.stockInfo.getETFPrice(stockCode);
        return NextResponse.json(etfPriceResult);

      case 'investment-opinion':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for investment opinion' },
            { status: 400 }
          );
        }
        const investmentOpinionResult = await kisApi.stockInfo.getInvestmentOpinion(stockCode);
        return NextResponse.json(investmentOpinionResult);

      case 'disclosure-info':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for disclosure info' },
            { status: 400 }
          );
        }
        const disclosureInfoResult = await kisApi.stockInfo.getDisclosureInfo(stockCode);
        return NextResponse.json(disclosureInfoResult);

      case 'financial-info':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for financial info' },
            { status: 400 }
          );
        }
        const financialInfoResult = await kisApi.stockInfo.getFinancialInfo(stockCode);
        return NextResponse.json(financialInfoResult);

      case 'stock-news':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for stock news' },
            { status: 400 }
          );
        }
        const stockNewsResult = await kisApi.stockInfo.getStockNews(stockCode);
        return NextResponse.json(stockNewsResult);

      case 'theme-stocks':
        const themeCode = searchParams.get('themeCode');
        if (!themeCode) {
          return NextResponse.json(
            { error: 'Theme code is required for theme stocks' },
            { status: 400 }
          );
        }
        const themeStocksResult = await kisApi.stockInfo.getThemeStocks(themeCode);
        return NextResponse.json(themeStocksResult);

      case 'related-stocks':
        if (!stockCode) {
          return NextResponse.json(
            { error: 'Stock code is required for related stocks' },
            { status: 400 }
          );
        }
        const relatedStocksResult = await kisApi.stockInfo.getRelatedStocks(stockCode);
        return NextResponse.json(relatedStocksResult);

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