"use client"

import type React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useFormContext } from "react-hook-form"

interface SearchInterfaceProps {
  onSubmit: (e: React.FormEvent) => void
}

export function SearchInterface({ 
  onSubmit 
}: SearchInterfaceProps) {
  const { register } = useFormContext()

  return (
    <motion.div
      key="search"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col items-center justify-center h-full w-full"
    >
      {/* Background circles with wave animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full"
          style={{ backgroundColor: 'rgba(172, 204, 96, 0.4)' }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full"
          style={{ backgroundColor: 'rgba(172, 204, 96, 0.6)' }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] rounded-full"
          style={{ backgroundColor: 'rgba(172, 204, 96, 0.8)' }}
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 15, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-sm px-6 space-y-8">
        <motion.div
          className="text-center space-y-2"
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-lg font-medium text-gray-800 leading-relaxed">
            기술부터 뉴스까지,<br />
            바이오 핵심 정보만 모았어요
          </h2>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="relative"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="종목명, 기술명을 검색해보세요"
            autoComplete="off"
            {...register("query")}
            className="w-full bg-white border-none text-gray-800 placeholder-gray-500 pl-12 py-4 rounded-full shadow-sm focus:ring-2 focus:ring-green-300 focus:border-transparent text-base"
          />
        </motion.form>
      </div>
    </motion.div>
  )
} 