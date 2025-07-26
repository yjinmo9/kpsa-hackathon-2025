import { ReactNode } from 'react'
import { BottomNav } from './BottomNav'
import { Header, HeaderProps } from './Header'

interface MobileLayoutProps extends HeaderProps {
  children: ReactNode
}

export function MobileLayout({ children, ...props }: MobileLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-full justify-between">
      <div className="w-full h-16 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-wider text-white">BUYO</h1>
      </div>
      {/* <Header {...props} /> */}
      <main className="flex-1 overflow-y-auto px-4 py-2">
        {children}
      </main>
      {/* <BottomNav /> */}
    </div>
  )
}