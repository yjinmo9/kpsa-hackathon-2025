import { ReactNode } from 'react'
import { BottomNav } from './BottomNav'
import { Header, HeaderProps } from './Header'

interface MobileLayoutProps extends HeaderProps {
  children: ReactNode
}

export function MobileLayout({ children, ...props }: MobileLayoutProps) {
  return (
    <div className="flex flex-col h-screen max-w-[375px] mx-auto bg-background">
      <Header {...props} />
      <main className="flex-1 overflow-y-auto px-4 py-2">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}