"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useEffect, useState } from "react"

interface TechItem {
  title: string
  category: string
  subtitle: string
  description: string
}

interface TechCategory {
  category: string
  items: TechItem[]
}

interface TechListProps {
  techData?: TechCategory[]
}

function TechCard({ item }: { item: TechItem }) {
  return (
      <Link href={`/adc`} className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-black leading-tight">{item.category}</h2>
      <Card className="mb-4 transition-all duration-200 border-none shadow-none border-black rounded-lg bg-gray-200">
        <CardHeader className="pb-1">
          <CardTitle className="text-sm font-semibold text-primary leading-tight">
            {item.title}
          </CardTitle>
          <CardDescription className="text-xs text-gray-600">
            {item.subtitle}
          </CardDescription>
        </CardHeader>
      </Card>
      </Link>
  )
}

function CategoryContent({ items }: { items: TechItem[] }) {
  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center py-8 text-gray-500">
          해당 카테고리의 기술 정보가 준비 중입니다.
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 pb-4">
      {items.map((item, index) => (
        <TechCard key={index} item={item} />
      ))}
    </div>
  )
}

export function TechList({ techData: propTechData }: TechListProps) {
  const [techData, setTechData] = useState<TechCategory[]>([])
  const [loading, setLoading] = useState(true)
  console.log("🚀 ~ TechList ~ techData:", techData)

  useEffect(() => {
    const loadTechData = async () => {
      try {
        if (propTechData) {
          setTechData(propTechData)
          setLoading(false)
          return
        }

        const response = await fetch('/data/tech.json')
        if (response.ok) {
          const data = await response.json()
          setTechData(data)
        } else {
          console.error('Failed to load tech data')
        }
      } catch (error) {
        console.error('Error loading tech data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTechData()
  }, [propTechData])

  const getCategoryItems = (categoryName: string): TechItem[] => {
    const category = techData.find(cat => cat.category === categoryName)
    return category?.items || []
  }

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center px-4">
        <div className="text-center py-8 text-gray-500">
          데이터를 불러오는 중...
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col px-4">
      <Tabs defaultValue="manufacturing" className="w-full h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-5 mb-6 flex-shrink-0">
          <TabsTrigger value="manufacturing" className="text-xs sm:text-sm">
            생산/제조
          </TabsTrigger>
          <TabsTrigger value="drug-development" className="text-xs sm:text-sm">
            신약 개발
          </TabsTrigger>
          <TabsTrigger value="drug-delivery" className="text-xs sm:text-sm">
            약물전달
          </TabsTrigger>
          <TabsTrigger value="diagnosis" className="text-xs sm:text-sm">
            진단/분석
          </TabsTrigger>
          <TabsTrigger value="others" className="text-xs sm:text-sm">
            기타
          </TabsTrigger>
        </TabsList>
        
        <div className="flex-1 overflow-y-auto">
          <TabsContent value="manufacturing" className="mt-0 h-full">
            <CategoryContent items={getCategoryItems("생산/제조")} />
          </TabsContent>
          
          <TabsContent value="drug-development" className="mt-0 h-full">
            <CategoryContent items={getCategoryItems("신약 개발")} />
          </TabsContent>
          
          <TabsContent value="drug-delivery" className="mt-0 h-full">
            <CategoryContent items={getCategoryItems("약물전달")} />
          </TabsContent>
          
          <TabsContent value="diagnosis" className="mt-0 h-full">
            <CategoryContent items={getCategoryItems("진단/분석")} />
          </TabsContent>
          
          <TabsContent value="others" className="mt-0 h-full">
            <CategoryContent items={getCategoryItems("기타")} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}