"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const NAVIGATION_TABS = ["기술","탐색","기업"] as const

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex bg-gray-800 rounded-full p-1">
        {NAVIGATION_TABS.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab ? "bg-primary text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>
    </motion.div>
  )
} 