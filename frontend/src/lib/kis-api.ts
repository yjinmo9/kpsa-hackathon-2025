import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import {
  StockPriceResponse,
  StockSearchResponse,
  StockBasicInfoResponse
} from './kis-types';

export class KISApi {
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://openapi.koreainvestment.com:9443',
      timeout: 10000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // 요청 인터셉터
    this.axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const appKey = process.env.KIS_APP_KEY;
        const appSecret = process.env.KIS_APP_SECRET;
        const accessToken = process.env.ACCESS_TOKEN;
        
        if (!appKey || !appSecret || !accessToken) {
          throw new Error('API credentials not configured');
        }

        // 공통 헤더 설정
        config.headers.appkey = appKey;
        config.headers.appsecret = appSecret;
        config.headers['Content-Type'] = 'application/json';
        config.headers.authorization = `Bearer ${accessToken}`;

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
        return Promise.reject(error);
      }
    );
  }

  // === 주식 현재가 시세 ===
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

  // === 종목 기본 정보 조회 ===
  async getStockBasicInfo(stockCode: string): Promise<StockBasicInfoResponse> {
    const response = await this.axiosInstance.get<StockBasicInfoResponse>(
      `/uapi/domestic-stock/v1/quotations/search-info`,
      {
        params: {
          PDNO: stockCode,
          PRDT_TYPE_CD: '300', // 300: 국내주식
        },
        headers: {
          tr_id: 'CTPF1002R',
        },
      }
    );
    return response.data;
  }

  // === 주식 종목 검색 (키워드 검색) ===
  async searchStocks(keyword: string): Promise<StockSearchResponse> {
    const response = await this.axiosInstance.get<StockSearchResponse>(
      `/uapi/domestic-stock/v1/quotations/search-info`,
      {
        params: {
          PRDT_TYPE_CD: '300',
          PDNO: keyword,
        },
        headers: {
          tr_id: 'CTPF1002R',
        },
      }
    );
    return response.data;
  }
}

// KIS API 인스턴스를 싱글톤으로 사용
export const kisApi = new KISApi(); 