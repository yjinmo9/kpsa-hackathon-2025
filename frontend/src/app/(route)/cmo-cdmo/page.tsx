'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function CMOCDMO() {
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
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">생산/제조 기술</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">위탁생산</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>CMO/CDMO: 제약업계의 든든한 파트너</SmartTooltipText>
        </h1>

        {/* Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>CMO/CDMO란?</SmartTooltipText></h2>
          <SmartTooltipText>신약을 직접 만들지 않고, 제약사 대신 약을 생산하거나 개발도 도와주는 아웃소싱 전문 기업</SmartTooltipText>
        </div>

        {/* Detailed explanation */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">좀 더 자세히 설명하면?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>CMO는 Contract Manufacturing Organization의 약자예요.
               말 그대로, '위탁 생산', 즉 다른 제약사의 약을 대신 만들어주는 기업이죠</SmartTooltipText>
               <SmartTooltipText>CDMO는 여기서 한 걸음 더 나아가,
               Contract Development & Manufacturing Organization</SmartTooltipText>
               <SmartTooltipText>'생산'뿐 아니라, 개발(임상 시료, 제형 개선 등)까지 도와주는 곳이에요</SmartTooltipText>
               <SmartTooltipText>요즘은 많은 신약개발 스타트업들이 자체 공장이 없기 때문에
               CMO/CDMO 업체에 맡기고, 자기는 연구개발에만 집중하는 경우가 많아요</SmartTooltipText>
          </div>
        </div>

        {/* Services */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">주요 서비스</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 의약품 위탁생산 (API 및 완제의약품)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 제형개발 및 최적화</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 임상시험용 의약품 제조</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 품질관리 및 안정성 시험</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 포장 및 라벨링 서비스</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>특히 바이오의약품 분야에서 전문성을 갖춘 CDMO의 중요성이 커지고 있어요</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Market trends */}
        <div className="mb-8">
            <h3 className="text-primary text-lg font-bold mb-4">시장 동향</h3>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                글로벌 CDMO 시장: 2024년 1,540억 달러 → 2030년 2,800억 달러
            </div>
              <SmartTooltipText>제약회사들이 비용절감과 전문성 확보를 위해 아웃소싱을 확대하고 있어요</SmartTooltipText>
              <SmartTooltipText>특히 바이오의약품과 복잡한 제형의 수요 증가로 고부가가치 서비스가 성장 중</SmartTooltipText>
          </div>
        </div>

        {/* Investment perspective */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            <div>
              <SmartTooltipText>CMO/CDMO는 제약산업의 필수 인프라로
              안정적인 수익 구조를 가진 매력적인 사업모델이에요</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 주요 경쟁력 요소</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>생산설비 규모와 기술력</SmartTooltipText>
              <SmartTooltipText>글로벌 GMP 인증 보유 여부</SmartTooltipText>
              <SmartTooltipText>장기계약 고객사와의 관계</SmartTooltipText>
              <SmartTooltipText>바이오의약품 등 고부가가치 제품 대응능력</SmartTooltipText>
              <SmartTooltipText>신약개발 초기단계부터 상업화까지 원스톱 서비스</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>제약업계 성장과 함께 지속적으로 성장할 수 있는 안정적인 비즈니스입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">CMO/CDMO는 제약업계의 든든한 파트너</span>
              <span className="text-black">신약개발의 필수 인프라입니다</span>
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
                <span className='font-bold text-black'>삼성바이오로직스</span>
                <span>글로벌 No.1 바이오의약품 CDMO 기업</span>
                <span className='font-bold text-black'>셀트리온</span>
                <span>바이오시밀러 및 CDMO 사업 확장</span>
                <span className='font-bold text-black'>한미약품</span>
                <span>의약품 위탁생산 및 제형개발 서비스</span>
                <span className='font-bold text-black'>대원제약</span>
                <span>완제의약품 CMO 전문기업</span>
              </div>
          </div>
        </div>
      </div>
  );
}