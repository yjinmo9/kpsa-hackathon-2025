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
            검색 결과
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
                    ? "bg-gray-800 text-white shadow-sm"
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
              {selectedTab === "요약" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-base mb-2">삼성바이오로직스 요약</h3>
                  <p>바이오의약품 생산 전문 기업으로, 글로벌 CMO(Contract Manufacturing Organization) 시장에서 선도적 위치를 차지하고 있습니다.</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">시가총액</div>
                      <div className="font-semibold">약 50조원</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">업종</div>
                      <div className="font-semibold">바이오의약품</div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedTab === "기술" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-base mb-2">기술 분석</h3>
                  <p>최첨단 바이오리액터 기술과 정제 공정 기술을 보유하고 있으며, 글로벌 제약회사들의 신약 생산을 담당하고 있습니다.</p>
                  
                  {/* 핵심 기술 */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 text-blue-800">핵심 기술 역량</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>15,000L 대용량 바이오리액터 운영 (Plant 4)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>단일클론항체 생산 전문 기술</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>연속 정제 공정 (Continuous Processing)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>완전 자동화 생산 시스템</span>
                      </li>
                    </ul>
                  </div>

                  {/* 기술 지표 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">연간 생산 능력</div>
                      <div className="font-semibold text-lg">370,000L</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">생산 수율</div>
                      <div className="font-semibold text-lg">95%+</div>
                    </div>
                  </div>

                  {/* R&D 투자 */}
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">R&D 투자 현황</h4>
                    <div className="text-sm text-gray-600">
                      <p>• 2023년 R&D 투자: 약 500억원 (매출 대비 8.2%)</p>
                      <p>• 특허 보유: 국내외 120건</p>
                      <p>• 차세대 바이오리액터 기술 개발 중</p>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedTab === "재무" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-base mb-2">재무 분석</h3>
                  
                  {/* 주요 재무 지표 */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">2023년 매출</div>
                      <div className="font-semibold text-lg">6.1조원</div>
                      <div className="text-xs text-green-600">+15.2% YoY</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">영업이익</div>
                      <div className="font-semibold text-lg">2.3조원</div>
                      <div className="text-xs text-blue-600">+22.8% YoY</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">영업이익률</div>
                      <div className="font-semibold text-lg">37.7%</div>
                      <div className="text-xs text-purple-600">업계 최고 수준</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">부채비율</div>
                      <div className="font-semibold text-lg">12.3%</div>
                      <div className="text-xs text-orange-600">매우 안정적</div>
                    </div>
                  </div>

                  {/* 분기별 실적 */}
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">분기별 매출 추이</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>2023 Q4</span>
                        <span className="font-medium">1.68조원</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2023 Q3</span>
                        <span className="font-medium">1.52조원</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2023 Q2</span>
                        <span className="font-medium">1.45조원</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2023 Q1</span>
                        <span className="font-medium">1.42조원</span>
                      </div>
                    </div>
                  </div>

                  {/* 투자 계획 */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">향후 투자 계획</h4>
                    <div className="text-sm text-gray-600">
                      <p>• Plant 5 건설: 2025년 완공 예정 (2조원 투자)</p>
                      <p>• 해외 생산기지 확장: 미국, 유럽 진출</p>
                      <p>• 차세대 바이오 기술 개발: 500억원 투자</p>
                    </div>
                  </div>

                  {/* 밸류에이션 */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-500">PER</div>
                      <div className="font-semibold">28.5</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-500">PBR</div>
                      <div className="font-semibold">4.2</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-500">ROE</div>
                      <div className="font-semibold">15.8%</div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedTab === "뉴스" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-base mb-2">최신 뉴스</h3>
                  
                  <div className="space-y-4">
                    {/* 긍정적 뉴스 */}
                    <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg">
                      <div className="font-medium text-sm">Plant 5 건설 착공, 2025년 완공 예정</div>
                      <div className="text-xs text-gray-600 mt-1">
                        15,000L 바이오리액터 4기 설치로 생산능력 2배 확대
                      </div>
                      <div className="text-xs text-gray-500 mt-2">매일경제 • 2024.01.15</div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r-lg">
                      <div className="font-medium text-sm">글로벌 빅파마와 5년 장기계약 체결</div>
                      <div className="text-xs text-gray-600 mt-1">
                        연간 최대 8000억원 규모, 항암제 생산 계약
                      </div>
                      <div className="text-xs text-gray-500 mt-2">조선일보 • 2024.01.12</div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r-lg">
                      <div className="font-medium text-sm">FDA 승인 바이오시밀러 생산 개시</div>
                      <div className="text-xs text-gray-600 mt-1">
                        국내 최초 자가면역질환 치료제 바이오시밀러 생산
                      </div>
                      <div className="text-xs text-gray-500 mt-2">한국경제 • 2024.01.10</div>
                    </div>

                    {/* 중립적/주의 뉴스 */}
                    <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-3 rounded-r-lg">
                      <div className="font-medium text-sm">4분기 실적 발표 임박, 시장 관심 집중</div>
                      <div className="text-xs text-gray-600 mt-1">
                        애널리스트들 평균 목표가 120만원으로 상향 조정
                      </div>
                      <div className="text-xs text-gray-500 mt-2">이투데이 • 2024.01.08</div>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-3 rounded-r-lg">
                      <div className="font-medium text-sm">원자재 가격 상승으로 원가 부담 증가</div>
                      <div className="text-xs text-gray-600 mt-1">
                        하지만 높은 수익성으로 영향 제한적일 전망
                      </div>
                      <div className="text-xs text-gray-500 mt-2">서울경제 • 2024.01.05</div>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-3 rounded-r-lg">
                      <div className="font-medium text-sm">ESG 경영 강화, 탄소중립 로드맵 발표</div>
                      <div className="text-xs text-gray-600 mt-1">
                        2030년까지 탄소배출 50% 감축 목표 설정
                      </div>
                      <div className="text-xs text-gray-500 mt-2">뉴스1 • 2024.01.03</div>
                    </div>
                  </div>

                  {/* 뉴스 요약 */}
                  <div className="border border-gray-200 p-4 rounded-lg mt-4">
                    <h4 className="font-medium mb-2 text-gray-800">뉴스 동향 요약</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>• <span className="text-green-600 font-medium">긍정적:</span> 대규모 투자 및 장기계약으로 성장 모멘텀 지속</p>
                      <p>• <span className="text-blue-600 font-medium">중립적:</span> 실적 발표 대기, 원자재 가격 상승 모니터링 필요</p>
                      <p>• <span className="text-purple-600 font-medium">장기적:</span> ESG 경영 및 지속가능성 강화</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 