'use client'

import { ReactNode } from 'react'
import { HeaderProps } from './Header'

interface MobileLayoutProps {
  children: ReactNode
  onLogoClick?: () => void
}

export function MobileLayout({ children, onLogoClick, ...props }: MobileLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-full justify-between">
      <div className="w-full h-16 flex items-center justify-center">
          <h1 
            className="text-4xl font-bold tracking-wider text-black cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLogoClick}
          >
            BUYO
          </h1>
      </div>
      <main className="flex-1 overflow-y-auto py-2 flex flex-col">
        {children}
      </main>
    </div>
  )
}