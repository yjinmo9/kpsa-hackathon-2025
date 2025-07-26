"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { BubbleVisualization } from "./BubbleVisualization"
import { ResultsPanel } from "./ResultsPanel"
import StockInfo from "./StockInfo"

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



  return (
    <motion.div
      key="results"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col h-full relative"
    >
      {isDrawerOpen && <StockInfo stockId={"068270"} />}
      <BubbleVisualization 
        searchData={searchData}         
      />
      
      <ResultsPanel 
        selectedTab={selectedResultTab}
        onTabChange={onResultTabChange}
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />
    </motion.div>
  )
} 