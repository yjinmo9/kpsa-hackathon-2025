"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react";

const OPTIONS = [
  "신약 개발 성공 기대하며 성장에 투자하고 싶어요.",
  "안정된 매출과 꾸준한 성장을 원해요.",
  "위탁생산으로 안정적 확장을 하는 기업이 좋아요.",
  "원천기술 가치 상승으로 단기 변동 큰 기업에 관심 있어요.",
  "시장 이벤트에 빠르게 반응하는 기업을 원해요.",
  "특정 시장 점유율 상승으로 고성장하는 기업을 보고 싶어요.",
  "특화된 동물용 시장에 집중하는 기업이 흥미로워요.",
  "글로벌 임상 수주로 안정적 실적 기대 기업이 좋아요.",
  "특허와 임상 결과가 중요한 기업을 선호해요.",
  "그룹 전체 성장과 신사업 확장에 주목하고 싶어요."
];

export default function CompanySelectPage() {
  const router = useRouter()

  const handleSelect = (idx: number) => {
    router.push(`/company-select/${idx}`)
  }

  return (
    <div className="min-h-[100dvh] bg-gray-50 flex flex-col items-center p-2 pt-2">
      <div className="flex items-center justify-start w-full">
        <button onClick={() => router.back()}>
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
      </div>
      <h1 className="h-[50px] flex items-end justify-end text-2xl font-bold mb-8 mt-8 text-center max-w-[375px]">맞춤형 기업 유형 찾기</h1>
      <p className="text-base text-gray-600 mb-8 text-center max-w-[375px]">
      나에게 잘 맞는 유형을 찾아보세요!
      </p>
      
      <div className="grid grid-cols-1 gap-3 w-full max-w-[375px] mb-8 max-h-80 overflow-y-auto rounded-xl bg-white shadow px-2 py-4">
        {OPTIONS.map((opt, idx) => (
          <button
            key={idx}
            className={`p-4 rounded-lg border text-left hover:bg-blue-50 transition border-gray-200 bg-white text-base md:text-lg max-w-[375px] w-full`}
            onClick={() => handleSelect(idx)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
} 