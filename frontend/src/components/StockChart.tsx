'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StockData {
  timestamp: string;
  price: number;
  change: number;
  changeRate: number;
  volume: number;
  high: number;
  low: number;
  open: number;
}

interface PriceData {
  time: string;
  price: number;
}

interface KISStockResponse {
  rt_cd: string;
  msg_cd: string;
  msg1: string;
  output: {
    stck_prpr: string; // 현재가
    prdy_vrss: string; // 전일 대비
    prdy_vrss_sign: string; // 전일 대비 부호
    prdy_ctrt: string; // 전일 대비율
    acml_vol: string; // 누적 거래량
    stck_hgpr: string; // 최고가
    stck_lwpr: string; // 최저가
    stck_oprc: string; // 시가
    bstp_kor_isnm: string; // 종목명
  };
}

export function StockChart({ stockCode = '005930' }: { stockCode?: string }) {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [priceHistory, setPriceHistory] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stockName, setStockName] = useState('Samsung Electronics');

  // useEffect(() => {
  //   fetchStockData();
    
  //   // Set up interval to fetch data every 5 seconds
  //   const interval = setInterval(fetchStockData, 5000);
    
  //   return () => clearInterval(interval);
  // }, [stockCode]);

  const fetchStockData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if token exists and is valid
      const storedToken = localStorage.getItem('kis_token');
      if (!storedToken) {
        throw new Error('인증이 필요합니다. 홈 페이지에서 API 인증을 먼저 진행해주세요.');
      }

      const tokenData = JSON.parse(storedToken);
      const now = Date.now();
      
      if (now >= tokenData.expires_at) {
        localStorage.removeItem('kis_token');
        throw new Error('토큰이 만료되었습니다. 홈 페이지에서 다시 인증해주세요.');
      }
      
      const response = await fetch(`/api/stock?action=price&code=${stockCode}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch stock data: ${response.statusText}`);
      }
      
      const data: KISStockResponse = await response.json();
      
      if (data.rt_cd !== '0') {
        throw new Error(data.msg1 || 'API Error');
      }

      const output = data.output;
      const price = parseFloat(output.stck_prpr);
      const change = parseFloat(output.prdy_vrss);
      const changeRate = parseFloat(output.prdy_ctrt);
      
      const newStockData: StockData = {
        timestamp: new Date().toLocaleTimeString(),
        price,
        change,
        changeRate,
        volume: parseInt(output.acml_vol),
        high: parseFloat(output.stck_hgpr),
        low: parseFloat(output.stck_lwpr),
        open: parseFloat(output.stck_oprc)
      };

      setStockData(newStockData);
      setStockName(output.bstp_kor_isnm || 'Unknown Stock');

      // Add to price history
      const newPriceData: PriceData = {
        time: new Date().toLocaleTimeString(),
        price
      };

      setPriceHistory(prev => {
        const updated = [...prev, newPriceData];
        // Keep only last 20 data points
        return updated.slice(-20);
      });
      
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const getPriceChangeColor = (change: number) => {
    if (change > 0) return 'text-red-500';
    if (change < 0) return 'text-blue-500';
    return 'text-gray-500';
  };

  const getStatusColor = () => {
    if (error) return 'text-red-500';
    if (loading) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getStatusText = () => {
    if (error) return `Error: ${error}`;
    if (loading) return 'Loading...';
    return 'Connected';
  };

  return (
    <div className="p-4 space-y-4">
      {/* Status */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{stockName} ({stockCode})</h2>
        <div className={`text-sm ${getStatusColor()}`}>
          ● {getStatusText()}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {error}
          <button 
            onClick={fetchStockData}
            className="ml-2 underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Stock Info Card */}
      {stockData && (
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold">
                {stockData.price.toLocaleString()}원
              </div>
              <div className={`text-sm ${getPriceChangeColor(stockData.change)}`}>
                {stockData.change > 0 ? '+' : ''}{stockData.change.toLocaleString()}원 
                ({stockData.changeRate > 0 ? '+' : ''}{stockData.changeRate.toFixed(2)}%)
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">거래량</div>
              <div className="text-lg font-semibold">
                {stockData.volume.toLocaleString()}
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-xs text-gray-600">시가</div>
              <div className="text-sm font-semibold">{stockData.open.toLocaleString()}원</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-600">고가</div>
              <div className="text-sm font-semibold text-red-500">{stockData.high.toLocaleString()}원</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-600">저가</div>
              <div className="text-sm font-semibold text-blue-500">{stockData.low.toLocaleString()}원</div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-2">
            마지막 업데이트: {stockData.timestamp}
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">주가 차트</h3>
        {priceHistory.length > 0 ? (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  domain={['dataMin - 100', 'dataMax + 100']}
                />
                <Tooltip 
                  formatter={(value: any) => [`${value?.toLocaleString()}원`, '주가']}
                  labelStyle={{ color: '#666' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  dot={false}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center text-gray-500">
            {loading ? '데이터 로딩 중...' : error ? '데이터를 불러올 수 없습니다' : '데이터 없음'}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-2">
        <button
          onClick={fetchStockData}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 text-sm"
        >
          {loading ? '로딩 중...' : '새로고침'}
        </button>
        <button
          onClick={() => setPriceHistory([])}
          className="px-4 py-2 bg-gray-500 text-white rounded-md text-sm"
        >
          차트 초기화
        </button>
      </div>
    </div>
  );
}