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
import { isPremiumCompany } from "@/lib/companyData"

// API 응답 타입 정의
interface ApiResponse {
  type: 'abouttech'
  data: {
    company: string
    industry: string
    pipeline: string
    products: string
    tech_codes: string
    advantage: string
    summary: string
    abouttech: string[]
  }
}

interface ResultsPanelProps {
  selectedTab: string
  onTabChange: (tab: string) => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  searchData?: ApiResponse | null
  isLoading?: boolean
  onGenerateReport?: (email: string) => Promise<any>
  searchedCompany?: string
}

const RESULT_TABS = ["기술", "상세", "분석"] as const

export function ResultsPanel({ 
  selectedTab, 
  onTabChange, 
  isOpen = true, 
  onOpenChange,
  searchData,
  isLoading,
  onGenerateReport,
  searchedCompany
}: ResultsPanelProps) {
  const [internalOpen, setInternalOpen] = useState(isOpen)
  const [email, setEmail] = useState("")
  const [isEmailInputOpen, setIsEmailInputOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const renderTechnicalContent = () => {
    if (!searchData?.data) {
      return <div className="text-center text-gray-500">검색 결과가 없습니다.</div>
    }

    const { data } = searchData

    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-base">{data.company}</h3>
          <SmartTooltipText className="text-sm text-gray-700 leading-relaxed">
            {data.industry}
          </SmartTooltipText>
        </div>
        
        {/* 기술 분야 */}
        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
          <h4 className="font-medium text-blue-800">핵심 기술</h4>
          <div className="flex flex-wrap gap-2">
            {data.abouttech?.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 기술 요약 */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <h4 className="font-medium">기업 요약</h4>
          <SmartTooltipText className="text-sm text-gray-600 leading-relaxed">
            {data.summary}
          </SmartTooltipText>
        </div>

        {/* 경쟁 우위 */}
        <div className="bg-green-50 p-4 rounded-lg space-y-3">
          <h4 className="font-medium text-green-800">경쟁 우위</h4>
          <SmartTooltipText className="text-sm text-green-700 leading-relaxed">
            {data.advantage}
          </SmartTooltipText>
        </div>
      </div>
    )
  }

  const renderDetailContent = () => {
    if (!searchData?.data) {
      return <div className="text-center text-gray-500">검색 결과가 없습니다.</div>
    }

    const { data } = searchData

    return (
      <div className="space-y-6">
        {/* 파이프라인 */}
        <div className="space-y-3">
          <h4 className="font-medium">파이프라인 및 개발 현황</h4>
          <SmartTooltipText className="text-sm text-gray-700 leading-relaxed">
            {data.pipeline}
          </SmartTooltipText>
        </div>

        {/* 제품 포트폴리오 */}
        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
          <h4 className="font-medium text-blue-800">제품 포트폴리오</h4>
          <SmartTooltipText className="text-sm text-blue-700 leading-relaxed">
            {data.products}
          </SmartTooltipText>
        </div>

        {/* 기술 분류 코드 */}
        <div className="bg-purple-50 p-4 rounded-lg space-y-3">
          <h4 className="font-medium text-purple-800">생명공학기술 분류</h4>
          <SmartTooltipText className="text-sm text-purple-700 leading-relaxed">
            {data.tech_codes}
          </SmartTooltipText>
        </div>
      </div>
    )
  }

  const renderAnalysisContent = () => {
    if (!searchData?.data) {
      return <div className="text-center text-gray-500">검색 결과가 없습니다.</div>
    }

    const isPremium = searchedCompany ? isPremiumCompany(searchedCompany) : false

    return (
      <div className="space-y-6">
        {!isPremium ? (
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-center space-y-4">
            <div className="text-2xl">🔒</div>
            <h4 className="font-medium text-yellow-800">프리미엄 기능</h4>
            <p className="text-sm text-yellow-700">
              상세 분석, 재무 정보, 뉴스 분석 등의 고급 기능은 프리미엄 구독이 필요합니다.
            </p>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              프리미엄 구독하기
            </Button>
          </div>
        ) : (
          <div className="bg-green-50 p-4 rounded-lg space-y-3">
            <h4 className="font-medium text-green-800">✨ 프리미엄 분석</h4>
            <p className="text-sm text-green-700">
              이 회사는 프리미엄 분석이 가능합니다. 상세 레포트를 요청해보세요.
            </p>
          </div>
        )}

        {/* 기본 분석 정보 */}
        <div className="space-y-4">
          <h4 className="font-medium">기본 분석</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">기술 강점</div>
              <div className="text-sm font-medium">
                {searchData.data.abouttech?.length || 0}개 핵심 기술
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">시장 포지션</div>
              <div className="text-sm font-medium">혁신 기업</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 로딩 상태
  if (isLoading) {
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
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">검색 중...</p>
              </div>
            </div>
          </motion.div>
        </DrawerTrigger>
        
        <DrawerContent className="h-[80vh] flex flex-col">
          <DrawerHeader className="flex-shrink-0">
            <DrawerTitle className="text-center text-lg font-semibold">
              검색 중...
            </DrawerTitle>
          </DrawerHeader>
          
          <div className="px-6 pb-6 flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="animate-spin w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
              <p className="text-gray-600">분석 중입니다...</p>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  // 검색 결과가 없는 경우
  if (!searchData) {
    return null
  }

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
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">탭하여 상세 결과 보기</p>
            </div>
          </div>
        </motion.div>
      </DrawerTrigger>
      
      <DrawerContent className="h-[80vh] flex flex-col">
        <DrawerHeader className="flex-shrink-0">
          <DrawerTitle className="text-center text-lg font-semibold">
            {searchData.data.company} 검색 결과
          </DrawerTitle>
        </DrawerHeader>
        
        <div className="px-6 pb-6 flex-1 flex flex-col min-h-0">
          {/* 레포트 요청 섹션 */}
          <div className="bg-blue-50 p-4 rounded-lg space-y-3 mb-4 flex-shrink-0 border border-blue-200">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-blue-800">📧 상세 분석 레포트</h4>
              {searchedCompany && !isPremiumCompany(searchedCompany) && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  프리미엄 필요
                </span>
              )}
            </div>
            <SmartTooltipText className="text-sm text-blue-700">
              {searchedCompany && !isPremiumCompany(searchedCompany) 
                ? '상세 분석 레포트는 프리미엄 구독 회사만 이용 가능합니다.'
                : `이메일로 ${searchData.data.company}의 상세 분석 레포트를 받아보세요`
              }
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
                      disabled={searchedCompany ? !isPremiumCompany(searchedCompany) : true}
                    />
                    <div className="flex gap-2">
                      <Button 
                        type="submit" 
                        size="sm" 
                        className="flex-1"
                        disabled={
                          isSubmitting || 
                          !email.trim() || 
                          (searchedCompany ? !isPremiumCompany(searchedCompany) : true)
                        }
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
                    disabled={searchedCompany ? !isPremiumCompany(searchedCompany) : true}
                  >
                    {searchedCompany && !isPremiumCompany(searchedCompany) 
                      ? "🔒 프리미엄 구독 필요" 
                      : "📧 상세 분석 레포트 받기"
                    }
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
              {selectedTab === "상세" && renderDetailContent()}
              {selectedTab === "분석" && renderAnalysisContent()}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 