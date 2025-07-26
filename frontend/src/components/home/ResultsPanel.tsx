"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react"

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
    name: "로켓헬스케어",
    code: "376900",
    industry: "바이오의약품",
    marketCap: "50조원"
  },
  technical: {
    title: "기술 분석",
    description: "로켓헬스케어는 인공지능과 3D 바이오프린팅을 접목하여 환자 맞춤형 장기 및 조직재생 치료제, 치료용 세포, 바이오잉크, 의료장비를 종합적으로 개발하는 선도 기업입니다. 세포부터 장기 재생까지 전주기 R&D와 독보적인 융합기술, 맞춤형 의료솔루션 제공이 강점입니다.",
    industries: [
      "세포기반치료제",
      "연구 및 생산장비",
      "바이오스케 의약품"
    ],
    businessAreas: [
      {
        title: "파이프라인 요약",
        content: "맞춤형 3D 바이오프린팅 장기 및 조직재생 솔루션과 자가세포 치료제, 다양한 생체재료 및 의료장비를 개발하고 있습니다."
      },
      {
        title: "주력상품/기술 상세",
        content: "3D 바이오프린팅을 활용한 자가세포 기반 인공장기 및 조직 재건 기술과 고성능 바이오프린터, 바이오잉크, 치료용 세포, 신소재 생체재료, 연구 및 생산용 의료장비를 보유하고 있습니다."
      },
      {
        title: "임상 단계 및 개발 현황",
        content: "맞춤형 치료제, 신규 생체재료, 세포배양 관련 핵심 기술을 임상 및 연구 단계에서 개발 중이며, 관련 특허 출원과 인증절차를 진행하고 있습니다."
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

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive": return "green"
    case "neutral": return "blue"
    case "caution": return "orange"
    default: return "gray"
  }
}

const getMetricColorClasses = (color: string) => {
  switch (color) {
    case "green": return "bg-green-50 text-green-600"
    case "blue": return "bg-blue-50 text-blue-600"
    case "purple": return "bg-purple-50 text-purple-600"
    case "orange": return "bg-orange-50 text-orange-600"
    default: return "bg-gray-50 text-gray-600"
  }
}

export function ResultsPanel({ 
  selectedTab, 
  onTabChange, 
  isOpen = true, 
  onOpenChange 
}: ResultsPanelProps) {
  const [internalOpen, setInternalOpen] = useState(isOpen)
  
  const handleOpenChange = (open: boolean) => {
    setInternalOpen(open)
    onOpenChange?.(open)
  }

  const renderTechnicalContent = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-base mb-2">{MOCK_STOCK_DATA.company.name} ({MOCK_STOCK_DATA.company.code})</h3>
      <p className="text-sm text-gray-700">{MOCK_STOCK_DATA.technical.description}</p>
      
      {/* 산업군 */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium mb-3 text-blue-800">산업군</h4>
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
          <div key={index} className="border border-gray-200 p-4 rounded-lg">
            <h4 className="font-medium mb-2 text-gray-800">{area.title}</h4>
            <p className="text-sm text-gray-600">{area.content}</p>
          </div>
        ))}
      </div>

      {/* 차별점 섹션 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">{MOCK_STOCK_DATA.technical.chart}</h4>
        <div className="text-sm text-gray-600">
          <p>• 3D 바이오프린팅 기술과 AI 융합 플랫폼</p>
          <p>• 환자 맞춤형 장기 및 조직재생 솔루션</p>
          <p>• 세포부터 장기까지 전주기 R&D 역량</p>
          <p>• 독보적인 바이오잉크 및 생체재료 기술</p>
        </div>
      </div>
    </div>
  )

  const renderFinancialContent = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-base mb-2">{MOCK_STOCK_DATA.financial.title}</h3>
      
      {/* 주요 재무 지표 */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {MOCK_STOCK_DATA.financial.mainMetrics.map((metric, index) => (
          <div key={index} className={`p-3 rounded-lg ${getMetricColorClasses(metric.color)}`}>
            <div className="text-xs text-gray-500">{metric.label}</div>
            <div className="font-semibold text-lg">{metric.value}</div>
            <div className={`text-xs ${metric.color === 'green' ? 'text-green-600' : 
              metric.color === 'blue' ? 'text-blue-600' : 
              metric.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`}>
              {metric.change}
            </div>
          </div>
        ))}
      </div>

      {/* 분기별 실적 */}
      <div className="border border-gray-200 p-4 rounded-lg">
        <h4 className="font-medium mb-3">분기별 매출 추이</h4>
        <div className="space-y-2 text-sm">
          {MOCK_STOCK_DATA.financial.quarterlyRevenue.map((quarter, index) => (
            <div key={index} className="flex justify-between">
              <span>{quarter.quarter}</span>
              <span className="font-medium">{quarter.revenue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 투자 계획 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">향후 투자 계획</h4>
        <div className="text-sm text-gray-600">
          {MOCK_STOCK_DATA.financial.investmentPlan.map((plan, index) => (
            <p key={index}>• {plan}</p>
          ))}
        </div>
      </div>

      {/* 밸류에이션 */}
      <div className="grid grid-cols-3 gap-2">
        {MOCK_STOCK_DATA.financial.valuation.map((val, index) => (
          <div key={index} className="text-center p-2 bg-gray-50 rounded">
            <div className="text-xs text-gray-500">{val.metric}</div>
            <div className="font-semibold">{val.value}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderNewsContent = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-base mb-2">{MOCK_STOCK_DATA.news.title}</h3>
      
      <div className="space-y-4">
        {MOCK_STOCK_DATA.news.articles.map((article, index) => (
          <div key={index} className={`border-l-4 border-${getSentimentColor(article.sentiment)}-500 pl-4 bg-${getSentimentColor(article.sentiment)}-50 p-3 rounded-r-lg`}>
            <div className="font-medium text-sm">{article.title}</div>
            <div className="text-xs text-gray-600 mt-1">{article.summary}</div>
            <div className="text-xs text-gray-500 mt-2">{article.source} • {article.date}</div>
          </div>
        ))}
      </div>

      {/* 뉴스 요약 */}
      <div className="border border-gray-200 p-4 rounded-lg mt-4">
        <h4 className="font-medium mb-2 text-gray-800">뉴스 동향 요약</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• <span className="text-green-600 font-medium">긍정적:</span> {MOCK_STOCK_DATA.news.summary.positive}</p>
          <p>• <span className="text-blue-600 font-medium">중립적:</span> {MOCK_STOCK_DATA.news.summary.neutral}</p>
          <p>• <span className="text-purple-600 font-medium">장기적:</span> {MOCK_STOCK_DATA.news.summary.longTerm}</p>
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
      
      <DrawerContent className="h-[80vh]">
        <DrawerHeader>
          <DrawerTitle className="text-center text-lg font-semibold">
            {MOCK_STOCK_DATA.company.name} 검색 결과
          </DrawerTitle>
        </DrawerHeader>
        
        <div className="px-6 pb-6 flex-1 flex flex-col">
          {/* Category tabs */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-4">
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
          <div className="flex-1 overflow-auto">
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