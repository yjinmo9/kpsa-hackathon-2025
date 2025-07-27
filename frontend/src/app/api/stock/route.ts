import { NextRequest, NextResponse } from "next/server";

// 회사명 매핑 - SearchInterface에서 사용하는 회사명과 동일해야 함
const COMPANY_MAPPING: Record<string, { company: string, technology: string[] }> = {
  "삼성바이오로직스": {
    company: "삼성바이오로직스",
    technology: ["CDMO", "바이오의약품 제조", "ADC 치료제"]
  },
  "셀트리온": {
    company: "셀트리온",
    technology: ["바이오시밀러", "ADC 플랫폼", "CAR-T 치료제"]
  },
  "알테오젠": {
    company: "알테오젠",
    technology: ["SC 제형 변환", "ADC 기술", "바이오베터"]
  },
  "유한양행": {
    company: "유한양행",
    technology: ["항암신약", "이중항체", "알레르기 치료제"]
  },
  "리가켐바이오": {
    company: "리가켐바이오",
    technology: ["ADC 기술", "항암 치료제", "표적 치료"]
  },
  "에이비엘바이오": {
    company: "에이비엘바이오",
    technology: ["이중항체", "뇌혈관장벽 통과", "면역항암"]
  },
  "녹십자": {
    company: "녹십자",
    technology: ["혈액분획제제", "백신", "면역글로불린"]
  },
  "앱클론": {
    company: "앱클론",
    technology: ["CAR-T 치료제", "항체 치료제", "혈액암 치료"]
  },
  "파마리서치": {
    company: "파마리서치",
    technology: ["재생의학", "에스테틱", "PDRN 기술"]
  },
  "종근당바이오": {
    company: "종근당바이오",
    technology: ["완제의약품", "ADC 플랫폼", "CAR-T 치료제"]
  }
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || searchParams.get('q') || '';
  
  console.log("🚀 ~ Stock API query:", query);
  
  // 검색 쿼리에 해당하는 회사 찾기
  const matchedCompany = Object.keys(COMPANY_MAPPING).find(companyName => 
    companyName.toLowerCase().includes(query.toLowerCase()) || 
    query.toLowerCase().includes(companyName.toLowerCase())
  );
  
  if (matchedCompany && COMPANY_MAPPING[matchedCompany]) {
    console.log("🚀 ~ Found company:", matchedCompany);
    return NextResponse.json(COMPANY_MAPPING[matchedCompany]);
  }
  
  // 기본값으로 알테오젠 반환
  console.log("🚀 ~ Default to 알테오젠");
  return NextResponse.json(COMPANY_MAPPING["알테오젠"]);
}


