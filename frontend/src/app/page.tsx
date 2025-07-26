'use client';

import { MobileLayout } from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState("탐색")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <MobileLayout type="home">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-8 px-4 md:px-8 pb-30">
        <p className="text-center text-gray-300 text-sm md:text-lg lg:text-xl">종목명, 기술명, 산업명을 검색해보세요</p>
        <div className="relative w-full max-w-md md:max-w-2xl lg:max-w-4xl">
          <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 md:w-6 md:h-6" />
          <Input
            type="text"
            placeholder="종목명, 기술명, 산업명을 검색해보세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 pl-10 md:pl-12 py-3 md:py-4 lg:py-5 rounded-full focus:ring-2 focus:ring-white focus:border-transparent text-sm md:text-base lg:text-lg"
          />
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex bg-gray-800 rounded-full p-1 md:p-2">
          {["기술", "기업"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab)}
              className={`px-6 md:px-8 lg:px-10 py-2 md:py-3 rounded-full text-sm md:text-base lg:text-lg font-medium transition-all ${
                activeTab === tab ? "bg-gray-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
