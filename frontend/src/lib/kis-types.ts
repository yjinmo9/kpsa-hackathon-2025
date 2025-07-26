// 기본 응답 타입
interface KISBaseResponse {
  rt_cd: string;
  msg_cd: string;
  msg1: string;
}

// OAuth 인증 응답
export interface KISAuthResponse extends KISBaseResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

// 주식 현재가 시세 응답
export interface StockPriceResponse extends KISBaseResponse {
  output: {
    iscd_stat_cls_code: string;
    marg_rate: string;
    rprs_mrkt_kor_name: string;
    bstp_kor_isnm: string;
    temp_stop_yn: string;
    oprc_rang_cont_yn: string;
    clpr_rang_cont_yn: string;
    crdt_able: string;
    grmn_rate_cls_code: string;
    elw_pblc_yn: string;
    stck_prpr: string; // 현재가
    prdy_vrss: string; // 전일 대비
    prdy_vrss_sign: string; // 전일 대비 부호
    prdy_ctrt: string; // 전일 대비율
    acml_vol: string; // 누적 거래량
    acml_tr_pbmn: string; // 누적 거래 대금
    ssts_yn: string;
    stck_shrn_iscd: string;
    fcam_cnnm: string;
    cpfn: string;
    stck_hgpr: string; // 최고가
    stck_lwpr: string; // 최저가
    stck_oprc: string; // 시가
    stck_mxpr: string; // 상한가
    stck_llam: string; // 하한가
  };
}

// 주식 종목 검색 응답
export interface StockSearchResponse extends KISBaseResponse {
  output: Array<{
    pdno: string; // 상품번호 (종목코드)
    prdt_name: string; // 상품명 (종목명)
    prdt_type_cd: string; // 상품유형코드
    mket_id_cd: string; // 시장ID코드
    scty_grp_id_cd: string; // 증권그룹ID코드
    std_pdno: string; // 표준상품번호
    shtn_pdno: string; // 단축상품번호
  }>;
}

// 주식 체결 조회 응답
export interface StockConclusionResponse extends KISBaseResponse {
  output: Array<{
    stck_cntg_hour: string; // 주식 체결 시간
    stck_prpr: string; // 주식 현재가
    prdy_vrss: string; // 전일 대비
    prdy_vrss_sign: string; // 전일 대비 부호
    cntg_vol: string; // 체결 거래량
    tday_rltv: string; // 당일 관련 거래량
  }>;
}

// 주식 일자별 시세 응답
export interface StockDailyPriceResponse extends KISBaseResponse {
  output: Array<{
    stck_bsop_date: string; // 주식 영업 일자
    stck_clpr: string; // 주식 종가
    stck_oprc: string; // 주식 시가
    stck_hgpr: string; // 주식 최고가
    stck_lwpr: string; // 주식 최저가
    acml_vol: string; // 누적 거래량
    acml_tr_pbmn: string; // 누적 거래 대금
    flng_cls_code: string; // 등락 구분 코드
    prtt_rate: string; // 분할 비율
    mod_yn: string; // 분할변경여부
    prdy_vrss_sign: string; // 전일 대비 부호
    prdy_vrss: string; // 전일 대비
    revl_issu_reas: string; // 재평가사유코드
  }>;
}

// 주식 호가/예상체결 응답
export interface StockAskingPriceResponse extends KISBaseResponse {
  output1: {
    aspr_acpt_hour: string; // 호가 접수 시간
    askp1: string; // 매도호가1
    askp2: string; // 매도호가2
    askp3: string; // 매도호가3
    askp4: string; // 매도호가4
    askp5: string; // 매도호가5
    askp6: string; // 매도호가6
    askp7: string; // 매도호가7
    askp8: string; // 매도호가8
    askp9: string; // 매도호가9
    askp10: string; // 매도호가10
    bidp1: string; // 매수호가1
    bidp2: string; // 매수호가2
    bidp3: string; // 매수호가3
    bidp4: string; // 매수호가4
    bidp5: string; // 매수호가5
    bidp6: string; // 매수호가6
    bidp7: string; // 매수호가7
    bidp8: string; // 매수호가8
    bidp9: string; // 매수호가9
    bidp10: string; // 매수호가10
    askp_rsqn1: string; // 매도호가 잔량1
    askp_rsqn2: string; // 매도호가 잔량2
    askp_rsqn3: string; // 매도호가 잔량3
    askp_rsqn4: string; // 매도호가 잔량4
    askp_rsqn5: string; // 매도호가 잔량5
    askp_rsqn6: string; // 매도호가 잔량6
    askp_rsqn7: string; // 매도호가 잔량7
    askp_rsqn8: string; // 매도호가 잔량8
    askp_rsqn9: string; // 매도호가 잔량9
    askp_rsqn10: string; // 매도호가 잔량10
    bidp_rsqn1: string; // 매수호가 잔량1
    bidp_rsqn2: string; // 매수호가 잔량2
    bidp_rsqn3: string; // 매수호가 잔량3
    bidp_rsqn4: string; // 매수호가 잔량4
    bidp_rsqn5: string; // 매수호가 잔량5
    bidp_rsqn6: string; // 매수호가 잔량6
    bidp_rsqn7: string; // 매수호가 잔량7
    bidp_rsqn8: string; // 매수호가 잔량8
    bidp_rsqn9: string; // 매수호가 잔량9
    bidp_rsqn10: string; // 매수호가 잔량10
  };
  output2: {
    antc_cnpr: string; // 예상 체결가
    antc_cntg_vrss: string; // 예상 체결 대비
    antc_cntg_vrss_sign: string; // 예상 체결 대비 부호
    antc_cntg_prdy_ctrt: string; // 예상 체결 전일 대비율
    antc_vol: string; // 예상 거래량
  };
}

// 주식 투자자별 거래 현황 응답
export interface StockInvestorResponse extends KISBaseResponse {
  output: Array<{
    stck_bsop_date: string; // 주식 영업 일자
    stck_clpr: string; // 주식 종가
    prdy_vrss: string; // 전일 대비
    prdy_vrss_sign: string; // 전일 대비 부호
    prdy_ctrt: string; // 전일 대비율
    acml_vol: string; // 누적 거래량
    acml_tr_pbmn: string; // 누적 거래 대금
    frgn_ntby_qty: string; // 외국인 순매수 수량
    orgn_ntby_qty: string; // 기관 순매수 수량
    indi_ntby_qty: string; // 개인 순매수 수량
  }>;
}

// 주식 기간별 시세 응답
export interface StockPeriodPriceResponse extends KISBaseResponse {
  output: Array<{
    stck_bsop_date: string; // 주식 영업 일자
    stck_clpr: string; // 주식 종가
    stck_oprc: string; // 주식 시가
    stck_hgpr: string; // 주식 최고가
    stck_lwpr: string; // 주식 최저가
    acml_vol: string; // 누적 거래량
    acml_tr_pbmn: string; // 누적 거래 대금
    flng_cls_code: string; // 등락 구분 코드
    prdy_vrss_sign: string; // 전일 대비 부호
    prdy_vrss: string; // 전일 대비
    prdy_ctrt: string; // 전일 대비율
  }>;
}

// 주식 분봉 조회 응답
export interface StockMinutePriceResponse extends KISBaseResponse {
  output1: {
    prdy_vrss: string; // 전일 대비
    prdy_vrss_sign: string; // 전일 대비 부호
    prdy_ctrt: string; // 전일 대비율
    stck_prpr: string; // 주식 현재가
    stck_shrn_iscd: string; // 주식 단축 종목코드
    stck_oprc: string; // 주식 시가
    stck_hgpr: string; // 주식 최고가
    stck_lwpr: string; // 주식 최저가
    stck_mxpr: string; // 주식 상한가
    stck_llam: string; // 주식 하한가
    acml_vol: string; // 누적 거래량
    acml_tr_pbmn: string; // 누적 거래 대금
  };
  output2: Array<{
    stck_bsop_date: string; // 주식 영업 일자
    stck_cntg_hour: string; // 주식 체결 시간
    stck_prpr: string; // 주식 현재가
    stck_oprc: string; // 주식 시가
    stck_hgpr: string; // 주식 최고가
    stck_lwpr: string; // 주식 최저가
    cntg_vol: string; // 체결 거래량
    acml_tr_pbmn: string; // 누적 거래 대금
  }>;
}

// === 종목정보 관련 타입 ===

// 종목 기본 정보 응답
export interface StockBasicInfoResponse extends KISBaseResponse {
  output: {
    pdno: string; // 상품번호
    prdt_type_cd: string; // 상품유형코드
    mket_id_cd: string; // 시장ID코드
    scty_grp_id_cd: string; // 증권그룹ID코드
    prdt_name: string; // 상품명
    prdt_name120: string; // 상품명120
    prdt_abrv_name: string; // 상품약어명
    std_pdno: string; // 표준상품번호
    shtn_pdno: string; // 단축상품번호
    prdt_eng_name: string; // 상품영문명
    prdt_eng_name120: string; // 상품영문명120
    prdt_eng_abrv_name: string; // 상품영문약어명
    dprt_name: string; // 부서명
    sect_tp_nm: string; // 섹터유형명
    fnlc_crpc_unpr: string; // 재무법인단가
    cpfn: string; // 자본금
    cmpn_eng_name: string; // 회사영문명
    cmpn_name: string; // 회사명
    ceo_nm: string; // 대표자명
    cmpn_adrs: string; // 회사주소
    hmpg_url: string; // 홈페이지URL
    phn_no: string; // 전화번호
    fax_no: string; // 팩스번호
    estb_dt: string; // 설립일자
    lstg_dt: string; // 상장일자
    lst_stck_vl: string; // 상장주식수
    list_shrs: string; // 상장주식수
    cpfn_cstr_dvsn_cd: string; // 자본금구성구분코드
    stac_month: string; // 결산월
    coper_prdt_type_cd: string; // 협력상품유형코드
    frst_lstg_dt: string; // 최초상장일자
  };
}

// ELW 현재가 시세 응답
export interface ELWPriceResponse extends KISBaseResponse {
  output: {
    iscd_stat_cls_code: string; // 종목상태구분코드
    marg_rate: string; // 증거금비율
    rprs_mrkt_kor_name: string; // 대표시장한글명
    new_mkop_cls_code: string; // 신시장구분코드
    bstp_kor_isnm: string; // 업종한글종목명
    temp_stop_yn: string; // 임시정지여부
    oprc_rang_cont_yn: string; // 시가범위연장여부
    clpr_rang_cont_yn: string; // 종가범위연장여부
    crdt_able: string; // 신용가능여부
    grmn_rate_cls_code: string; // 보증금비율구분코드
    elw_pblc_yn: string; // ELW발행여부
    stck_prpr: string; // 주식현재가
    prdy_vrss: string; // 전일대비
    prdy_vrss_sign: string; // 전일대비부호
    prdy_ctrt: string; // 전일대비율
    acml_vol: string; // 누적거래량
    acml_tr_pbmn: string; // 누적거래대금
    stck_oprc: string; // 주식시가
    stck_hgpr: string; // 주식최고가
    stck_lwpr: string; // 주식최저가
    stck_mxpr: string; // 주식상한가
    stck_llam: string; // 주식하한가
    stck_sdpr: string; // 주식기준가
    elw_expn_dt: string; // ELW만료일자
    elw_exer_px: string; // ELW행사가격
    cnvs_rt: string; // 전환비율
    gearing_rt: string; // 기어링비율
    prm_rt: string; // 프리미엄비율
    brek_evn_rt: string; // 손익분기율
    efft_lvrg_rt: string; // 유효레버리지비율
    intrn_vl: string; // 내재가치
    time_vl: string; // 시간가치
    thtr_pr: string; // 이론가격
    hstl_vltn: string; // 역사적변동성
    impd_vltn: string; // 내재변동성
    delt_rt: string; // 델타비율
    gama_rt: string; // 감마비율
    vega_rt: string; // 베가비율
    thet_rt: string; // 세타비율
    rhho_rt: string; // 로비율
  };
}

// 업종 정보 응답
export interface SectorInfoResponse extends KISBaseResponse {
  output: Array<{
    bstp_cls_code: string; // 업종구분코드
    bstp_cls_name: string; // 업종구분명
    bstp_large_cls_code: string; // 업종대분류코드
    bstp_large_cls_name: string; // 업종대분류명
    bstp_medium_cls_code: string; // 업종중분류코드
    bstp_medium_cls_name: string; // 업종중분류명
    bstp_small_cls_code: string; // 업종소분류코드
    bstp_small_cls_name: string; // 업종소분류명
    idx_bztp_lcls_code: string; // 지수업종대분류코드
    idx_bztp_lcls_name: string; // 지수업종대분류명
    idx_bztp_mcls_code: string; // 지수업종중분류코드
    idx_bztp_mcls_name: string; // 지수업종중분류명
    idx_bztp_scls_code: string; // 지수업종소분류코드
    idx_bztp_scls_name: string; // 지수업종소분류명
  }>;
}

// 휴장일 조회 응답
export interface HolidayResponse extends KISBaseResponse {
  output: Array<{
    bass_dt: string; // 기준일자
    wday_dvsn_cd: string; // 요일구분코드
    bzdy_yn: string; // 영업일여부
    tr_day_yn: string; // 거래일여부
    opnd_yn: string; // 개장여부
    sttl_day_yn: string; // 결제일여부
  }>;
}

// 지수 정보 응답
export interface IndexInfoResponse extends KISBaseResponse {
  output: {
    bstp_nmix_prpr: string; // 업종지수현재가
    bstp_nmix_prdy_vrss: string; // 업종지수전일대비
    prdy_vrss_sign: string; // 전일대비부호
    bstp_nmix_prdy_ctrt: string; // 업종지수전일대비율
    acml_vol: string; // 누적거래량
    acml_tr_pbmn: string; // 누적거래대금
    bstp_nmix_oprc: string; // 업종지수시가
    bstp_nmix_hgpr: string; // 업종지수최고가
    bstp_nmix_lwpr: string; // 업종지수최저가
  };
} 