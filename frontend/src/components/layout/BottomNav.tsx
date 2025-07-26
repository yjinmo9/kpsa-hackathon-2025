import { Calendar, Home, Settings, Users } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { icon: Home, label: '홈', active: true, route: '/' },
  { icon: Calendar, label: '탐색', active: false, route: '/search' },
  { icon: Users, label: '산업군', active: false, route: '/industry' },
  { icon: Settings, label: '더보기', active: false, route: '/more' },
]

export function BottomNav() {
  return (
    <nav className="flex items-center justify-around px-2 py-2 border-t bg-background">
      {navItems.map(({ icon: Icon, label, active, route }) => (
        <Link
          key={label}
          href={route}
          className={`flex flex-col gap-1 h-auto py-2 px-3 ${
            active 
              ? 'text-primary bg-primary/10' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <Icon className="h-4 w-4" />
            <span className="text-xs">{label}</span>
          </div>
        </Link>
      ))}
    </nav>
  )
}