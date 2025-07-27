"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { BubbleVisualization } from "./BubbleVisualization"
import { ResultsPanel } from "./ResultsPanel"

export interface BubbleData {
  id: number
  text: string
  size: number
  x: number
  y: number
  color: string
}

// API 응답 타입 정의
export interface ApiSearchData {
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

interface SearchResultsProps {
  searchData: ApiSearchData | undefined
  selectedResultTab: string
  onResultTabChange: (tab: string) => void
}

export function SearchResults({ 
  searchData, 
  selectedResultTab, 
  onResultTabChange
}: SearchResultsProps) {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const generateReport = async (email: string) => {
    try {
      const response = await fetch(`/api/report?email=${encodeURIComponent(email)}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Failed to generate report:', error)
      throw error
    }
  }

  // 검색 데이터가 있을 때 자동으로 drawer 열기
  useEffect(() => {
    if (searchData) {
      setIsDrawerOpen(true)
    }
  }, [searchData])

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col h-full relative"
    >
      <BubbleVisualization 
        searchData={searchData}         
      />
      
      <ResultsPanel 
        selectedTab={selectedResultTab}
        onTabChange={onResultTabChange}
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        searchData={searchData}
        isLoading={isLoading}
        onGenerateReport={generateReport}
        searchedCompany={searchData?.data?.company}
      />
    </motion.div>
  )
} 