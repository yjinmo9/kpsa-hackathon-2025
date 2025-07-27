"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react"
import { SmartTooltipText } from "./SmartTooltipText"

interface ResultsPanelProps {
  selectedTab: string
  onTabChange: (tab: string) => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const RESULT_TABS = ["기술", "재무", "뉴스"] as const

// 더미 데이터 구조
const MOCK_STOCK_DATA = {
  company: {
    name: "알테오젠",
    code: "376900",
    industry: "바이오의약품",
    marketCap: "50조원",
    price: "100,000",
    change: "+15.2% YoY",
    changeColor: "green"
  },
  technical: {
    title: "기술 분석",
    description: "알테오젠은 항암제, 성장호르몬 치료제, 면역질환 항체치료제 등 다양한 파이프라인을 갖고 있어요. 예를 들어 헬즈마브(헤르셉틴 바이오시밀러 ), 지속형 성장호르몬, ADC 기반신약, 그리고 SC제형으로 바꾼 ALT-B4 등이 있어요.",
    industries: [
      "세포기반치료제",
      "연구 및 생산장비",
      "바이오소케 의약품"
    ],
    businessAreas: [
      {
        title: "파이프라인 요약",
        content: "알테오젠은 항암제, 성장호르몬 치료제, 면역질환 항체치료제 등 다양한 파이프라인을 갖고 있어요. 예를 들어 헬즈마브(헤르셉틴 바이오시밀러 ), 지속형 성장호르몬, ADC 기반신약, 그리고 SC제형으로 바꾼 ALT-B4 등이 있어요."
      },
      {
        title: "주력상품/기술 상세",
        content: "알테오젠은 주사제를 SC 제형으로 바꾸는 ALT-B4 플랫폼(Hybrozyme) 기술을 보유하고 있어요. 이 기술은 글로벌 제약사에 기술수출까지 이루어졌고, 이중 표적 항체·ADC 기술 등 다양한 항체공학 기술로도 해외 파트너십을 확대하고 있어요."
      },
      {
        title: "임상 단계 및 개발 현황",
        content: "주요 제품들은 글로벌 임상시험을 통해 효과와 안전성을 검증하고 있고, 일부는 해외 제약사에 기술수출도 했어요. 지금도 다양한 질병에 적용할 수 있는 신약 후보물질을 놓리는 중이에요."
      }
    ],
    chart: "차별점"
  },
  financial: {
    title: "재무 분석",
    mainMetrics: [
      { label: "2023년 매출", value: "6.1조원", change: "+15.2% YoY", color: "green" },
      { label: "영업이익", value: "2.3조원", change: "+22.8% YoY", color: "blue" },
      { label: "영업이익률", value: "37.7%", change: "업계 최고 수준", color: "purple" },
      { label: "부채비율", value: "12.3%", change: "매우 안정적", color: "orange" }
    ],
    quarterlyRevenue: [
      { quarter: "2023 Q4", revenue: "1.68조원" },
      { quarter: "2023 Q3", revenue: "1.52조원" },
      { quarter: "2023 Q2", revenue: "1.45조원" },
      { quarter: "2023 Q1", revenue: "1.42조원" }
    ],
    investmentPlan: [
      "Plant 5 건설: 2025년 완공 예정 (2조원 투자)",
      "해외 생산기지 확장: 미국, 유럽 진출",
      "차세대 바이오 기술 개발: 500억원 투자"
    ],
    valuation: [
      { metric: "PER", value: "28.5" },
      { metric: "PBR", value: "4.2" },
      { metric: "ROE", value: "15.8%" }
    ]
  },
  news: {
    title: "최신 뉴스",
    articles: [
      {
        title: "Plant 5 건설 착공, 2025년 완공 예정",
        summary: "15,000L 바이오리액터 4기 설치로 생산능력 2배 확대",
        source: "매일경제",
        date: "2024.01.15",
        sentiment: "positive"
      },
      {
        title: "글로벌 빅파마와 5년 장기계약 체결",
        summary: "연간 최대 8000억원 규모, 항암제 생산 계약",
        source: "조선일보",
        date: "2024.01.12",
        sentiment: "positive"
      },
      {
        title: "FDA 승인 바이오시밀러 생산 개시",
        summary: "국내 최초 자가면역질환 치료제 바이오시밀러 생산",
        source: "한국경제",
        date: "2024.01.10",
        sentiment: "positive"
      },
      {
        title: "4분기 실적 발표 임박, 시장 관심 집중",
        summary: "애널리스트들 평균 목표가 120만원으로 상향 조정",
        source: "이투데이",
        date: "2024.01.08",
        sentiment: "neutral"
      },
      {
        title: "원자재 가격 상승으로 원가 부담 증가",
        summary: "하지만 높은 수익성으로 영향 제한적일 전망",
        source: "서울경제",
        date: "2024.01.05",
        sentiment: "caution"
      },
      {
        title: "ESG 경영 강화, 탄소중립 로드맵 발표",
        summary: "2030년까지 탄소배출 50% 감축 목표 설정",
        source: "뉴스1",
        date: "2024.01.03",
        sentiment: "neutral"
      }
    ],
    summary: {
      positive: "대규모 투자 및 장기계약으로 성장 모멘텀 지속",
      neutral: "실적 발표 대기, 원자재 가격 상승 모니터링 필요",
      longTerm: "ESG 경영 및 지속가능성 강화"
    }
  }
}

export function ResultsPanel({ 
  selectedTab, 
  onTabChange, 
  isOpen = true, 
  onOpenChange 
}: ResultsPanelProps) {
  const [internalOpen, setInternalOpen] = useState(isOpen)
  const [email, setEmail] = useState("")
  const [isEmailInputOpen, setIsEmailInputOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [reportSuccess, setReportSuccess] = useState(false)
  
  const handleOpenChange = (open: boolean) => {
    setInternalOpen(open)
    onOpenChange?.(open)
  }

  const handleReportRequest = async () => {
    if (!email.trim()) {
      setIsEmailInputOpen(true)
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/report?email=${encodeURIComponent(email)}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to request report')
      }

      setReportSuccess(true)
      setIsEmailInputOpen(false)
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setReportSuccess(false)
      }, 3000)
      
    } catch (error) {
      console.error('Report request failed:', error)
      alert('레포트 요청에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleReportRequest()
  }

  const renderTechnicalContent = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-base">{MOCK_STOCK_DATA.company.name} ({MOCK_STOCK_DATA.company.code})</h3>
        <SmartTooltipText className="text-sm text-gray-700 leading-relaxed">{MOCK_STOCK_DATA.technical.description}</SmartTooltipText>
      </div>
      
      {/* 산업군 */}
      <div className="bg-blue-50 p-4 rounded-lg space-y-3">
        <h4 className="font-medium text-blue-800">산업군</h4>
        <div className="flex flex-wrap gap-2">
          {MOCK_STOCK_DATA.technical.industries.map((industry, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm border border-blue-200"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>

      {/* 사업 영역 */}
      <div className="space-y-4">
        {MOCK_STOCK_DATA.technical.businessAreas.map((area, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg space-y-3">
            <h4 className="font-medium text-gray-800">{area.title}</h4>
            <SmartTooltipText className="text-sm text-gray-600 leading-relaxed">{area.content}</SmartTooltipText>
          </div>
        ))}
      </div>

      {/* 차별점 섹션 */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <h4 className="font-medium">{MOCK_STOCK_DATA.technical.chart}</h4>
        <SmartTooltipText className="text-sm text-gray-600 leading-relaxed">SC 제형 변환 플랫폼은 세계에서도 손꼽히는 기술이에요.</SmartTooltipText>
      </div>

      {/* 생명공학기술 분류코드 섹션 */}
      <div className="bg-green-50 p-4 rounded-lg space-y-3">
        <h4 className="font-medium text-green-800">생명공학기술 분류코드</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm border border-green-200">
            항체공학기술
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm border border-green-200">
            치료용 항체 및 사이토카인제제
          </span>
        </div>
        <SmartTooltipText className="text-sm text-green-700 leading-relaxed">면역세포를 특정 질병을 정확히 인식하고 치료하도록 돕는 기술</SmartTooltipText>
      </div>

    </div>
  )

  const renderFinancialContent = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-base">투자 성향별 참고 의견</h3>
        
        {/* 투자 의견 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <SmartTooltipText className="text-sm text-gray-600 leading-relaxed">
            신약 개발 성공을 기대하며 성장에 투자하고 싶은 분 주목! 해당 기업은 'R&D 중심 바이오텍'에 속해요. 임상 데이터와 기술이전 실적에 따라 주가가 크게 변동하기 위하며 단기간 성과가 불확실해 장기적 성장성이나 기술 가치에 베팅하는 형태입니다. R&D 비용이 많고 적자 지속 가능성도 염두하여 투자하세요
          </SmartTooltipText>
        </div>
      </div>

      {/* 투자 지표 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
        <h4 className="font-medium">투자 지표</h4>
        <div className="grid grid-cols-5 gap-3 text-center">
          <div className="space-y-2">
            <div className="text-xs text-gray-500">시가총액</div>
            <div className="font-medium text-sm">27.3조원</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500">PBR</div>
            <div className="font-medium text-sm">0.6배</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500">PER</div>
            <div className="font-medium text-sm">6.6배</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500">PSR</div>
            <div className="font-medium text-sm">0.5배</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500">ROE</div>
            <div className="font-medium text-sm">9.6%</div>
          </div>
        </div>
      </div>

    </div>
  )

  const renderNewsContent = () => (
    <div className="space-y-6">
      <h3 className="font-semibold text-base">최근 주요 뉴스</h3>
      
      <div className="space-y-5">
        <div className="border-l-4 border-primary pl-4 bg-primary-foreground p-4 rounded-r-lg space-y-3">
          <SmartTooltipText className="font-medium text-sm leading-relaxed">알테오젠 2대주주 형인우 "키트루다SC 판매가 천기... 코스피 이전 긍정적"</SmartTooltipText>
          <SmartTooltipText className="text-xs text-gray-600 leading-relaxed">월 대표는 알테오젠 주식 27만주를 보유한 2대 주주다. 그의 보유분 액면분할시는 162만주로 보유하고 있다. 2위의 주식 가치는 지난 4일 종가 기준으로 1조...</SmartTooltipText>
          <div className="text-xs text-gray-500">데일리안 • 3주 전</div>
        </div>

        <div className="border-l-4 border-primary pl-4 bg-primary-foreground p-4 rounded-r-lg space-y-3">
          <SmartTooltipText className="font-medium text-sm leading-relaxed">알테오젠, 코스피 이전 기대감에 다시 '들썩'... 5%대 상승 [Why 바이오]</SmartTooltipText>
          <SmartTooltipText className="text-xs text-gray-600 leading-relaxed">이 곳사는 LG생명과학, 알테바이오젠테스 등에서 24년 이상 근무하며 FDA와 EMA로부터 총 7건의 승인 면역에 바이오시밀러 허가를 이끈 CMC 전문가다.</SmartTooltipText>
          <div className="text-xs text-gray-500">머니투데이 • 3주 전</div>
        </div>

        <div className="border-l-4 border-primary pl-4 bg-primary-foreground p-4 rounded-r-lg space-y-3">
          <SmartTooltipText className="font-medium text-sm leading-relaxed">"코스닥 1위가 대전 회사?"알테오젠이 증명한 '한국 경제 지각변동'</SmartTooltipText>
          <SmartTooltipText className="text-xs text-gray-600 leading-relaxed">"코스닥 시총 1위 알테오젠 본사가 대전?" 대전 주식도 단연 대전의 알테오젠이다. 7월 2일 기준, 어려워 코스닥 시가총액 1위인 알테오젠은 시총 21...</SmartTooltipText>
          <div className="text-xs text-gray-500">뉴스타파 • 3주 전</div>
        </div>

        <div className="border-l-4 border-primary pl-4 bg-primary-foreground p-4 rounded-r-lg space-y-3">
          <SmartTooltipText className="font-medium text-sm leading-relaxed">알테오젠 'ALT-B4' 폭 물질특허 등록... 특허소송에 미치는 영향은</SmartTooltipText>
          <SmartTooltipText className="text-xs text-gray-600 leading-relaxed">알테오젠(196170)과 바하마스 선박 회사무브리다의 'ALT-B4'의 물질 특허가 미국 특허청(USPTO) 등록이 결정되다 알테오젠 보사 및 연구소 전략...</SmartTooltipText>
          <div className="text-xs text-gray-500">데일리안 • 3주 전</div>
        </div>
      </div>

    </div>
  )

  return (
    <Drawer open={internalOpen} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          <div className="bg-white rounded-t-3xl px-6 py-4 h-20 cursor-pointer shadow-lg border-t border-gray-200">
            {/* Handle bar */}
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
            
            {/* Preview content */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">탭하여 상세 결과 보기</p>
            </div>
          </div>
        </motion.div>
      </DrawerTrigger>
      
      <DrawerContent className="h-[80vh] flex flex-col">
        <DrawerHeader className="flex-shrink-0">
          <DrawerTitle className="text-center text-lg font-semibold">
            {MOCK_STOCK_DATA.company.name} 검색 결과
          </DrawerTitle>
        </DrawerHeader>
        
        <div className="px-6 pb-6 flex-1 flex flex-col min-h-0">
          {/* 레포트 요청 섹션 */}
          <div className="bg-blue-50 p-4 rounded-lg space-y-3 mb-4 flex-shrink-0 border border-blue-200">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-blue-800">📧 상세 분석 레포트</h4>
            </div>
            <SmartTooltipText className="text-sm text-blue-700">
              {`이메일로 ${MOCK_STOCK_DATA.company.name}의 상세 분석 레포트를 받아보세요`}
            </SmartTooltipText>
            
            {reportSuccess ? (
              <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm text-center font-medium">
                ✓ 레포트 요청이 완료되었습니다. 이메일을 확인해주세요!
              </div>
            ) : (
              <>
                {isEmailInputOpen ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="이메일 주소를 입력하세요"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <Button 
                        type="submit" 
                        size="sm" 
                        className="flex-1"
                        disabled={isLoading || !email.trim()}
                      >
                        {isLoading ? "전송 중..." : "레포트 요청"}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsEmailInputOpen(false)}
                      >
                        취소
                      </Button>
                    </div>
                  </form>
                ) : (
                  <Button 
                    onClick={() => setIsEmailInputOpen(true)}
                    size="sm" 
                    className="w-full"
                    variant="outline"
                  >
                    📧 상세 분석 레포트 받기
                  </Button>
                )}
              </>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-4 flex-shrink-0">
            {RESULT_TABS.map((tab) => (
              <Button
                key={tab}
                variant={selectedTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => onTabChange(tab)}
                className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTab === tab
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Content area */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="text-gray-800 text-sm">
              {selectedTab === "기술" && renderTechnicalContent()}
              {selectedTab === "재무" && renderFinancialContent()}
              {selectedTab === "뉴스" && renderNewsContent()}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 