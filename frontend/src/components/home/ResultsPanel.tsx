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
import { COMPANY_DATA, type CompanyData } from "@/lib/companyData"

interface ResultsPanelProps {
  selectedTab: string
  onTabChange: (tab: string) => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  newsData?: any[]
  techData?: any
  isLoading?: boolean
  onGenerateReport?: (email: string) => Promise<any>
  searchedCompany?: string
}

const RESULT_TABS = ["기술", "재무", "뉴스"] as const

export function ResultsPanel({ 
  selectedTab, 
  onTabChange, 
  isOpen = true, 
  onOpenChange,
  newsData,
  techData,
  isLoading,
  onGenerateReport,
  searchedCompany
}: ResultsPanelProps) {
  const [internalOpen, setInternalOpen] = useState(isOpen)
  const [email, setEmail] = useState("")
  const [isEmailInputOpen, setIsEmailInputOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reportSuccess, setReportSuccess] = useState(false)

  // 검색된 회사에 따라 데이터 가져오기
  console.log("🚀 ~ searchedCompany:", searchedCompany)
  console.log("🚀 ~ COMPANY_DATA keys:", Object.keys(COMPANY_DATA))
  
  const currentCompanyData = searchedCompany && COMPANY_DATA[searchedCompany] 
    ? COMPANY_DATA[searchedCompany] 
    : COMPANY_DATA["알테오젠"] // 기본값으로 알테오젠 사용
  
  const handleOpenChange = (open: boolean) => {
    setInternalOpen(open)
    onOpenChange?.(open)
  }

  const handleReportRequest = async () => {
    if (!email.trim()) {
      setIsEmailInputOpen(true)
      return
    }

    if (!searchedCompany) {
      alert('검색된 회사가 없습니다. 다시 검색해주세요.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name: searchedCompany })
      })
      
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
      setIsSubmitting(false)
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleReportRequest()
  }

  const renderTechnicalContent = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-base">{currentCompanyData.company.name} ({currentCompanyData.company.code})</h3>
        <SmartTooltipText className="text-sm text-gray-700 leading-relaxed">{currentCompanyData.technical.description}</SmartTooltipText>
      </div>
      
      {/* 산업군 */}
      <div className="bg-blue-50 p-4 rounded-lg space-y-3">
        <h4 className="font-medium text-blue-800">산업군</h4>
        <div className="flex flex-wrap gap-2">
          {currentCompanyData.technical.industries.map((industry, index) => (
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
        {currentCompanyData.technical.businessAreas.map((area, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg space-y-3">
            <h4 className="font-medium text-gray-800">{area.title}</h4>
            <SmartTooltipText className="text-sm text-gray-600 leading-relaxed">{area.content}</SmartTooltipText>
          </div>
        ))}
      </div>

      {/* 차별점 섹션 */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <h4 className="font-medium">{currentCompanyData.technical.chart}</h4>
        <SmartTooltipText className="text-sm text-gray-600 leading-relaxed">핵심 기술과 차별화된 경쟁력을 보유하고 있습니다.</SmartTooltipText>
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
        <h3 className="font-semibold text-base">재무 분석</h3>
        
        {/* 주요 재무 지표 */}
        <div className="space-y-4">
          {currentCompanyData.financial.mainMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <div className="font-medium text-sm">{metric.label}</div>
                <div className="text-xs text-gray-600 mt-1">{metric.change}</div>
              </div>
              <div className={`font-bold text-sm ${
                metric.color === 'green' ? 'text-green-600' :
                metric.color === 'red' ? 'text-red-600' :
                metric.color === 'blue' ? 'text-blue-600' :
                metric.color === 'purple' ? 'text-purple-600' :
                'text-orange-600'
              }`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 분기별 실적 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
        <h4 className="font-medium">분기별 실적</h4>
        <div className="space-y-2">
          {currentCompanyData.financial.quarterlyRevenue.map((quarter, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{quarter.quarter}</span>
              <span className="font-medium text-sm">{quarter.revenue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 투자 계획 */}
      <div className="bg-blue-50 p-4 rounded-lg space-y-3">
        <h4 className="font-medium text-blue-800">투자 계획 및 전망</h4>
        <ul className="space-y-2">
          {currentCompanyData.financial.investmentPlan.map((plan, index) => (
            <li key={index} className="text-sm text-blue-700">• {plan}</li>
          ))}
        </ul>
      </div>

    </div>
  )

  const renderNewsContent = () => (
    <div className="space-y-6">
      <h3 className="font-semibold text-base">최근 주요 뉴스</h3>
      
      <div className="space-y-5">
        {currentCompanyData.news.articles.map((article, index) => (
          <div key={index} className={`border-l-4 pl-4 p-4 rounded-r-lg space-y-3 ${
            article.sentiment === 'positive' ? 'border-green-500 bg-green-50' :
            article.sentiment === 'negative' ? 'border-red-500 bg-red-50' :
            'border-gray-500 bg-gray-50'
          }`}>
            <SmartTooltipText className="font-medium text-sm leading-relaxed">{article.title}</SmartTooltipText>
            <SmartTooltipText className="text-xs text-gray-600 leading-relaxed">{article.summary}</SmartTooltipText>
            <div className="text-xs text-gray-500">{article.source} • {article.date}</div>
          </div>
        ))}
      </div>

      {/* 뉴스 요약 */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <h4 className="font-medium">뉴스 종합 분석</h4>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-medium text-green-600">긍정적: </span>
            <span className="text-gray-700">{currentCompanyData.news.summary.positive}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-gray-600">중립적: </span>
            <span className="text-gray-700">{currentCompanyData.news.summary.neutral}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-blue-600">장기 전망: </span>
            <span className="text-gray-700">{currentCompanyData.news.summary.longTerm}</span>
          </div>
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
            {currentCompanyData.company.name} 검색 결과
          </DrawerTitle>
        </DrawerHeader>
        
        <div className="px-6 pb-6 flex-1 flex flex-col min-h-0">
          {/* 레포트 요청 섹션 */}
          <div className="bg-blue-50 p-4 rounded-lg space-y-3 mb-4 flex-shrink-0 border border-blue-200">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-blue-800">📧 상세 분석 레포트</h4>
            </div>
            <SmartTooltipText className="text-sm text-blue-700">
              {`이메일로 ${currentCompanyData.company.name}의 상세 분석 레포트를 받아보세요`}
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
                        disabled={isSubmitting || !email.trim()}
                      >
                        {isSubmitting ? "전송 중..." : "레포트 요청"}
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