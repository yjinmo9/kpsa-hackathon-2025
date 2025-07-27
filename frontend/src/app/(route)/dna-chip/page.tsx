'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function DNAChip() {
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
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">진단/분석 기술</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">유전자 진단</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>DNA칩: 유전자의 종합 건강검진</SmartTooltipText>
        </h1>

        {/* Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>DNA칩이란?</SmartTooltipText></h2>
          <SmartTooltipText>수천 개의 유전 정보를 한 번에 분석할 수 있는 초소형 칩 형태의 유전자 검사 기술</SmartTooltipText>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">어떻게 작동하나요?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>DNA칩은 일종의 '유전자 마이크로어레이(Microarray)' 기술이에요</SmartTooltipText>
               <SmartTooltipText>작은 유리판 위에 수천~수만 개의 DNA 탐침(Probe)을 배열해 두고,
               사람의 DNA 샘플을 여기에 올려놓으면</SmartTooltipText>
               <SmartTooltipText>어떤 유전자가 발현되었는지, 어떤 돌연변이가 있는지를 한 번에 분석할 수 있어요</SmartTooltipText>
               <SmartTooltipText>과거에는 유전자 하나하나를 따로 검사해야 했다면,
               이제는 칩 하나로 종합적인 유전자 건강검진이 가능해졌어요</SmartTooltipText>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">주요 활용 분야</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 유전질환 진단: BRCA1/2 유방암 위험 유전자 등</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 약물유전체학: 개인별 약물 반응 예측</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 암 진단: 암세포의 유전자 발현 패턴 분석</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 감염병 진단: 바이러스, 세균 등 병원체 검출</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 농업/축산업: 품종 개량과 질병 저항성 분석</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>예를 들어, 유방암 위험 유전자(BRCA1/2) 같은 걸 동시에 수십 개까지 탐색할 수 있는 거죠</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">기존 검사법 대비 장점</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 고처리량: 한 번에 수만 개 유전자 분석</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 비용 효율성: 개별 검사 대비 비용 절약</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 신속성: 24-48시간 내 결과 확인</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 정확성: 높은 민감도와 특이도</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 표준화: 일관된 품질의 검사 결과</SmartTooltipText></div>
            </div>
          </div>
        </div>

        {/* Technology evolution */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">기술 발전 동향</h3>
          <div className="space-y-2 text-black">
            <SmartTooltipText>최근에는 차세대 염기서열 분석(NGS)과 결합하여:</SmartTooltipText>
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 전장 엑솜 시퀀싱: 모든 단백질 코딩 영역 분석</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 전장 게놈 시퀀싱: 개인의 모든 유전 정보 해독</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 액체생검: 혈액으로 암 관련 유전자 변이 검출</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 다중 오믹스: 유전체, 단백체, 대사체 통합 분석</SmartTooltipText></div>
            </div>
          </div>
        </div>

        {/* Market outlook */}
        <div className="mb-8">
            <h3 className="text-primary text-lg font-bold mb-4">시장 전망</h3>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                글로벌 DNA칩 시장: 2024년 47억 달러 → 2030년 89억 달러
            </div>
              <SmartTooltipText>개인맞춤형 의학과 정밀의료의 확산으로 수요 급증</SmartTooltipText>
              <SmartTooltipText>특히 아시아 지역에서 유전자 검사에 대한 관심이 높아지고 있어요</SmartTooltipText>
          </div>
        </div>

        {/* Investment perspective */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            <div>
              <SmartTooltipText>DNA칩은 개인맞춤형 의학의 기반이 되는
              안정적이고 성장 가능성이 높은 분야예요</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 주요 체크포인트</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>독자적인 칩 설계와 분석 기술</SmartTooltipText>
              <SmartTooltipText>의료기기 허가 및 보험급여 적용</SmartTooltipText>
              <SmartTooltipText>검사 정확도와 임상적 유용성</SmartTooltipText>
              <SmartTooltipText>대량 생산 능력과 비용 경쟁력</SmartTooltipText>
              <SmartTooltipText>글로벌 시장 진출과 파트너십</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>예방의학과 정밀의료 시대의 필수 인프라 기술입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">DNA칩은 유전자의 종합 건강검진</span>
              <span className="text-black">개인맞춤형 의학의 핵심 도구입니다</span>
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
                <span className='font-bold text-black'>마크로젠</span>
                <span>유전체 분석 및 DNA칩 서비스 전문</span>
                <span className='font-bold text-black'>씨젠</span>
                <span>분자진단 및 유전자 검출 기술</span>
                <span className='font-bold text-black'>진매트릭스</span>
                <span>개인맞춤형 유전자 검사 서비스</span>
                <span className='font-bold text-black'>바이오니아</span>
                <span>PCR 및 유전자 분석 장비</span>
              </div>
          </div>
        </div>
      </div>
  );
}