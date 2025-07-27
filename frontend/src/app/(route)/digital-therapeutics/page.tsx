'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function DigitalTherapeutics() {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
  return (
      <div className="p-4 min-h-screen text-black">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-6 w-full">
          <button className="text-black" onClick={handleBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex gap-4">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">디지털 헬스케어</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">치료용 앱</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>디지털 치료제: 스마트폰으로 하는 치료</SmartTooltipText>
        </h1>

        {/* Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>디지털 치료제란?</SmartTooltipText></h2>
          <SmartTooltipText>앱이나 게임, VR 등 디지털 기술을 활용해 질병을 치료하는 새로운 형태의 치료법</SmartTooltipText>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">어떻게 작동하나요?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>디지털 치료제(Digital Therapeutics, DTx)는 소프트웨어를 통해 질병을 예방, 관리, 치료하는 새로운 의료기술이에요</SmartTooltipText>
               <SmartTooltipText>기존 약물 치료와 달리 부작용이 적고,
               환자가 일상에서 쉽게 접근할 수 있어 정신건강, 재활, 만성질환 관리 분야에서 주목받고 있어요</SmartTooltipText>
               <SmartTooltipText>의료기기로 허가를 받아 실제 처방이 가능한 '치료용 소프트웨어'입니다</SmartTooltipText>
          </div>
        </div>

        {/* Examples */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">디지털 치료제 예시</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- ADHD 치료용 게임: 아이들이 게임을 하면서 집중력 향상</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 불면증 인지행동치료 앱: 수면습관 개선 프로그램</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 중독 치료 VR: 가상현실로 갈망 상황 노출 치료</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 당뇨병 관리 앱: 혈당 모니터링과 식단 코칭</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 우울증 치료 챗봇: AI 기반 인지행동치료</SmartTooltipText></div>
            </div>
          </div>
        </div>

        {/* Approved products */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">FDA 승인 제품들</h3>
          <div className="space-y-2 text-black">
            <SmartTooltipText>현재 FDA 승인을 받은 디지털 치료제들:</SmartTooltipText>
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- EndeavorRx: ADHD 아동 치료용 게임</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- reSET: 중독성 약물 사용장애 치료 앱</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- Somryst: 만성 불면증 인지행동치료 앱</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- FreeCB: 대마초 사용장애 치료 앱</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>국내에서도 식약처 승인을 받은 디지털 치료제들이 출시되기 시작했어요</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">기존 치료법 대비 장점</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 접근성: 언제 어디서나 스마트폰으로 치료</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 안전성: 약물 부작용 없음</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 개인맞춤화: AI로 개인별 최적화 치료</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 실시간 모니터링: 치료 효과 즉시 확인</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 비용 효율성: 기존 치료 대비 저렴</SmartTooltipText></div>
            </div>
          </div>
        </div>

        {/* Market outlook */}
        <div className="mb-8">
            <h3 className="text-primary text-lg font-bold mb-4">시장 전망</h3>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                글로벌 디지털 치료제 시장: 2024년 89억 달러 → 2030년 320억 달러
            </div>
              <SmartTooltipText>COVID-19로 원격의료에 대한 관심이 높아지면서 급성장 중</SmartTooltipText>
              <SmartTooltipText>정신건강 분야에서 특히 빠른 성장을 보이고 있어요</SmartTooltipText>
          </div>
        </div>

        {/* Investment perspective */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            <div>
              <SmartTooltipText>디지털 치료제는 의료의 디지털 전환을 이끄는
              차세대 헬스케어의 핵심 분야예요</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 주요 체크포인트</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>임상시험 데이터와 치료 효과 입증</SmartTooltipText>
              <SmartTooltipText>의료기기 허가 획득 능력</SmartTooltipText>
              <SmartTooltipText>보험급여 적용 가능성</SmartTooltipText>
              <SmartTooltipText>사용자 경험(UX)과 치료 지속성</SmartTooltipText>
              <SmartTooltipText>글로벌 확장 가능한 플랫폼 기술</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>의료의 접근성을 혁신하는 새로운 패러다임의 치료법입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">디지털 치료제는 스마트폰으로 하는 치료</span>
              <span className="text-black">미래 의료의 새로운 표준입니다</span>
          </div>
        </div>

        {/* Related companies */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <h3 className="text-primary text-lg font-bold mb-4">관련 상장사</h3>
            <div className="text-gray-400 text-sm mb-4">(<SmartTooltipText>시가총액</SmartTooltipText> 순)</div>
          </div>
          
          <div className="space-y-4">
              <div className="text-black text-sm flex flex-col gap-1">
                <span className='font-bold text-black'>웰트</span>
                <span>디지털 헬스케어 플랫폼 및 치료용 앱</span>
                <span className='font-bold text-black'>뉴냅스</span>
                <span>ADHD 진단용 디지털 바이오마커</span>
                <span className='font-bold text-black'>하이</span>
                <span>AI 기반 정신건강 디지털 치료제</span>
                <span className='font-bold text-black'>라이프시맨틱스</span>
                <span>당뇨병 관리 디지털 치료제</span>
              </div>
          </div>
        </div>
      </div>
  );
}