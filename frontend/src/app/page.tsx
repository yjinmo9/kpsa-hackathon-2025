"use client"

import type React from "react"
import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { AnimatePresence } from "framer-motion"
import { MobileLayout } from "@/components/layout/MobileLayout"
import { 
  SearchInterface, 
  SearchResults, 
  BottomNavigation,
  TechList
} from "@/components/home"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { useSearchQuery } from "@/hooks"

interface SearchFormData {
  query: string
}

export default function BuyoSearchPage() {
  const [activeTab, setActiveTab] = useState("탐색")
  const [selectedResultTab, setSelectedResultTab] = useState("기술")
  const [showResults, setShowResults] = useState(false)

  const searchMutation = useSearchQuery()
  
  const methods = useForm<SearchFormData>({
    defaultValues: {
      query: ""
    }
  })

  const { 
    handleSubmit,
    reset,
  } = methods

  const onSubmit = async (data: SearchFormData) => {
    if (data.query.trim()) {
      try {
        await searchMutation.mutateAsync({ query: data.query })
        setShowResults(true)
      } catch (error) {
        console.error('Search failed:', error)
      }
    }
  }

  const handleLogoClick = () => {
    setActiveTab("탐색")
    reset() 
    setShowResults(false)
    setSelectedResultTab("기술")
    searchMutation.reset() 
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    // 탭 변경 시 검색 결과 숨기고 초기화
    setShowResults(false)
    reset()
    setSelectedResultTab("기술")
    searchMutation.reset()
  }

  return (
    <FormProvider {...methods}>
      <MobileLayout onLogoClick={handleLogoClick}>  
        <Tabs value={activeTab} onValueChange={handleTabChange} className="flex-1 flex flex-col">
          {/* 기술 탭 */}
          <TabsContent value="기술" className="flex-1 data-[state=inactive]:hidden h-full">
            <TechList />
          </TabsContent>

          {/* 탐색 탭 */}
          <TabsContent value="탐색" className="flex-1 data-[state=inactive]:hidden h-full w-full">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <SearchInterface
                  onSubmit={handleSubmit(onSubmit)}
                />
              ) : (
                <SearchResults
                  searchData={searchMutation.data}
                  selectedResultTab={selectedResultTab}
                  onResultTabChange={setSelectedResultTab}
                />
              )}
            </AnimatePresence>
          </TabsContent>

          {/* 기업 탭 */}
          <TabsContent value="기업" className="flex-1 data-[state=inactive]:hidden">
            <div className="flex flex-col items-center justify-center h-full min-h-96 px-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">기업 분석</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  기업의 재무상태와 경영 정보를<br />
                  분석하여 투자 결정을 도와드립니다.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* 산업 탭 */}
          <TabsContent value="산업" className="flex-1 data-[state=inactive]:hidden">
            <div className="flex flex-col items-center justify-center h-full min-h-96 px-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">산업 분석</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  다양한 산업군의 동향과 전망을<br />
                  분석하여 섹터별 투자 기회를 제공합니다.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* BottomNavigation - 검색 결과가 없을 때만 표시 */}
        <AnimatePresence>
          {!showResults && (
            <BottomNavigation
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          )}
        </AnimatePresence>
      </MobileLayout>
    </FormProvider>
  )
}
