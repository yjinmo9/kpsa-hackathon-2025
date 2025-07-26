'use client'

import { Button } from "./button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

function BackButton() {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  return (
    <Button variant="ghost" size="icon" className="h-9 w-9" onClick={handleBack}>
      <ArrowLeft className="h-5 w-5" />
    </Button>
  )
}

export default BackButton