import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import {
  KISAuthResponse,
  StockPriceResponse,
  StockSearchResponse,
  StockConclusionResponse,
  StockDailyPriceResponse,
  StockAskingPriceResponse,
  StockInvestorResponse,
  StockPeriodPriceResponse,
  StockMinutePriceResponse
} from './kis-types';
import { KISStockInfoApi } from './kis-stock-info';

export class KISApi {
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;
  public stockInfo: KISStockInfoApi;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://openapi.koreainvestment.com:9443',
      timeout: 10000,
    });

    this.setupInterceptors();
    
    // 종목정보 API 인스턴스 생성
    this.stockInfo = new KISStockInfoApi(this.axiosInstance);
  }

  private setupInterceptors(): void {
    // 요청 인터셉터
    this.axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const appKey = process.env.KIS_APP_KEY;
        const appSecret = process.env.KIS_APP_SECRET;
        
        if (!appKey || !appSecret) {
          throw new Error('API credentials not configured');
        }

        // 인증이 필요한 요청에 대해 토큰 설정
        if (config.url !== '/oauth2/tokenP') {
          if (!this.accessToken) {
            this.accessToken = await this.getAccessToken();
          }
          config.headers.authorization = `Bearer ${this.accessToken}`;
        }

        // 공통 헤더 설정
        config.headers.appkey = appKey;
        config.headers.appsecret = appSecret;
        config.headers['Content-Type'] = 'application/json';

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        // 토큰 만료 시 재발급 후 재시도
        if (error.response?.status === 401) {
          this.accessToken = null;
          const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
          
          if (!originalRequest._retry) {
            originalRequest._retry = true;
            this.accessToken = await this.getAccessToken();
            originalRequest.headers.authorization = `Bearer ${this.accessToken}`;
            return this.axiosInstance(originalRequest);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  public setAccessToken(token: string): void {
    this.accessToken = token;
  }

  private async getAccessToken(): Promise<string> {
    // 환경변수에 access token이 있으면 우선 사용
    if (process.env.KIS_ACCESS_TOKEN) {
      return process.env.KIS_ACCESS_TOKEN;
    }

    // 클라이언트 사이드에서는 localStorage의 토큰 사용
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('kis_token');
      if (storedToken) {
        try {
          const tokenData = JSON.parse(storedToken);
          const now = Date.now();
          
          if (now < tokenData.expires_at) {
            return tokenData.access_token;
          } else {
            localStorage.removeItem('kis_token');
            throw new Error('Token expired - please re-authenticate');
          }
        } catch (error) {
          localStorage.removeItem('kis_token');
          throw new Error('Invalid token - please re-authenticate');
        }
      } else {
        throw new Error('No token found - please authenticate first');
      }
    }

    // 서버 사이드에서는 직접 토큰 발급
    const appKey = process.env.KIS_APP_KEY;
    const appSecret = process.env.KIS_APP_SECRET;
    
    if (!appKey || !appSecret) {
      throw new Error('API credentials not configured');
    }

    const response = await this.axiosInstance.post<KISAuthResponse>('/oauth2/tokenP', {
      grant_type: 'client_credentials',
      appkey: appKey,
      appsecret: appSecret,
    });

    return response.data.access_token;
  }

  // === 기본 시세 API ===

  // 주식 현재가 시세
  async getStockPrice(stockCode: string): Promise<StockPriceResponse> {
    const response = await this.axiosInstance.get<StockPriceResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-price`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
        },
        headers: {
          tr_id: 'FHKST01010100',
        },
      }
    );
    return response.data;
  }

  // 주식 종목 검색 (기존 API와 중복되지만 호환성을 위해 유지)
  async getStockInfo(keyword: string): Promise<StockSearchResponse> {
    return this.stockInfo.searchStocks(keyword);
  }

  // 주식 현재가 체결
  async getStockConclusion(stockCode: string): Promise<StockConclusionResponse> {
    const response = await this.axiosInstance.get<StockConclusionResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-ccnl`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
        },
        headers: {
          tr_id: 'FHKST01010300',
        },
      }
    );
    return response.data;
  }

  // 주식 현재가 일자별
  async getStockDailyPrice(stockCode: string, startDate?: string, endDate?: string): Promise<StockDailyPriceResponse> {
    const response = await this.axiosInstance.get<StockDailyPriceResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-daily-price`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
          fid_org_adj_prc: '1', // 0: 수정주가 적용 안함, 1: 수정주가 적용
          fid_period_div_code: 'D', // D: 일별
          ...(startDate && { fid_input_date_1: startDate }),
          ...(endDate && { fid_input_date_2: endDate }),
        },
        headers: {
          tr_id: 'FHKST01010400',
        },
      }
    );
    return response.data;
  }

  // 주식 현재가 호가/예상체결
  async getStockAskingPrice(stockCode: string): Promise<StockAskingPriceResponse> {
    const response = await this.axiosInstance.get<StockAskingPriceResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-asking-price-exp-ccn`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
        },
        headers: {
          tr_id: 'FHKST01010200',
        },
      }
    );
    return response.data;
  }

  // 주식 현재가 투자자별
  async getStockInvestor(stockCode: string): Promise<StockInvestorResponse> {
    const response = await this.axiosInstance.get<StockInvestorResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-investor`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
        },
        headers: {
          tr_id: 'FHKST01010900',
        },
      }
    );
    return response.data;
  }

  // 국내주식 기간별시세(일/주/월/년)
  async getStockPeriodPrice(
    stockCode: string,
    period: 'D' | 'W' | 'M' | 'Y' = 'D',
    adjustedPrice: '0' | '1' = '1'
  ): Promise<StockPeriodPriceResponse> {
    const response = await this.axiosInstance.get<StockPeriodPriceResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-daily-itemchartprice`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
          fid_input_date_1: '', // 조회 시작일자 (YYYYMMDD)
          fid_input_date_2: '', // 조회 종료일자 (YYYYMMDD)
          fid_period_div_code: period, // D:일별, W:주별, M:월별, Y:년별
          fid_org_adj_prc: adjustedPrice, // 0:수정주가 미반영, 1:수정주가 반영
        },
        headers: {
          tr_id: 'FHKST03010100',
        },
      }
    );
    return response.data;
  }

  // 주식 당일분봉조회
  async getStockTodayMinutePrice(stockCode: string, timeCode: '1' | '3' | '5' | '10' | '15' | '30' | '60' = '1'): Promise<StockMinutePriceResponse> {
    const response = await this.axiosInstance.get<StockMinutePriceResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-time-itemconclusion`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
          fid_input_hour_1: timeCode, // 1:1분봉, 3:3분봉, 5:5분봉, 10:10분봉, 15:15분봉, 30:30분봉, 60:60분봉
        },
        headers: {
          tr_id: 'FHKST03010200',
        },
      }
    );
    return response.data;
  }

  // 주식 일별분봉조회
  async getStockDailyMinutePrice(
    stockCode: string,
    targetDate: string,
    timeCode: '1' | '3' | '5' | '10' | '15' | '30' | '60' = '1'
  ): Promise<StockMinutePriceResponse> {
    const response = await this.axiosInstance.get<StockMinutePriceResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-daily-itemchartprice`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
          fid_input_date_1: targetDate, // 조회일자 (YYYYMMDD)
          fid_input_hour_1: timeCode, // 분봉 단위
        },
        headers: {
          tr_id: 'FHKST03010300',
        },
      }
    );
    return response.data;
  }
}

// KIS API 인스턴스를 싱글톤으로 사용
export const kisApi = new KISApi(); 