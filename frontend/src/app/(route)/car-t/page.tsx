'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function CART() {
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
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">신약 개발 기술</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">면역세포 치료</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>CAR-T: 나만의 맞춤형 면역군대</SmartTooltipText>
        </h1>

        {/* Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>CAR-T 세포치료제란?</SmartTooltipText></h2>
          <SmartTooltipText>환자의 면역세포(T세포)를 유전자 조작해 암세포만 골라 죽이는 차세대 치료법</SmartTooltipText>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">어떻게 작동하나요?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>CAR-T(Cellular Antigen Receptor T-cell) 세포치료제는 
               환자의 혈액에서 T세포를 꺼내요</SmartTooltipText>
               <SmartTooltipText>암세포를 인식할 수 있는 수용체(CAR)를 
               유전자 조작으로 붙이고, 다시 체내에 주입해 암을 공격하게 만드는 치료법입니다</SmartTooltipText>
               <SmartTooltipText>즉, 환자 맞춤형 면역세포를 만들어내는 
               매우 정밀하고 개인화된 치료법이죠</SmartTooltipText>
               <SmartTooltipText>환자 자신의 면역시스템을 '업그레이드'해서
               암세포만 정확히 찾아 제거하는 똑똑한 치료법이에요</SmartTooltipText>
          </div>
        </div>

        {/* Process */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">치료 과정</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>1단계: 환자 혈액에서 T세포 분리</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>2단계: 실험실에서 T세포에 CAR 유전자 삽입</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>3단계: CAR-T 세포 대량 증식 (2-3주)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>4단계: 환자에게 CAR-T 세포 주입</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>5단계: 체내에서 암세포 공격 및 제거</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>기존 항암제가 암세포와 함께 정상세포도 공격했다면,
              CAR-T는 암세포만 정확히 타겟합니다</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Current applications */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">현재 적용 분야</h3>
          <div className="space-y-2 text-black">
            <SmartTooltipText>현재 FDA 승인된 CAR-T 치료제들:</SmartTooltipText>
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- Kymriah: B세포 급성림프구백혈병</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- Yescarta: 대세포 B세포 림프종</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- Breyanzi: 대세포 B세포 림프종</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- Tecartus: 외투세포 림프종</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>현재는 주로 혈액암에 사용되지만, 고형암으로 확장 연구 중이에요</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Market outlook */}
        <div className="mb-8">
            <h3 className="text-primary text-lg font-bold mb-4">시장 전망</h3>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                글로벌 CAR-T 시장: 2024년 85억 달러 → 2030년 240억 달러
            </div>
              <SmartTooltipText>차세대 CAR-T (이중항원 타겟, 알로젠 CAR-T) 개발로 적용 범위 확대</SmartTooltipText>
              <SmartTooltipText>제조 비용 절감과 치료 접근성 개선이 시장 성장의 핵심</SmartTooltipText>
          </div>
        </div>

        {/* Investment perspective */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            <div>
              <SmartTooltipText>CAR-T는 혁신적 치료법이지만 
              높은 제조비용과 복잡성이 도전과제인 분야예요</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 주요 체크포인트</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>독자적인 CAR 설계 기술과 플랫폼</SmartTooltipText>
              <SmartTooltipText>제조 효율성과 비용 경쟁력</SmartTooltipText>
              <SmartTooltipText>임상데이터 (유효성과 안전성)</SmartTooltipText>
              <SmartTooltipText>다양한 암종으로의 확장 가능성</SmartTooltipText>
              <SmartTooltipText>글로벌 제약사와의 협력 관계</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>환자 맞춤형 치료의 미래를 선도하는 혁신적 치료법입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">CAR-T는 나만의 맞춤형 면역군대로</span>
              <span className="text-black">암을 정확히 공격하는 차세대 치료법입니다</span>
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
                <span className='font-bold text-black'>넥스이뮨</span>
                <span>자체 CAR-T 플랫폼 기반 혈액암 치료제 개발</span>
                <span className='font-bold text-black'>앱클론</span>
                <span>CAR-T 세포치료제 위탁개발생산 전문</span>
                <span className='font-bold text-black'>차바이오텍</span>
                <span>이중항원 표적 CAR-T 세포치료제</span>
              </div>
          </div>
        </div>
      </div>
  );
}