'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function ImprovedDrug() {
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
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">개량신약</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>개량신약: 기존 약을 더 좋게 만드는 똑똑한 전략</SmartTooltipText>
        </h1>

        {/* Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>개량신약이란?</SmartTooltipText></h2>
          <SmartTooltipText>기존에 있던 약을 복용 편의성이나 효과를 개선해 새롭게 출시하는 약</SmartTooltipText>
        </div>

        {/* Why needed */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">왜 개량신약이 필요할까요?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>완전히 새로운 신약을 개발하려면 10년 넘게 걸리고, 수천억 원이 들어가요</SmartTooltipText>
               <SmartTooltipText>그런데 이미 효능이 입증된 기존 약을 조금 더 편리하게, 더 안전하게 바꿀 수 있다면?</SmartTooltipText>
               <SmartTooltipText>개발 기간과 비용을 크게 줄이면서도 환자에게는 더 나은 치료 경험을 제공할 수 있어요</SmartTooltipText>
          </div>
        </div>

        {/* Examples */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">개량신약의 예시</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 서방형: 하루 3번 먹던 약 → 하루 1번</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 장용코팅: 속이 쓰렸던 약 → 위장을 덜 자극하게 개선</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 제형변경: 정제(알약) → 구강용해 필름이나 패치</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 복합제: 여러 약을 하나로 합쳐 복용 편의성 증대</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 용량최적화: 부작용은 줄이고 효과는 높이는 용량 조절</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>완전히 새롭진 않지만, 환자에겐 더 나은 치료 경험을 제공하는 똑똑한 전략이에요</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">개량신약의 장점</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 개발 위험도 낮음 (이미 검증된 약물)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 개발 기간 단축 (3-7년)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 개발 비용 절약 (수백억 원 수준)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 환자 순응도 개선</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 특허 만료 후 수익 연장 효과</SmartTooltipText></div>
            </div>
          </div>
        </div>

        {/* Market outlook */}
        <div className="mb-8">
            <h3 className="text-primary text-lg font-bold mb-4">시장 동향</h3>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                국내 개량신약 시장: 연평균 8-10% 성장 중
            </div>
              <SmartTooltipText>특허 만료로 오리지널 의약품의 독점권이 사라지면서 개량신약 기회 증가</SmartTooltipText>
              <SmartTooltipText>고령화와 만성질환 증가로 복용 편의성이 중요해지면서 수요 확대</SmartTooltipText>
          </div>
        </div>

        {/* Investment perspective */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            <div>
              <SmartTooltipText>개량신약은 리스크는 낮으면서도 
              안정적인 수익을 기대할 수 있는 매력적인 분야예요</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 주요 체크포인트</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>원료의약품 시장 규모와 성장성</SmartTooltipText>
              <SmartTooltipText>개량 기술의 차별화 정도</SmartTooltipText>
              <SmartTooltipText>기존 약물 대비 명확한 개선점</SmartTooltipText>
              <SmartTooltipText>허가 및 급여등재 가능성</SmartTooltipText>
              <SmartTooltipText>글로벌 진출 전략과 파트너십</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>안정적이면서도 지속가능한 수익 모델을 제공하는 현실적인 선택입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">개량신약은 기존 약을 더 좋게 만드는</span>
              <span className="text-black">현실적이고 똑똑한 신약개발 전략입니다</span>
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
                <span className='font-bold text-black'>한미약품</span>
                <span>오리지널 의약품 기반 개량신약 다수 보유</span>
                <span className='font-bold text-black'>유한양행</span>
                <span>제형개선 기술을 통한 개량신약 포트폴리오</span>
                <span className='font-bold text-black'>동아ST</span>
                <span>기존 약물의 서방형 및 복합제 개발</span>
                <span className='font-bold text-black'>대웅제약</span>
                <span>소화기질환 치료제 개량신약 전문</span>
              </div>
          </div>
        </div>
      </div>
  );
}