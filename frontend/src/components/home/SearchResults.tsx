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

export interface SearchData {
  company?: string
  technology?: string[]
}

export interface NewsData {
  title: string
  link: string
  published: string
  image?: string
}

export interface TechData {
  type: string
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
  searchData: SearchData | undefined
  selectedResultTab: string
  onResultTabChange: (tab: string) => void
  onBubbleClick?: (bubble: SearchData) => void
}

export function SearchResults({ 
  searchData, 
  selectedResultTab, 
  onResultTabChange
}: SearchResultsProps) {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [newsData, setNewsData] = useState<NewsData[]>([])
  const [techData, setTechData] = useState<TechData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchBioNews = async (question: string) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/bio-news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })
      const data = await response.json()
      setNewsData(data)
    } catch (error) {
      console.error('Failed to fetch bio news:', error)
      setNewsData([])
    } finally {
      setIsLoading(false)
    }
  }

  const fetchTechData = async (query: string) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
      const data = await response.json()
      setTechData(data)
    } catch (error) {
      console.error('Failed to fetch tech data:', error)
      setTechData(null)
    } finally {
      setIsLoading(false)
    }
  }

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

  useEffect(() => {
    if (searchData?.company) {
      fetchBioNews(searchData.company)
      fetchTechData(searchData.company)
    }
    if (searchData?.technology?.length) {
      const techQuery = searchData.technology.join(' ')
      fetchBioNews(techQuery)
      fetchTechData(techQuery)
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
        newsData={newsData}
        techData={techData}
        isLoading={isLoading}
        onGenerateReport={generateReport}
        searchedCompany={searchData?.company}
      />
    </motion.div>
  )
} 