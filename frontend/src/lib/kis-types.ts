// 기본 응답 타입
interface KISBaseResponse {
  rt_cd: string;
  msg_cd: string;
  msg1: string;
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
    prdt_abrv_name: string; // 상품약어명
    pdno_gb_nm: string; // 상품번호구분명
    mket_id_cd: string; // 시장ID코드
    scrt_grp_cls_code: string; // 증권그룹분류코드
  }>;
}

// 종목 기본 정보 응답
export interface StockBasicInfoResponse extends KISBaseResponse {
  output: {
    pdno: string; // 상품번호
    prdt_name: string; // 상품명
    prdt_abrv_name: string; // 상품약어명
    pdno_gb_nm: string; // 상품번호구분명
    mket_id_cd: string; // 시장ID코드
    scrt_grp_cls_code: string; // 증권그룹분류코드
    rprs_mrkt_kor_name?: string; // 대표시장한글명
    bstp_kor_isnm?: string; // 업종한글명
    temp_stop_yn?: string; // 거래정지여부
    oprc_rang_cont_yn?: string; // 시가범위연장여부
    clpr_rang_cont_yn?: string; // 종가범위연장여부
    crdt_able?: string; // 신용가능여부
    grmn_rate_cls_code?: string; // 증거금율분류코드
    elw_pblc_yn?: string; // ELW발행여부
    stck_prpr?: string; // 주식현재가
    prdy_vrss?: string; // 전일대비
    prdy_vrss_sign?: string; // 전일대비부호
    prdy_ctrt?: string; // 전일대비율
    acml_vol?: string; // 누적거래량
    acml_tr_pbmn?: string; // 누적거래대금
    ssts_yn?: string; // 단기과열여부
    stck_shrn_iscd?: string; // 주식단축종목코드
    fcam_cnnm?: string; // 액면가통화명
    cpfn?: string; // 자본금
    stck_hgpr?: string; // 주식최고가
    stck_lwpr?: string; // 주식최저가
    stck_oprc?: string; // 주식시가
    stck_mxpr?: string; // 주식상한가
    stck_llam?: string; // 주식하한가
    wghn_avrg_stck_prc?: string; // 가중평균주식가격
    hts_frgn_ehrt?: string; // HTS외국인소진율
    frgn_ntby_qty?: string; // 외국인순매수수량
    pgtr_ntby_qty?: string; // 프로그램순매수수량
    pvt_scnd_dmrs_prc?: string; // 피벗2차디저항가격
    pvt_frst_dmrs_prc?: string; // 피벗1차디저항가격
    pvt_pont_val?: string; // 피벗포인트값
    pvt_frst_dmsp_prc?: string; // 피벗1차디지지가격
    pvt_scnd_dmsp_prc?: string; // 피벗2차디지지가격
    dmrs_val?: string; // 디저항값
    dmsp_val?: string; // 디지지값
    cpfn_cnnm?: string; // 자본금통화명
    rstc_wdth_prc?: string; // 제한폭가격
    stck_fcam?: string; // 주식액면가
    stck_sspr?: string; // 주식대용가
    d250_hgpr?: string; // 250일최고가
    d250_hgpr_date?: string; // 250일최고가일자
    d250_hgpr_vrss_prpr_rate?: string; // 250일최고가대비현재가비율
    d250_lwpr?: string; // 250일최저가
    d250_lwpr_date?: string; // 250일최저가일자
    d250_lwpr_vrss_prpr_rate?: string; // 250일최저가대비현재가비율
    stck_sdpr?: string; // 주식기준가
    stck_par?: string; // 주식액면가
    stck_par_cnnm?: string; // 주식액면가통화명
  };
} 