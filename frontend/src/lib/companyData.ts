export interface CompanyData {
  company: {
    name: string
    code: string
    industry: string
    marketCap: string
    price: string
    change: string
    changeColor: string
  }
  technical: {
    title: string
    description: string
    industries: string[]
    businessAreas: {
      title: string
      content: string
    }[]
    chart: string
  }
  financial: {
    title: string
    mainMetrics: {
      label: string
      value: string
      change: string
      color: string
    }[]
    quarterlyRevenue: {
      quarter: string
      revenue: string
    }[]
    investmentPlan: string[]
    valuation: {
      metric: string
      value: string
    }[]
  }
  news: {
    title: string
    articles: {
      title: string
      summary: string
      source: string
      date: string
      sentiment: string
    }[]
    summary: {
      positive: string
      neutral: string
      longTerm: string
    }
  }
}

export const COMPANY_DATA: Record<string, CompanyData> = {
  "삼성바이오로직스": {
    company: {
      name: "삼성바이오로직스",
      code: "207940",
      industry: "CDMO (Contract Development and Manufacturing Organization)",
      marketCap: "71.86조원",
      price: "1,010,000",
      change: "-0.49%",
      changeColor: "red"
    },
    technical: {
      title: "기술 분석",
      description: "세계 최대 단일 CDMO 생산능력을 보유하고 있으며, 현재 604,000L에서 2025년 784,000L로 확장 예정입니다. S-CHOice™, S-HiCon™ 등 9개 CDO 플랫폼을 보유하고 있고, 2024년 전용 ADC 시설 완공으로 차세대 치료제 제조 역량을 확보했습니다.",
      industries: [
        "CDMO",
        "바이오의약품 제조",
        "ADC 치료제"
      ],
      businessAreas: [
        {
          title: "CDMO 플랫폼",
          content: "S-CHOice™, S-HiCon™ 등 9개 CDO 플랫폼을 통해 글로벌 톱20 제약회사 중 17개에 서비스를 제공하며, 110개 이상의 클라이언트를 보유하고 있습니다."
        },
        {
          title: "생산 역량",
          content: "세계 최대 단일 CDMO 생산능력 604,000L를 보유하고 있으며, 2025년 Plant 5 가동으로 784,000L로 확장 예정입니다."
        },
        {
          title: "ADC 특화 시설",
          content: "2024년 전용 ADC 시설을 완공하여 차세대 항체-약물 접합체 치료제 제조 역량을 확보했습니다."
        }
      ],
      chart: "글로벌 CDMO 시장 리더십"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "4.55조원", change: "+23% YoY", color: "green" },
        { label: "영업이익", value: "1.32조원", change: "+19% YoY", color: "blue" },
        { label: "영업이익률", value: "29.0%", change: "안정적 수익성", color: "purple" },
        { label: "PER", value: "52.0", change: "프리미엄 밸류에이션", color: "orange" }
      ],
      quarterlyRevenue: [
        { quarter: "2024 Q4", revenue: "1.14조원" },
        { quarter: "2024 Q3", revenue: "1.13조원" },
        { quarter: "2024 Q2", revenue: "1.15조원" },
        { quarter: "2024 Q1", revenue: "1.13조원" }
      ],
      investmentPlan: [
        "Plant 5 건설: 2025년 가동 예정",
        "향후 5년간 7.5조원 시설 투자",
        "ADC 전용 시설 확장",
        "글로벌 CDMO 역량 강화"
      ],
      valuation: [
        { metric: "PER", value: "52.0" },
        { metric: "목표주가", value: "1,310,000원" },
        { metric: "시가총액", value: "71.86조원" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "2025년 5월 스핀오프 발표로 순수 CDMO 구조 전환",
          summary: "삼성바이오로직스가 순수 CDMO 기업으로 거듭나며 글로벌 경쟁력 강화에 나선다",
          source: "데일리팜",
          date: "2025.01.15",
          sentiment: "positive"
        },
        {
          title: "미국 바이오시큐어법 수혜 기대",
          summary: "중국 CDMO 견제로 인한 수혜 기대감이 높아지고 있다",
          source: "파이낸셜뉴스",
          date: "2025.01.10",
          sentiment: "positive"
        },
        {
          title: "Plant 5 2025년 가동 예정",
          summary: "784,000L 생산능력으로 세계 최대 CDMO 지위 공고화",
          source: "바이오타임즈",
          date: "2025.01.05",
          sentiment: "positive"
        }
      ],
      summary: {
        positive: "스핀오프를 통한 순수 CDMO 구조 전환으로 글로벌 경쟁력 강화",
        neutral: "기업 구조조정에 따른 단기 주가 변동성 존재",
        longTerm: "글로벌 CDMO 시장 성장과 함께 지속적 성장 전망"
      }
    }
  },

  "셀트리온": {
    company: {
      name: "셀트리온",
      code: "068270",
      industry: "바이오시밀러 개발/제조",
      marketCap: "39.6조원",
      price: "178,000",
      change: "-1.33%",
      changeColor: "red"
    },
    technical: {
      title: "기술 분석",
      description: "11개 바이오시밀러 상업화에 성공했으며, 렘시마는 1조원 매출을 달성했습니다. EU 시장에서 62% 점유율을 보유하고 있으며, 아시아 최대 250,000L 동물세포배양 시설을 운영하고 있습니다.",
      industries: [
        "바이오시밀러",
        "ADC 플랫폼",
        "CAR-T 치료제"
      ],
      businessAreas: [
        {
          title: "바이오시밀러 포트폴리오",
          content: "렘시마(EU 시장점유율 62%), 트룩시마, 허쥬마 등 11개 바이오시밀러를 상업화하여 글로벌 시장을 선도하고 있습니다."
        },
        {
          title: "차세대 플랫폼",
          content: "ADC 플랫폼(CT-P70, CT-P71)과 CAR-T 치료제 개발을 통해 혁신적인 치료법 영역으로 사업을 확장하고 있습니다."
        },
        {
          title: "생산 시설",
          content: "아시아 최대 250,000L 동물세포배양 시설을 보유하여 대규모 생산능력을 확보하고 있습니다."
        }
      ],
      chart: "바이오시밀러 글로벌 리더"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "3.56조원", change: "+63.4% YoY", color: "green" },
        { label: "영업이익", value: "492억원", change: "-24.5% YoY", color: "red" },
        { label: "2025년 목표매출", value: "5조원", change: "연 30% 성장", color: "blue" },
        { label: "ROE 목표", value: "7%", change: "2027년 달성", color: "purple" }
      ],
      quarterlyRevenue: [
        { quarter: "2025 Q1", revenue: "737억원" },
        { quarter: "2024 Q4", revenue: "890억원" },
        { quarter: "2024 Q3", revenue: "856억원" },
        { quarter: "2024 Q2", revenue: "901억원" }
      ],
      investmentPlan: [
        "2025년 매출 5조원 목표",
        "2027년까지 연 30% 성장",
        "유럽 1.55조원, 북미 1조원 이상",
        "ROE 2027년 7% 달성"
      ],
      valuation: [
        { metric: "시가총액", value: "39.6조원" },
        { metric: "2025년 목표", value: "5조원 매출" },
        { metric: "ROE", value: "7% (2027년)" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "2025년 Q1 매출 737억원, 23.3% 증가",
          summary: "견고한 성장세를 지속하며 연간 목표 달성 기대감 증가",
          source: "컴퍼니가이드",
          date: "2025.04.15",
          sentiment: "positive"
        },
        {
          title: "유플라이마 FDA 호환성 승인 획득",
          summary: "미국 시장 진출 기반 마련으로 글로벌 경쟁력 강화",
          source: "바이오타임즈",
          date: "2025.03.20",
          sentiment: "positive"
        },
        {
          title: "데노수맙 바이오시밀러 미국 출시",
          summary: "골다공증 치료제 시장 진입으로 포트폴리오 다각화",
          source: "메디파나",
          date: "2025.02.28",
          sentiment: "positive"
        }
      ],
      summary: {
        positive: "견고한 성장세와 글로벌 시장 확대로 장기 성장 모멘텀 확보",
        neutral: "트럼프 정부 의약품 가격정책 불확실성에 대응 중",
        longTerm: "바이오시밀러 시장 성장과 함께 차세대 치료제로 영역 확장"
      }
    }
  },

  "알테오젠": {
    company: {
      name: "알테오젠",
      code: "196170",
      industry: "차세대 바이오의약품 플랫폼",
      marketCap: "21.7조원",
      price: "368,500",
      change: "+0.00%",
      changeColor: "gray"
    },
    technical: {
      title: "기술 분석",
      description: "ALT-B4 (Hybrozyme) 플랫폼을 통해 IV를 SC 주사로 전환하는 세계 2위 기술을 보유하고 있습니다. MSD 키트루다 SC 43억달러, 다이이찌산쿄 엔허투 SC 3억달러 등 대형 계약을 체결했으며, 2040년까지 핵심 기술 특허가 보호됩니다.",
      industries: [
        "SC 제형 변환",
        "ADC 기술",
        "바이오베터"
      ],
      businessAreas: [
        {
          title: "ALT-B4 플랫폼",
          content: "Hybrozyme 기술을 통해 정맥주사(IV)를 피하주사(SC)로 전환하는 세계 2위 기술로, 환자 편의성과 치료 효과를 동시에 개선합니다."
        },
        {
          title: "글로벌 파트너십",
          content: "MSD 키트루다 SC 43억달러, 다이이찌산쿄 엔허투 SC 3억달러, 아스트라제네카 13.5억달러 등 총 9조원 규모의 기술이전 계약을 체결했습니다."
        },
        {
          title: "ADC 개발",
          content: "ALT-P7 Phase I을 완료하고 Phase II를 준비 중이며, 차세대 ADC 기술 개발에 집중하고 있습니다."
        }
      ],
      chart: "SC 제형 변환 글로벌 리더"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "1,028억원", change: "+6.5% YoY", color: "green" },
        { label: "영업이익", value: "254억원", change: "흑자전환", color: "blue" },
        { label: "기술이전 계약", value: "9조원", change: "총 계약 규모", color: "purple" },
        { label: "목표주가", value: "523,333원", change: "증권사 컨센서스", color: "orange" }
      ],
      quarterlyRevenue: [
        { quarter: "2024 Q4", revenue: "257억원" },
        { quarter: "2024 Q3", revenue: "256억원" },
        { quarter: "2024 Q2", revenue: "258억원" },
        { quarter: "2024 Q1", revenue: "257억원" }
      ],
      investmentPlan: [
        "키트루다 SC Phase III 완료",
        "아스트라제네카 추가 13.5억달러 계약",
        "ADC 플랫폼 Phase II 진입",
        "2040년까지 특허 보호 확보"
      ],
      valuation: [
        { metric: "시가총액", value: "21.7조원" },
        { metric: "목표주가", value: "523,333원" },
        { metric: "코스닥", value: "1위" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "아스트라제네카 13.5억달러 추가 계약",
          summary: "2025년 3월 대형 추가 계약으로 글로벌 파트너십 확대",
          source: "메디파나",
          date: "2025.03.15",
          sentiment: "positive"
        },
        {
          title: "키트루다 SC Phase III 성공",
          summary: "MSD와의 대형 계약 이행에 중요한 이정표 달성",
          source: "바이오타임즈",
          date: "2025.02.20",
          sentiment: "positive"
        },
        {
          title: "할로자임 특허 분쟁 해결 진행",
          summary: "특허 분쟁 해결 과정에서 주가 변동성 지속",
          source: "나무위키",
          date: "2025.01.25",
          sentiment: "neutral"
        }
      ],
      summary: {
        positive: "글로벌 빅파마와의 대형 계약 체결로 장기 수익 가시성 확보",
        neutral: "특허 분쟁 해결 과정에서 단기 변동성 존재",
        longTerm: "SC 제형 변환 시장 성장과 함께 지속적 로열티 수익 기대"
      }
    }
  },

  "유한양행": {
    company: {
      name: "유한양행",
      code: "000100",
      industry: "제약/바이오신약 개발",
      marketCap: "8.3조원",
      price: "103,600",
      change: "+1.57%",
      changeColor: "green"
    },
    technical: {
      title: "기술 분석",
      description: "렉클라자로 한국 최초 항암신약 미국 FDA 승인을 달성했습니다. YH32367 (HER2 이중항체), YH35324 (알레르기 치료제) 등 혁신적인 파이프라인을 보유하고 있으며, 얀센과의 공동개발을 통해 25% 사망위험 감소를 확인했습니다.",
      industries: [
        "항암신약",
        "이중항체",
        "알레르기 치료제"
      ],
      businessAreas: [
        {
          title: "렉클라자 성공",
          content: "한국 최초 항암신약으로 미국 FDA 승인을 받았으며, 2024년 12월 유럽 승인도 획득하여 글로벌 시장 진출을 완료했습니다."
        },
        {
          title: "혁신 파이프라인",
          content: "YH32367 (HER2 이중항체), YH35324 (알레르기 치료제) 등 차세대 치료제 개발에 집중하고 있습니다."
        },
        {
          title: "글로벌 파트너십",
          content: "얀센과 렉클라자 공동개발을 통해 25% 사망위험 감소 효과를 확인하며, 6천만달러 마일스톤을 수령했습니다."
        }
      ],
      chart: "한국 최초 항암신약 FDA 승인"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "2.07조원", change: "+11.2% YoY", color: "green" },
        { label: "영업이익", value: "47.6억원", change: "-16.4% YoY", color: "red" },
        { label: "R&D 투자", value: "277.1억원", change: "+116.6억원 증가", color: "blue" },
        { label: "목표주가", value: "158,750원", change: "상향 조정", color: "purple" }
      ],
      quarterlyRevenue: [
        { quarter: "2024 Q4", revenue: "518억원" },
        { quarter: "2024 Q3", revenue: "517억원" },
        { quarter: "2024 Q2", revenue: "518억원" },
        { quarter: "2024 Q1", revenue: "517억원" }
      ],
      investmentPlan: [
        "렉클라자 글로벌 시장 확대",
        "6천만달러 마일스톤 수령",
        "R&D 투자 대폭 확대 (277.1억원)",
        "차세대 파이프라인 임상 진행"
      ],
      valuation: [
        { metric: "시가총액", value: "8.3조원" },
        { metric: "목표주가", value: "158,750원" },
        { metric: "PER", value: "-" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "렉클라자 유럽 승인 획득",
          summary: "2024년 12월 유럽 승인으로 글로벌 시장 진출 완료",
          source: "헬스코리아뉴스",
          date: "2024.12.15",
          sentiment: "positive"
        },
        {
          title: "6천만달러 마일스톤 수령",
          summary: "얀센과의 렉클라자 공동개발 성과로 대규모 마일스톤 수령",
          source: "바이오타임즈",
          date: "2024.11.20",
          sentiment: "positive"
        },
        {
          title: "R&D 투자 대폭 확대",
          summary: "2024년 277.1억원으로 116.6억원 증가, 혁신 신약 개발 가속화",
          source: "히트뉴스",
          date: "2024.10.25",
          sentiment: "positive"
        }
      ],
      summary: {
        positive: "렉클라자 글로벌 성공으로 한국 신약 개발의 새로운 이정표 수립",
        neutral: "대규모 R&D 투자로 단기 수익성 압박 존재",
        longTerm: "혁신 신약 포트폴리오 확대를 통한 지속적 성장 기대"
      }
    }
  },

  "리가켐바이오": {
    company: {
      name: "리가켐바이오",
      code: "141080",
      industry: "ADC 전문 바이오테크",
      marketCap: "5.19조원",
      price: "141,800",
      change: "+16.9%",
      changeColor: "green"
    },
    technical: {
      title: "기술 분석",
      description: "6년 연속 'Best ADC Platform Technology' 수상(2018-2024)으로 세계적 인정을 받고 있습니다. ConjuAll™ 플랫폼을 통해 25개 ADC 파이프라인을 보유하여 세계 최대 규모를 자랑하며, 얀센 LCB84 17억달러, 오노제약 LCB97 7억달러 등 대형 계약을 체결했습니다.",
      industries: [
        "ADC 기술",
        "항암 치료제",
        "표적 치료"
      ],
      businessAreas: [
        {
          title: "ConjuAll™ 플랫폼",
          content: "25개 ADC 파이프라인을 보유한 세계 최대 규모의 ADC 플랫폼으로, 6년 연속 'Best ADC Platform Technology' 수상으로 기술력을 인정받고 있습니다."
        },
        {
          title: "글로벌 기술이전",
          content: "얀센 LCB84 17억달러, 오노제약 LCB97 7억달러 등 대형 기술이전을 통해 글로벌 경쟁력을 입증했습니다."
        },
        {
          title: "임상 현황",
          content: "현재 3개 이상의 Phase I 임상이 진행 중이며, 2027년까지 20개 ADC 자산 목표로 파이프라인을 확대하고 있습니다."
        }
      ],
      chart: "세계 최대 ADC 플랫폼"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "125.9억원", change: "+268.7% YoY", color: "green" },
        { label: "순이익", value: "7.8억원", change: "흑자전환", color: "blue" },
        { label: "2025년 Q1", value: "+66.1%", change: "매출 증가", color: "green" },
        { label: "투자유치", value: "584.8억원", change: "오리온홀딩스", color: "purple" }
      ],
      quarterlyRevenue: [
        { quarter: "2025 Q1", revenue: "31.5억원" },
        { quarter: "2024 Q4", revenue: "31.5억원" },
        { quarter: "2024 Q3", revenue: "31.5억원" },
        { quarter: "2024 Q2", revenue: "31.4억원" }
      ],
      investmentPlan: [
        "2025년 글로벌 R&D Day 성공적 개최",
        "20개 ADC 자산 2027년 목표",
        "오리온홀딩스 584.8억원 투자 (25.73% 지분)",
        "임상단계 기술이전 확대"
      ],
      valuation: [
        { metric: "시가총액", value: "5.19조원" },
        { metric: "오리온지분", value: "25.73%" },
        { metric: "기술이전", value: "24억달러+" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "2025년 글로벌 R&D Day 성공적 개최",
          summary: "ADC 기술력과 파이프라인을 글로벌 투자자들에게 선보이며 높은 관심 유도",
          source: "바이오타임즈",
          date: "2025.02.15",
          sentiment: "positive"
        },
        {
          title: "오리온홀딩스 584.8억원 투자",
          summary: "25.73% 지분 확보로 전략적 파트너십 강화",
          source: "이데일리",
          date: "2024.12.20",
          sentiment: "positive"
        },
        {
          title: "20개 ADC 자산 2027년 목표",
          summary: "현재 25개 파이프라인에서 상업화 가능한 20개 자산으로 집중",
          source: "메디파나",
          date: "2024.11.18",
          sentiment: "positive"
        }
      ],
      summary: {
        positive: "세계 최대 ADC 플랫폼으로 글로벌 기술이전 성과 지속",
        neutral: "임상 단계 기술이전으로 높은 가치 실현하지만 개발 리스크 존재",
        longTerm: "ADC 시장 성장과 함께 플랫폼 기술의 지속적 가치 창출 기대"
      }
    }
  },

  "에이비엘바이오": {
    company: {
      name: "에이비엘바이오",
      code: "298380",
      industry: "이중항체 면역치료제",
      marketCap: "4,567억원",
      price: "83,800",
      change: "-5.4%",
      changeColor: "red"
    },
    technical: {
      title: "기술 분석",
      description: "Grabody-T (면역항암), Grabody-B (BBB 투과) 이중항체 플랫폼을 보유하고 있습니다. GSK 4조 1,104억원 기술이전으로 BBB 기술을 검증받았으며, ABL301 (파킨슨병), ABL111 (위암) 등 다수 임상이 진행 중입니다.",
      industries: [
        "이중항체",
        "뇌혈관장벽 통과",
        "면역항암"
      ],
      businessAreas: [
        {
          title: "Grabody 플랫폼",
          content: "Grabody-T (면역항암)과 Grabody-B (BBB 투과) 이중항체 플랫폼으로 차별화된 치료제 개발이 가능합니다."
        },
        {
          title: "GSK 대형 기술이전",
          content: "GSK와 4조 1,104억원 규모의 기술이전을 통해 BBB 투과 기술의 우수성을 검증받았습니다."
        },
        {
          title: "임상 파이프라인",
          content: "ABL301 (파킨슨병), ABL111 (위암) 등 다양한 적응증에서 임상시험이 진행되고 있으며, ABL111 병용요법에서 ORR 71%를 달성했습니다."
        }
      ],
      chart: "뇌혈관장벽 통과 기술 선도"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "334억원", change: "-47% YoY", color: "red" },
        { label: "영업손실", value: "594억원", change: "R&D 투자 확대", color: "red" },
        { label: "보유자금", value: "4,000억원", change: "기술이전금 포함", color: "blue" },
        { label: "투자유치", value: "1,400억원", change: "2024년 유상증자", color: "purple" }
      ],
      quarterlyRevenue: [
        { quarter: "2024 Q4", revenue: "83.5억원" },
        { quarter: "2024 Q3", revenue: "83.5억원" },
        { quarter: "2024 Q2", revenue: "83.5억원" },
        { quarter: "2024 Q1", revenue: "83.5억원" }
      ],
      investmentPlan: [
        "GSK 플랫폼 기술이전으로 BBB 기술 검증",
        "ABL111 병용요법 ORR 71% 달성",
        "사노피 10.6억달러 추가 기술이전",
        "다양한 적응증 임상 확대"
      ],
      valuation: [
        { metric: "시가총액", value: "4,567억원" },
        { metric: "기술이전", value: "4조원+" },
        { metric: "보유자금", value: "4,000억원" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "GSK 4조 1,104억원 기술이전",
          summary: "2024년 12월 대형 기술이전으로 BBB 기술 우수성 재확인",
          source: "히트뉴스",
          date: "2024.12.28",
          sentiment: "positive"
        },
        {
          title: "ABL111 병용요법 ORR 71% 달성",
          summary: "위암 치료에서 높은 반응률로 임상 효과 입증",
          source: "에이비엘바이오",
          date: "2024.11.15",
          sentiment: "positive"
        },
        {
          title: "사노피 10.6억달러 기술이전",
          summary: "이중항체 플랫폼의 글로벌 경쟁력 재확인",
          source: "나무위키",
          date: "2024.10.20",
          sentiment: "positive"
        }
      ],
      summary: {
        positive: "GSK 대형 기술이전으로 BBB 기술 검증 및 글로벌 경쟁력 확보",
        neutral: "기술이전 중심 수익으로 매출 변동성이 높은 구조",
        longTerm: "이중항체 플랫폼 기술의 다양한 적응증 확장 가능성"
      }
    }
  },

  "녹십자": {
    company: {
      name: "녹십자",
      code: "006280",
      industry: "혈액제제/백신 전문",
      marketCap: "1조 7,845억원",
      price: "152,700",
      change: "-0.65%",
      changeColor: "red"
    },
    technical: {
      title: "기술 분석",
      description: "혈액분획제제 기술 전문 기업으로 세계 2위 헌터라제 개발에 성공했습니다. 알리글로는 2023년 미국 FDA 승인을 받은 면역글로불린 제제이며, WHO PQ 인증 독감백신과 수두백신으로 글로벌 시장에 진출했습니다.",
      industries: [
        "혈액분획제제",
        "백신",
        "면역글로불린"
      ],
      businessAreas: [
        {
          title: "혈액제제 전문성",
          content: "혈액분획제제 기술의 국내 선도 기업으로 세계 2위 헌터라제 개발 성공으로 기술력을 인정받고 있습니다."
        },
        {
          title: "알리글로 성공",
          content: "2023년 미국 FDA 승인을 받은 면역글로불린 제제로, 2024년 미국 시장에서 200억원 매출을 달성하며 2028년 3억달러 목표를 설정했습니다."
        },
        {
          title: "글로벌 백신",
          content: "WHO PQ 인증 독감백신과 수두백신으로 글로벌 시장에 진출하여 해외 사업을 확대하고 있습니다."
        }
      ],
      chart: "혈액제제 국내 1위"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "1.68조원", change: "+3.3% YoY", color: "green" },
        { label: "영업이익", value: "640억원", change: "-6.8% YoY", color: "red" },
        { label: "2023년 매출", value: "1.71조원", change: "역대 최대", color: "blue" },
        { label: "해외 투자", value: "1,380억원", change: "ABO홀딩스 인수", color: "purple" }
      ],
      quarterlyRevenue: [
        { quarter: "2024 Q4", revenue: "420억원" },
        { quarter: "2024 Q3", revenue: "420억원" },
        { quarter: "2024 Q2", revenue: "420억원" },
        { quarter: "2024 Q1", revenue: "420억원" }
      ],
      investmentPlan: [
        "알리글로 미국 시장 확대 (2028년 3억달러 목표)",
        "미국 ABO홀딩스 1,380억원 인수",
        "글로벌 백신 사업 확장",
        "혈액제제 기술 고도화"
      ],
      valuation: [
        { metric: "시가총액", value: "1조 7,845억원" },
        { metric: "알리글로목표", value: "3억달러(2028)" },
        { metric: "해외투자", value: "1,380억원" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "알리글로 미국 진출 성공",
          summary: "2024년 미국 시장에서 200억원 매출 달성, 2028년 3억달러 목표",
          source: "팜뉴스",
          date: "2024.12.31",
          sentiment: "positive"
        },
        {
          title: "미국 ABO홀딩스 1,380억원 인수",
          summary: "글로벌 혈액제제 사업 확장을 위한 전략적 투자",
          source: "팜뉴스",
          date: "2024.11.25",
          sentiment: "positive"
        },
        {
          title: "WHO PQ 인증 백신 글로벌 공급",
          summary: "독감백신과 수두백신으로 글로벌 시장 점유율 확대",
          source: "위키피디아",
          date: "2024.10.30",
          sentiment: "positive"
        }
      ],
      summary: {
        positive: "알리글로 미국 진출 성공으로 글로벌 사업 확장 가속화",
        neutral: "백신 시장 경쟁 심화로 일부 매출 감소 압박",
        longTerm: "혈액제제 전문성을 바탕으로 한 지속적 글로벌 확장"
      }
    }
  },

  "앱클론": {
    company: {
      name: "앱클론",
      code: "174900",
      industry: "항체/CAR-T 치료제",
      marketCap: "2,320억원",
      price: "12,150",
      change: "+1.98%",
      changeColor: "green"
    },
    technical: {
      title: "기술 분석",
      description: "h1218 인간화 항체 기반 CAR-T 플랫폼과 NEST 항체 발굴 기술을 보유하고 있습니다. AT101 (네스페셀)은 ORR 94%, CRR 63%로 기존 치료제 대비 우수한 효능을 보이며, AC101은 헨리우스와 4천만달러 기술이전을 체결했습니다.",
      industries: [
        "CAR-T 치료제",
        "항체 치료제",
        "혈액암 치료"
      ],
      businessAreas: [
        {
          title: "CAR-T 플랫폼",
          content: "h1218 인간화 항체 기반 CAR-T 플랫폼과 NEST 항체 발굴 기술로 차별화된 세포치료제를 개발하고 있습니다."
        },
        {
          title: "네스페셀 (AT101)",
          content: "ORR 94%, CRR 63%의 우수한 임상 결과로 기존 CAR-T 치료제 대비 뛰어난 효능과 안전성을 입증했습니다."
        },
        {
          title: "글로벌 기술이전",
          content: "AC101을 헨리우스에 4천만달러에 기술이전하여 글로벌 임상 3상이 진행 중이며, 미국 FDA 희귀의약품으로 지정받았습니다."
        }
      ],
      chart: "차세대 CAR-T 기술"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "30.2억원", change: "-1.9% YoY", color: "red" },
        { label: "영업손실", value: "152억원", change: "R&D 투자", color: "red" },
        { label: "관리종목", value: "2025년 3월", change: "매출 미달", color: "red" },
        { label: "종근당 투자", value: "122억원", change: "2대 주주", color: "blue" }
      ],
      quarterlyRevenue: [
        { quarter: "2024 Q4", revenue: "7.6억원" },
        { quarter: "2024 Q3", revenue: "7.5억원" },
        { quarter: "2024 Q2", revenue: "7.6억원" },
        { quarter: "2024 Q1", revenue: "7.5억원" }
      ],
      investmentPlan: [
        "네스페셀 임상 최종 단계",
        "AC101 미국 FDA 희귀의약품 지정",
        "종근당 전략적 투자 122억원",
        "관리종목 해제를 위한 매출 확대"
      ],
      valuation: [
        { metric: "시가총액", value: "2,320억원" },
        { metric: "기술이전", value: "4천만달러" },
        { metric: "종근당지분", value: "2대주주" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "네스페셀 우수한 임상 결과",
          summary: "ORR 94%, CRR 63%로 기존 CAR-T 치료제 대비 뛰어난 효능 입증",
          source: "바이오타임즈",
          date: "2025.01.20",
          sentiment: "positive"
        },
        {
          title: "AC101 미국 FDA 희귀의약품 지정",
          summary: "헨리우스 기술이전 제품이 FDA 희귀의약품으로 지정받아 개발 가속화",
          source: "이티뉴스",
          date: "2024.12.10",
          sentiment: "positive"
        },
        {
          title: "관리종목 편입",
          summary: "2025년 3월 매출 미달로 관리종목 지정, 상장폐지 위험 존재",
          source: "네이트",
          date: "2025.03.01",
          sentiment: "negative"
        }
      ],
      summary: {
        positive: "네스페셀과 AC101의 우수한 임상 결과로 기술적 가치 입증",
        neutral: "종근당의 전략적 투자로 재무 안정성 일부 확보",
        longTerm: "관리종목 해제와 상용화 성공이 향후 성장의 핵심 과제"
      }
    }
  },

  "파마리서치": {
    company: {
      name: "파마리서치",
      code: "214450",
      industry: "재생의학/에스테틱",
      marketCap: "3조 9,600억원",
      price: "376,500",
      change: "-3.04%",
      changeColor: "red"
    },
    technical: {
      title: "기술 분석",
      description: "PDRN/PN 기술 기반 DOT® (DNA Optimizing Technology)를 보유하고 있습니다. 대표 제품인 리쥬란® 스킨부스터는 매출의 52.2%를 차지하며, 2024년 보툴리눔 톡신 제제 리엔톡스 품목허가를 받아 사업 영역을 확장했습니다.",
      industries: [
        "재생의학",
        "에스테틱",
        "PDRN 기술"
      ],
      businessAreas: [
        {
          title: "DOT® 기술",
          content: "PDRN/PN 기술 기반 DOT® (DNA Optimizing Technology)로 재생의학 분야에서 독보적인 기술력을 보유하고 있습니다."
        },
        {
          title: "리쥬란® 브랜드",
          content: "리쥬란® 스킨부스터가 매출의 52.2%를 차지하는 핵심 제품으로, 글로벌 에스테틱 시장에서 인정받고 있습니다."
        },
        {
          title: "리엔톡스",
          content: "2024년 보툴리눔 톡신 제제 리엔톡스 품목허가를 받아 에스테틱 포트폴리오를 확장했습니다."
        }
      ],
      chart: "PDRN 기술 글로벌 리더"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "3,000억원", change: "진입 예상", color: "green" },
        { label: "영업이익", value: "1,000억원", change: "돌파 전망", color: "blue" },
        { label: "2023년 매출", value: "2,608억원", change: "+34.1% YoY", color: "green" },
        { label: "영업이익률", value: "34.85%", change: "고수익성", color: "purple" }
      ],
      quarterlyRevenue: [
        { quarter: "2024 Q4", revenue: "750억원" },
        { quarter: "2024 Q3", revenue: "750억원" },
        { quarter: "2024 Q2", revenue: "750억원" },
        { quarter: "2024 Q1", revenue: "750억원" }
      ],
      investmentPlan: [
        "CVC캐피탈 2,000억원 투자유치",
        "글로벌 M&A 계획 추진",
        "리엔톡스 상업화 확대",
        "해외 시장 진출 가속화"
      ],
      valuation: [
        { metric: "시가총액", value: "3조 9,600억원" },
        { metric: "투자유치", value: "2,000억원" },
        { metric: "영업이익률", value: "34.85%" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "CVC캐피탈 2,000억원 투자유치",
          summary: "2024년 9월 대규모 투자유치로 글로벌 M&A 계획 추진",
          source: "이데일리",
          date: "2024.09.15",
          sentiment: "positive"
        },
        {
          title: "리엔톡스 품목허가 획득",
          summary: "2024년 보툴리눔 톡신 제제로 에스테틱 포트폴리오 확장",
          source: "네이버 파이낸스",
          date: "2024.08.20",
          sentiment: "positive"
        },
        {
          title: "2024년 매출 3,000억원 돌파 전망",
          summary: "리쥬란® 브랜드 성장과 신제품 출시로 매출 확대",
          source: "히트뉴스",
          date: "2024.12.30",
          sentiment: "positive"
        }
      ],
      summary: {
        positive: "CVC캐피탈 투자유치로 글로벌 확장 기반 마련",
        neutral: "의료기기 의존도 52%로 규제 변화에 민감한 구조",
        longTerm: "재생의학 시장 성장과 함께 글로벌 M&A를 통한 확장 기대"
      }
    }
  },

  "종근당바이오": {
    company: {
      name: "종근당바이오",
      code: "185750",
      industry: "완제의약품/바이오신약",
      marketCap: "1조 1,373억원",
      price: "116,200",
      change: "-2.76%",
      changeColor: "red"
    },
    technical: {
      title: "기술 분석",
      description: "CKD-510을 노바티스에 1.7조원 기술수출(2023년 11월)하며 혁신 전환을 이뤘습니다. 시나픽스에서 1,650억원으로 기술도입한 ADC 플랫폼과 CKD-703 FDA 임상 승인을 통해 차세대 치료제 개발에 집중하고 있습니다.",
      industries: [
        "완제의약품",
        "ADC 플랫폼",
        "CAR-T 치료제"
      ],
      businessAreas: [
        {
          title: "노바티스 기술수출",
          content: "CKD-510을 노바티스에 1.7조원에 기술수출하여 국내 제약업계 최대 규모의 기술이전을 달성했습니다."
        },
        {
          title: "ADC 플랫폼",
          content: "시나픽스에서 1,650억원으로 ADC 플랫폼을 기술도입하여 CKD-703이 FDA 임상 승인을 받았습니다."
        },
        {
          title: "CAR-T 진출",
          content: "앱클론에 122억원을 투자하여 2대 주주가 되었으며, AT101 국내 판권을 확보했습니다."
        }
      ],
      chart: "국내 최대 기술수출 성과"
    },
    financial: {
      title: "재무 분석",
      mainMetrics: [
        { label: "2024년 매출", value: "1.59조원", change: "-5% YoY", color: "red" },
        { label: "영업이익", value: "994억원", change: "-59.7% YoY", color: "red" },
        { label: "2023년 매출", value: "1.67조원", change: "+12.2% YoY", color: "green" },
        { label: "R&D 투자", value: "12%", change: "매출 대비", color: "blue" }
      ],
      quarterlyRevenue: [
        { quarter: "2024 Q4", revenue: "397.5억원" },
        { quarter: "2024 Q3", revenue: "397.5억원" },
        { quarter: "2024 Q2", revenue: "397.5억원" },
        { quarter: "2024 Q1", revenue: "397.5억원" }
      ],
      investmentPlan: [
        "CKD-703 FDA 임상 승인 활용",
        "앱클론 CAR-T 기술 확보",
        "ADC 플랫폼 상업화 추진",
        "매출 대비 12% R&D 투자 지속"
      ],
      valuation: [
        { metric: "시가총액", value: "1조 1,373억원" },
        { metric: "기술수출", value: "1.7조원" },
        { metric: "R&D비중", value: "12%" }
      ]
    },
    news: {
      title: "최신 뉴스",
      articles: [
        {
          title: "CKD-703 FDA 임상 승인",
          summary: "시나픽스 기술도입 ADC 플랫폼이 FDA 임상 승인으로 상업화 가능성 확대",
          source: "한국경제",
          date: "2025.01.10",
          sentiment: "positive"
        },
        {
          title: "앱클론 CAR-T 기술 확보",
          summary: "122억원 투자로 2대 주주가 되어 AT101 국내 판권 확보",
          source: "한국경제",
          date: "2024.11.30",
          sentiment: "positive"
        },
        {
          title: "기술수출 기저효과로 실적 부진",
          summary: "2023년 1.7조원 기술수출 기저효과로 2024년 실적 일시 부진",
          source: "딜사이트",
          date: "2024.12.28",
          sentiment: "neutral"
        }
      ],
      summary: {
        positive: "CKD-703 FDA 승인과 앱클론 CAR-T 기술 확보로 차세대 플랫폼 구축",
        neutral: "노바티스 기술수출 기저효과로 단기 실적 부진",
        longTerm: "ADC와 CAR-T 플랫폼을 통한 중장기 성장 모멘텀 확보"
      }
    }
  }
}