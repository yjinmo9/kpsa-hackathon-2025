import { useQuery, UseQueryResult } from '@tanstack/react-query'

// Type definitions matching KIS API response structure
interface StockPriceData {
  stockCode: string
  price: string // 현재가 (stck_prpr)
  change: string // 전일대비 (prdy_vrss)
  changeRate: string // 전일대비율 (prdy_ctrt)
  changeSign: string // 전일대비부호 (prdy_vrss_sign)
  volume: string // 누적거래량 (acml_vol)
  high: string // 최고가 (stck_hgpr)
  low: string // 최저가 (stck_lwpr)
  open: string // 시가 (stck_oprc)
  marketCap?: string // 시가총액
  tradingValue: string // 누적거래대금 (acml_tr_pbmn)
}

interface StockBasicInfo {
  stockCode: string
  stockName: string // bstp_kor_isnm
  marketType: string // rprs_mrkt_kor_name
  industry: string
}

interface StockDailyPriceData {
  date: string // stck_bsop_date
  open: string // stck_oprc
  high: string // stck_hgpr
  low: string // stck_lwpr
  close: string // stck_clpr
  volume: string // acml_vol
  change: string // prdy_vrss
  changeSign: string // prdy_vrss_sign
}

// Constants
const STOCK_API_BASE_URL = '/api/stock'

// Utility functions
const createStockUrl = (action: string, stockCode: string, params?: Record<string, string>): string => {
  const url = new URL(STOCK_API_BASE_URL, window.location.origin)
  url.searchParams.set('action', action)
  url.searchParams.set('code', stockCode)
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
  }
  
  return url.toString()
}

const stockFetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error(`Failed to fetch stock data: ${response.statusText}`)
  }
  
  const data = await response.json()
  
  // Handle KIS API error responses
  if (data.rt_cd && data.rt_cd !== '0') {
    throw new Error(`API Error: ${data.msg1 || 'Unknown error'}`)
  }
  
  return data
}

// Transform KIS API price response to our format
const transformPriceData = (kisResponse: unknown): StockPriceData => {
  const response = kisResponse as { output?: Record<string, string> }
  const output = response.output || {}
  
  return {
    stockCode: output.stck_shrn_iscd || '',
    price: output.stck_prpr || '0',
    change: output.prdy_vrss || '0',
    changeRate: output.prdy_ctrt || '0',
    changeSign: output.prdy_vrss_sign || '3',
    volume: output.acml_vol || '0',
    high: output.stck_hgpr || '0',
    low: output.stck_lwpr || '0',
    open: output.stck_oprc || '0',
    tradingValue: output.acml_tr_pbmn || '0'
  }
}

// Transform KIS API basic info response
const transformBasicInfo = (kisResponse: unknown): StockBasicInfo => {
  const response = kisResponse as { output?: Record<string, string> }
  const output = response.output || {}
  
  // 국내 주식 시장 구분 매핑
  const getMarketType = (marketId: string) => {
    switch (marketId) {
      case 'STK': return 'KOSPI'
      case 'KSQ': return 'KOSDAQ' 
      case 'KNX': return 'KONEX'
      case 'ETC': return 'ETC'
      default: return 'KOSPI' // 기본값을 KOSPI로 설정 (국내시장 확정)
    }
  }
  
  return {
    stockCode: output.pdno || output.shtn_pdno || '',
    stockName: output.prdt_name || output.prdt_abrv_name || '',
    marketType: getMarketType(output.mket_id_cd),
    industry: output.std_idst_clsf_cd_name || output.sect_tp_nm || ''
  }
}

// Transform KIS API daily price response
const transformDailyPriceData = (kisResponse: unknown): StockDailyPriceData[] => {
  const response = kisResponse as { output?: Array<Record<string, string>> }
  const output = response.output || []
  
  return output.map((item: Record<string, string>) => ({
    date: item.stck_bsop_date || '',
    open: item.stck_oprc || '0',
    high: item.stck_hgpr || '0',
    low: item.stck_lwpr || '0',
    close: item.stck_clpr || '0',
    volume: item.acml_vol || '0',
    change: item.prdy_vrss || '0',
    changeSign: item.prdy_vrss_sign || '3'
  }))
}

// Query key factory for consistent cache keys
const stockKeys = {
  all: ['stock'] as const,
  stock: (stockId: string) => [...stockKeys.all, stockId] as const,
  price: (stockId: string) => [...stockKeys.stock(stockId), 'price'] as const,
  basicInfo: (stockId: string) => [...stockKeys.stock(stockId), 'basic-info'] as const,
  dailyPrice: (stockId: string, startDate?: string, endDate?: string) => 
    [...stockKeys.stock(stockId), 'daily', { startDate, endDate }] as const,
}

/**
 * Hook to get current stock price
 */
export function useStockPrice(stockId: string): UseQueryResult<StockPriceData, Error> {
  return useQuery({
    queryKey: stockKeys.price(stockId),
    queryFn: async () => {
      const url = createStockUrl('price', stockId)
      const kisResponse = await stockFetcher(url)
      return transformPriceData(kisResponse)
    },
    enabled: Boolean(stockId),
    staleTime: 30000, // 30 seconds
    refetchInterval: 60000, // Refetch every minute for price updates
  })
}

/**
 * Hook to get basic stock information
 */
export function useStockBasicInfo(stockId: string): UseQueryResult<StockBasicInfo, Error> {
  return useQuery({
    queryKey: stockKeys.basicInfo(stockId),
    queryFn: async () => {
      const url = createStockUrl('basic-info', stockId)
      const kisResponse = await stockFetcher(url)
      return transformBasicInfo(kisResponse)
    },
    enabled: Boolean(stockId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

/**
 * Hook to get daily price data
 */
export function useStockDailyPrice(
  stockId: string, 
  startDate?: string, 
  endDate?: string
): UseQueryResult<StockDailyPriceData[], Error> {
  return useQuery({
    queryKey: stockKeys.dailyPrice(stockId, startDate, endDate),
    queryFn: async () => {
      const params: Record<string, string> = {}
      if (startDate) params.startDate = startDate
      if (endDate) params.endDate = endDate
      
      const url = createStockUrl('daily', stockId, params)
      const kisResponse = await stockFetcher(url)
      return transformDailyPriceData(kisResponse)
    },
    enabled: Boolean(stockId),
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

/**
 * Comprehensive hook that fetches essential stock information
 * Combines basic info, price, and company info for a complete overview
 */
export function useStockInfo(stockId: string) {
  const basicInfo = useStockBasicInfo(stockId)
  const price = useStockPrice(stockId)

  
  return {
    basicInfo,
    price,
    isLoading: basicInfo.isLoading || price.isLoading,
    isError: basicInfo.isError || price.isError,
    error: basicInfo.error || price.error,
  }
} 