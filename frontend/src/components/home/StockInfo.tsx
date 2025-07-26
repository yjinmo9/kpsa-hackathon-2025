import { useStockInfo } from '@/hooks'

// Utility function to format numbers
const formatNumber = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value
  if (isNaN(num)) return '0'
  return new Intl.NumberFormat('ko-KR').format(num)
}

// Utility function to format price change
const formatPriceChange = (change: string, changeRate: string, changeSign: string) => {
  const changeNum = parseFloat(change)
  const changeRateNum = parseFloat(changeRate)
  
  if (isNaN(changeNum) || isNaN(changeRateNum)) return { changeText: '0원', rateText: '0.00%', color: 'text-white' }
  
  // KIS API 변동부호: 1=상한, 2=상승, 3=보합, 4=하한, 5=하락
  let sign = ''
  let color = 'text-white'
  
  if (changeSign === '2') { // 상승
    sign = '+'
    color = 'text-red-400'
  } else if (changeSign === '5') { // 하락
    sign = '-'
    color = 'text-blue-400'
  } else if (changeSign === '1') { // 상한
    sign = '+'
    color = 'text-red-400'
  } else if (changeSign === '4') { // 하한
    sign = '-'
    color = 'text-blue-400'
  } else { // 보합
    sign = ''
    color = 'text-white'
  }
  
  return {
    changeText: `${sign}${formatNumber(Math.abs(changeNum))}원`,
    rateText: `${sign}${Math.abs(changeRateNum).toFixed(1)}%`,
    color
  }
}

function StockInfo({ stockId }: { stockId: string }) {
  const { basicInfo, price, isLoading, isError, error } = useStockInfo(stockId)
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        <span className="ml-2 text-xs text-white">로딩중...</span>
      </div>
    )
  }
  
  if (isError) {
    return (
      <div className="text-center p-2">
        <div className="text-red-400 text-xs font-medium">
          데이터 오류
        </div>
      </div>
    )
  }

  const stockName = basicInfo.data?.stockName || price.data?.stockCode || stockId
  const stockCode = basicInfo.data?.stockCode || stockId
  const currentPrice = price.data?.price || '0'
  const priceChange = formatPriceChange(
    price.data?.change || '0',
    price.data?.changeRate || '0',
    price.data?.changeSign || '3'
  )
  
  return (
    <div className="flex items-center justify-between px-6">
      {/* Left side - Company name and stock code */}
      <div className="flex-1 min-w-0">
        <h1 className="text-base font-semibold text-white truncate mb-1">
          {stockName}
        </h1>
        <div className="text-sm text-gray-300">
          {stockCode}
        </div>
      </div>

      {/* Right side - Price and change */}
      <div className="text-right">
        <div className="text-lg font-bold text-white mb-1">
          {formatNumber(currentPrice)}원
        </div>
        <div className={`text-sm font-medium ${priceChange.color}`}>
          {priceChange.rateText}
        </div>
      </div>
    </div>
  )
}

export default StockInfo