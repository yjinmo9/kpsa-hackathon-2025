"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { BubbleData, SearchData } from "./SearchResults"

interface BubbleVisualizationProps {
  searchData: SearchData | undefined
}

const BACKGROUND_FADE_DURATION_MS = 800;

export function BubbleVisualization({ searchData }: BubbleVisualizationProps) {
  
  const bubbleData: BubbleData[] = useMemo(() => {
    if (!searchData) return []

    const bubbles: BubbleData[] = []
    
    
    if (searchData.company) {
      bubbles.push({
        id: 0,
        text: searchData.company,
        size: 150, 
        x: 0, 
        y: 0, 
        color: "bg-primary"
      })
    }

    
    if (searchData.technology && searchData.technology.length > 0) {
      const techCount = searchData.technology.length
      const radius = 100 
      const colors = ["bg-blue-400", "bg-green-400", "bg-purple-400", "bg-orange-400", "bg-pink-400", "bg-yellow-400", "bg-indigo-400", "bg-red-400"]
      
      searchData.technology.forEach((tech, index) => {
        
        const angle = (index * 2 * Math.PI) / techCount
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        
        bubbles.push({
          id: index + 1,
          text: tech,
          size: 90, 
          x: x,
          y: y,
          color: colors[index % colors.length] 
        })
      })
    }

    return bubbles
  }, [searchData])

  return (
    <div className="flex-1 flex items-center justify-center relative pb-30">
      <div className="relative w-96 h-96">
        <div className="flex gap-1 absolute right-[10%] bottom-[20%]">
          <span className="">462,000</span>
          <span className="text-blue-500">-3.14%</span>
        </div>
        {/* Background Circle with fade-in animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: BACKGROUND_FADE_DURATION_MS / 1000,
            ease: "easeOut"
          }}
          className="absolute inset-0 rounded-full border-2 border-gray-200/30 bg-gradient-to-br from-gray-50/20 to-gray-100/10"
        />
        
        {bubbleData.map((bubble, index) => (
          <motion.div
            key={bubble.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className={`absolute rounded-full ${bubble.color} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `calc(50% + ${bubble.x}px - ${bubble.size / 2}px)`,
              top: `calc(50% + ${bubble.y}px - ${bubble.size / 2}px)`,
            }}

          >
            <span className="text-black font-medium text-sm px-2 text-center leading-tight">
              {bubble.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 