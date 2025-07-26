import { Input } from '@/components/ui/input'
import Image from 'next/image'

import { ReactNode } from 'react'
import BackButton from '../ui/backButton'

type HeaderType = 'home' | 'back' | 'back-search'

export interface HeaderProps {
  type: HeaderType
  title?: string
  searchButton?: ReactNode
  profileButton?: ReactNode
  searchInput?: ReactNode
  searchPlaceholder?: string
}

export function Header({ 
  type,
  title,
  searchButton,
  profileButton,
  searchInput,
  searchPlaceholder = "Search...",
}: HeaderProps) {

  if (type === 'home') {
    return (
      <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={64} height={32} />
          {title && <span className="ml-3 text-lg font-semibold">{title}</span>}
        </div>
        
        <div className="flex items-center space-x-2">
        {searchButton}
        {profileButton}
        </div>
      </header>
    )
  }

  if (type === 'back') {
    return (
      <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
        <BackButton />
        
        {title && (
          <h1 className="text-lg font-semibold flex-1 text-center mx-4">
            {title}
          </h1>
        )}
        
        <div className="w-9" />
      </header>
    )
  }

  if (type === 'back-search') {
    return (
      <header className="flex items-center space-x-3 px-4 py-3 bg-background border-b">
        <BackButton />
        
        <div className="flex-1">
          {searchInput || (
            <Input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full"
            />
          )}
        </div>
        
        {title && (
          <span className="text-sm font-medium text-muted-foreground flex-shrink-0">
            {title}
          </span>
        )}
      </header>
    )
  }

  return null
}