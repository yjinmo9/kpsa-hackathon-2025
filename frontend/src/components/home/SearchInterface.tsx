"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { useFormContext } from "react-hook-form"

interface SearchInterfaceProps {
  onSubmit: (e: React.FormEvent) => void
}

const bioCompanies = [
  "삼성바이오로직스",
  "셀트리온", 
  "알테오젠",
  "유한양행",
  "리가켐바이오",
  "에이비엘바이오",
  "녹십자",
  "앱클론",
  "파마리서치",
  "종근당바이오"
]

// 한글 초성 추출 함수
const getInitialConsonants = (text: string): string => {
  const initialConsonants = [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
    'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
  ]
  
  return text
    .split('')
    .map(char => {
      const code = char.charCodeAt(0)
      // 한글 완성형 문자 범위 확인 (가-힣)
      if (code >= 0xAC00 && code <= 0xD7A3) {
        // 초성 추출 공식: (문자코드 - 0xAC00) / (21 * 28)
        const initialIndex = Math.floor((code - 0xAC00) / (21 * 28))
        return initialConsonants[initialIndex]
      }
      return char
    })
    .join('')
}

// 검색어와 회사명 매칭 함수
const isMatchingQuery = (company: string, query: string): boolean => {
  const lowerQuery = query.toLowerCase()
  const lowerCompany = company.toLowerCase()
  
  // 1. 완전한 텍스트 포함 검색
  if (lowerCompany.includes(lowerQuery)) {
    return true
  }
  
  // 2. 초성 검색
  const companyInitials = getInitialConsonants(company)
  const queryInitials = getInitialConsonants(query)
  
  // 초성으로 시작하는지 확인
  if (companyInitials.includes(queryInitials)) {
    return true
  }
  
  return false
}

export function SearchInterface({ 
  onSubmit 
}: SearchInterfaceProps) {
  const { register, setValue, watch } = useFormContext()
  const [isFocused, setIsFocused] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const currentQuery = watch("query") || ""

  useEffect(() => {
    if (isFocused && currentQuery.length === 0) {
      setFilteredSuggestions(bioCompanies)
    } else if (isFocused && currentQuery.length > 0) {
      const filtered = bioCompanies.filter(company =>
        isMatchingQuery(company, currentQuery)
      )
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
  }, [isFocused, currentQuery])

  const handleSuggestionClick = (suggestion: string) => {
    setValue("query", suggestion)
    setIsFocused(false)
    inputRef.current?.blur()
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = (e: React.FocusEvent) => {
    // Delay hiding suggestions to allow click events on suggestions
    setTimeout(() => {
      setIsFocused(false)
    }, 150)
  }

  const { onChange, onBlur, name, ref } = register("query")

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
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-20" />
          <Input
            ref={(e) => {
              ref(e)
              inputRef.current = e
            }}
            name={name}
            onChange={onChange}
            onBlur={(e) => {
              onBlur(e)
              handleInputBlur(e)
            }}
            onFocus={handleInputFocus}
            type="text"
            placeholder="종목명, 기술명을 검색해보세요 (예: ㅅ, 삼성)"
            autoComplete="off"
            className="w-full bg-white border-none text-gray-800 placeholder-gray-500 pl-12 py-4 rounded-full shadow-sm focus:ring-2 focus:ring-green-300 focus:border-transparent text-base relative z-10"
          />
          
          {/* Autocomplete Suggestions */}
          <AnimatePresence>
            {filteredSuggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 max-h-60 overflow-y-auto z-30"
              >
                {filteredSuggestions.map((suggestion, index) => (
                  <motion.div
                    key={suggestion}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 border-b border-gray-50 last:border-b-0 transition-colors duration-150"
                  >
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{suggestion}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.div>
  )
} 