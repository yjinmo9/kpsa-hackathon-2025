'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function NanoparticleDrugDelivery() {
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
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">약물전달 기술</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">나노기술</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>나노입자 약물전달: 약의 정확한 택배 서비스</SmartTooltipText>
        </h1>

        {/* Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>나노입자 약물전달이란?</SmartTooltipText></h2>
          <SmartTooltipText>나노 크기의 입자를 이용해 약물을 병변 부위에만 정확히 전달하는 첨단 기술</SmartTooltipText>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">어떻게 작동하나요?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>나노입자 약물전달 시스템은 약물을 나노미터 크기의 입자에 포장해서
               필요한 곳에만 정확히 전달하는 기술이에요</SmartTooltipText>
               <SmartTooltipText>기존 약물은 몸 전체에 퍼져서 부작용이 많았다면,
               나노입자는 마치 택배처럼 정확한 주소(병변 부위)로만 약을 배송해요</SmartTooltipText>
               <SmartTooltipText>이를 통해 약효는 높이고 부작용은 줄일 수 있어
               특히 항암치료나 뇌질환 치료에서 혁신을 이루고 있습니다</SmartTooltipText>
          </div>
        </div>

        {/* Types */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">주요 나노입자 종류</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 리포솜: 세포막과 유사한 구조로 생체적합성 우수</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 폴리머 나노입자: 약물 방출 속도 조절 가능</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 금속 나노입자: 영상진단과 치료를 동시에</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 단백질 나노입자: 면역반응 최소화</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 고분자 미셀: 소수성 약물의 용해도 개선</SmartTooltipText></div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">주요 적용 분야</h3>
          <div className="space-y-2 text-black">
            <SmartTooltipText>현재 상용화된 나노의약품들:</SmartTooltipText>
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- Doxil: 리포솜 항암제 (난소암, 유방암)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- Abraxane: 단백질결합 파클리탁셀 (췌장암)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- Onpattro: siRNA 리포솜 (유전성 질환)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- COVID-19 mRNA 백신: 지질나노입자</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>뇌혈관장벽 통과, 유전자치료, 면역치료 등으로 활용 범위가 확대되고 있어요</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">기존 약물 대비 장점</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 표적 지향성: 특정 조직에만 약물 전달</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 부작용 감소: 정상조직 손상 최소화</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 약물 안정성 향상: 분해로부터 보호</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 서방출: 지속적인 약물 방출로 투약 빈도 감소</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 난용성 약물 전달: 물에 안 녹는 약물도 투여 가능</SmartTooltipText></div>
            </div>
          </div>
        </div>

        {/* Market outlook */}
        <div className="mb-8">
            <h3 className="text-primary text-lg font-bold mb-4">시장 전망</h3>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                글로벌 나노의약품 시장: 2024년 970억 달러 → 2030년 1,680억 달러
            </div>
              <SmartTooltipText>COVID-19 mRNA 백신 성공으로 나노기술의 가능성이 입증되었어요</SmartTooltipText>
              <SmartTooltipText>개인맞춤형 의학과 정밀의료의 핵심 기술로 주목받고 있습니다</SmartTooltipText>
          </div>
        </div>

        {/* Investment perspective */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            <div>
              <SmartTooltipText>나노입자 약물전달은 차세대 의약품의 핵심 플랫폼으로
              다양한 질병에 적용 가능한 범용 기술이에요</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 주요 체크포인트</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>독자적인 나노입자 설계 기술</SmartTooltipText>
              <SmartTooltipText>타겟팅 효율성과 안전성 데이터</SmartTooltipText>
              <SmartTooltipText>대량생산 가능한 제조공정</SmartTooltipText>
              <SmartTooltipText>규제기관 승인 경험과 전략</SmartTooltipText>
              <SmartTooltipText>다양한 약물 적용 가능한 플랫폼 기술</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>의약품의 효과와 안전성을 동시에 개선하는 미래 의학의 핵심 기술입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">나노입자 약물전달은 약의 정확한 택배 서비스</span>
              <span className="text-black">표적만 공격하는 스마트 의학입니다</span>
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
                <span className='font-bold text-black'>삼성바이오에피스</span>
                <span>나노입자 기반 바이오의약품 전달시스템</span>
                <span className='font-bold text-black'>큐리언트</span>
                <span>나노입자 약물전달 플랫폼 기술</span>
                <span className='font-bold text-black'>에이프로젠</span>
                <span>리포솜 나노입자 항암제 개발</span>
                <span className='font-bold text-black'>바이넥스</span>
                <span>표적지향성 나노입자 치료제</span>
              </div>
          </div>
        </div>
      </div>
  );
}