'use client'

import { Calendar, Home, Settings, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { icon: Home, label: '홈', route: '/' },
  { icon: Calendar, label: '탐색', route: '/search' },
  { icon: Users, label: '산업군', route: '/industry' },
  { icon: Settings, label: '더보기', route: '/more' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-around px-2 py-2 border-t bg-background">
      {navItems.map(({ icon: Icon, label, route }) => {
        const isActive = pathname === route
        
        return (
          <Link
            key={label}
            href={route}
            className={`flex flex-col gap-1 h-auto py-2 px-3 ${
              isActive 
                ? 'text-primary bg-primary/10' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex flex-col items-center justify-center">
              <Icon className="h-4 w-4" />
              <span className="text-xs">{label}</span>
            </div>
          </Link>
        )
      })}
    </nav>
  )
}