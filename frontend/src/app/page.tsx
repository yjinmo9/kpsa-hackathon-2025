"use client"

import type React from "react"
import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { AnimatePresence } from "framer-motion"
import { MobileLayout } from "@/components/layout/MobileLayout"
import { 
  SearchInterface, 
  SearchResults, 
  BottomNavigation 
} from "@/components/home"
import { useSearchQuery } from "@/hooks"

interface SearchFormData {
  query: string
}

export default function BuyoSearchPage() {
  const [activeTab, setActiveTab] = useState("기술")
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
    formState: { isSubmitting }
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
    setActiveTab("기술")
    reset() 
    setShowResults(false)
    setSelectedResultTab("기술")
    searchMutation.reset() 
  }

  return (
    <FormProvider {...methods}>
      <MobileLayout type="home" onLogoClick={handleLogoClick}>  
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

        
        <AnimatePresence>
          {!showResults && (
            <BottomNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          )}
        </AnimatePresence>
      </MobileLayout>
    </FormProvider>
  )
}
