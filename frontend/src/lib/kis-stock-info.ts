import axios, { AxiosInstance } from 'axios';
import {
  StockBasicInfoResponse,
  ELWPriceResponse,
  SectorInfoResponse,
  HolidayResponse,
  IndexInfoResponse,
  StockSearchResponse
} from './kis-types';

export class KISStockInfoApi {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  // 종목 기본 정보 조회
  async getStockBasicInfo(stockCode: string): Promise<StockBasicInfoResponse> {
    const response = await this.axiosInstance.get<StockBasicInfoResponse>(
      `/uapi/domestic-stock/v1/quotations/search-info`,
      {
        params: {
          PDNO: stockCode,
          PRDT_TYPE_CD: 'S', // S: 주식
        },
        headers: {
          tr_id: 'CTPF1002R',
        },
      }
    );
    return response.data;
  }

  // 상장기업 기본 정보 조회
  async getCompanyInfo(stockCode: string): Promise<StockBasicInfoResponse> {
    const response = await this.axiosInstance.get<StockBasicInfoResponse>(
      `/uapi/domestic-stock/v1/quotations/basic-info`,
      {
        params: {
          FID_COND_MRKT_DIV_CODE: 'J',
          FID_INPUT_ISCD: stockCode,
        },
        headers: {
          tr_id: 'FHKST01010600',
        },
      }
    );
    return response.data;
  }

  // ELW 현재가 시세 조회
  async getELWPrice(stockCode: string): Promise<ELWPriceResponse> {
    const response = await this.axiosInstance.get<ELWPriceResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-elw-price`,
      {
        params: {
          fid_cond_mrkt_div_code: 'J',
          fid_input_iscd: stockCode,
        },
        headers: {
          tr_id: 'FHKEW15010000',
        },
      }
    );
    return response.data;
  }

  // 업종 분류 조회
  async getSectorInfo(): Promise<SectorInfoResponse> {
    const response = await this.axiosInstance.get<SectorInfoResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-sector-info`,
      {
        headers: {
          tr_id: 'FHKST00000400',
        },
      }
    );
    return response.data;
  }

  // 휴장일 조회
  async getHolidays(startDate: string, endDate: string): Promise<HolidayResponse> {
    const response = await this.axiosInstance.get<HolidayResponse>(
      `/uapi/domestic-stock/v1/quotations/chk-holiday`,
      {
        params: {
          BASS_DT: startDate, // 기준일자 (YYYYMMDD)
          CTX_AREA_NK: '',
          CTX_AREA_FK: '',
        },
        headers: {
          tr_id: 'CTCA0903R',
        },
      }
    );
    return response.data;
  }

  // 코스피/코스닥 지수 조회
  async getIndexInfo(indexCode: string): Promise<IndexInfoResponse> {
    const response = await this.axiosInstance.get<IndexInfoResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-index-price`,
      {
        params: {
          fid_cond_mrkt_div_code: 'U', // U: 업종
          fid_input_iscd: indexCode, // 0001: 코스피, 1001: 코스닥
        },
        headers: {
          tr_id: 'FHPUP02100000',
        },
      }
    );
    return response.data;
  }

  // ETF/ETN 현재가 조회
  async getETFPrice(stockCode: string): Promise<StockBasicInfoResponse> {
    const response = await this.axiosInstance.get<StockBasicInfoResponse>(
      `/uapi/domestic-stock/v1/quotations/inquire-etf-price`,
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

  // 주식 종목 검색 (키워드 검색)
  async searchStocks(keyword: string): Promise<StockSearchResponse> {
    const response = await this.axiosInstance.get<StockSearchResponse>(
      `/uapi/domestic-stock/v1/quotations/search-stock-info`,
      {
        params: {
          PRDT_TYPE_CD: 'S', // S: 주식
          PDNO: keyword,
        },
        headers: {
          tr_id: 'CTPF1002R',
        },
      }
    );
    return response.data;
  }

  // 종목별 투자의견 조회
  async getInvestmentOpinion(stockCode: string): Promise<any> {
    const response = await this.axiosInstance.get(
      `/uapi/domestic-stock/v1/quotations/inquire-investment-opinion`,
      {
        params: {
          FID_COND_MRKT_DIV_CODE: 'J',
          FID_INPUT_ISCD: stockCode,
        },
        headers: {
          tr_id: 'FHKST66430200',
        },
      }
    );
    return response.data;
  }

  // 종목별 공시정보 조회
  async getDisclosureInfo(stockCode: string): Promise<any> {
    const response = await this.axiosInstance.get(
      `/uapi/domestic-stock/v1/quotations/inquire-disclosure`,
      {
        params: {
          FID_COND_MRKT_DIV_CODE: 'J',
          FID_INPUT_ISCD: stockCode,
        },
        headers: {
          tr_id: 'FHKST66430100',
        },
      }
    );
    return response.data;
  }

  // 종목별 재무정보 조회 (간략)
  async getFinancialInfo(stockCode: string): Promise<any> {
    const response = await this.axiosInstance.get(
      `/uapi/domestic-stock/v1/quotations/inquire-financial-ratio`,
      {
        params: {
          FID_COND_MRKT_DIV_CODE: 'J',
          FID_INPUT_ISCD: stockCode,
        },
        headers: {
          tr_id: 'FHKST03030100',
        },
      }
    );
    return response.data;
  }

  // 종목별 뉴스 조회
  async getStockNews(stockCode: string): Promise<any> {
    const response = await this.axiosInstance.get(
      `/uapi/domestic-stock/v1/quotations/inquire-daily-news`,
      {
        params: {
          FID_COND_MRKT_DIV_CODE: 'J',
          FID_INPUT_ISCD: stockCode,
          FID_INPUT_DATE_1: '', // 조회시작일자 (YYYYMMDD)
          FID_INPUT_DATE_2: '', // 조회종료일자 (YYYYMMDD)
        },
        headers: {
          tr_id: 'FHKST66430000',
        },
      }
    );
    return response.data;
  }

  // 테마별 종목 조회
  async getThemeStocks(themeCode: string): Promise<any> {
    const response = await this.axiosInstance.get(
      `/uapi/domestic-stock/v1/quotations/inquire-theme-stock`,
      {
        params: {
          FID_THEME_CLS_CODE: themeCode,
        },
        headers: {
          tr_id: 'FHKST03030200',
        },
      }
    );
    return response.data;
  }

  // 관련종목 조회
  async getRelatedStocks(stockCode: string): Promise<any> {
    const response = await this.axiosInstance.get(
      `/uapi/domestic-stock/v1/quotations/inquire-related-stock`,
      {
        params: {
          FID_COND_MRKT_DIV_CODE: 'J',
          FID_INPUT_ISCD: stockCode,
        },
        headers: {
          tr_id: 'FHKST03030300',
        },
      }
    );
    return response.data;
  }
} 