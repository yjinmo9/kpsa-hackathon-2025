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
      className="flex flex-col items-center justify-center px-6 h-full"
    >
      <div className="w-full max-w-sm space-y-6 -mt-20">
        <motion.p
          className="text-center text-gray-300 text-sm"
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          종목명, 기술명, 산업명을 검색해보세요
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          className="relative"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="종목명, 기술명, 산업명을 검색해보세요"
            {...register("query")}
            className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 pl-10 md:pl-12 py-3 md:py-4 lg:py-5 rounded-full focus:ring-2 focus:ring-white focus:border-transparent text-sm md:text-base lg:text-lg"
          />
        </motion.form>
      </div>
    </motion.div>
  )
} 