'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function PROTAC() {
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
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">표적 치료</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>PROTAC: 단백질을 파괴하는 혁신적 신약</SmartTooltipText>
        </h1>

        {/* Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>표적단백질 분해 신약이란?</SmartTooltipText></h2>
          <SmartTooltipText>병의 원인이 되는 단백질을 직접 '파괴'해서 치료하는, 완전히 새로운 개념의 신약</SmartTooltipText>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">어떻게 작동하나요?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>우리가 흔히 알고 있는 약들은 대부분 단백질 기능을 억제하는 방식이에요.
               하지만 표적단백질 분해 신약은 다릅니다!</SmartTooltipText>
               <SmartTooltipText>병을 일으키는 단백질을 아예 없애버리는 방식이죠</SmartTooltipText>
               <SmartTooltipText>대표적인 기술이 바로 PROTAC(Proteolysis Targeting Chimera)인데요,
               두 개의 팔을 가진 분자 구조예요</SmartTooltipText>
               <SmartTooltipText>한쪽은 병의 원인인 단백질에 붙고,
               다른 쪽은 우리 몸의 쓰레기 청소 시스템에 연결돼 해당 단백질을 파괴합니다</SmartTooltipText>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">기존 약물 대비 장점</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 기존에 치료 불가능했던 단백질도 타겟 가능</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 소량으로도 강력한 효과 (촉매 방식)</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 내성 발생 가능성 낮음</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 조직 특이적 단백질 분해 가능</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>'나쁜 단백질을 수거해 파괴'하는 생체 내 청소부 역할을 하는 신약입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">주요 적용 분야</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 혈액암: 다발성골수종, 림프종</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 고형암: 전립선암, 유방암</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 신경퇴행성질환: 알츠하이머, 파킨슨병</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 자가면역질환: 류마티스관절염</SmartTooltipText></div>
            </div>
          </div>
        </div>

        {/* Market outlook */}
        <div className="mb-8">
            <h3 className="text-primary text-lg font-bold mb-4">시장 전망</h3>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                글로벌 PROTAC 시장: 2024년 18억 달러 → 2030년 78억 달러
            </div>
              <SmartTooltipText>현재 3개 PROTAC 신약이 FDA 승인을 받아 상용화되었고</SmartTooltipText>
              <SmartTooltipText>100개 이상의 PROTAC 신약이 임상시험 진행 중이에요</SmartTooltipText>
          </div>
        </div>

        {/* Investment perspective */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            <div>
              <SmartTooltipText>PROTAC은 차세대 신약개발의 핵심 플랫폼으로
              글로벌 빅파마들이 주목하는 분야예요</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 주요 체크포인트</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>독자적인 PROTAC 설계 플랫폼 보유</SmartTooltipText>
              <SmartTooltipText>타겟 단백질의 검증된 질병 연관성</SmartTooltipText>
              <SmartTooltipText>임상시험 데이터와 안전성 프로파일</SmartTooltipText>
              <SmartTooltipText>글로벌 제약사와의 파트너십</SmartTooltipText>
              <SmartTooltipText>지적재산권 포트폴리오 강화</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>혁신적 작용기전으로 블록버스터 신약 창출 가능성이 높은 분야입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">PROTAC은 단백질을 직접 파괴하는</span>
              <span className="text-black">차세대 신약개발의 게임체인저입니다</span>
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
                <span className='font-bold text-black'>신테카바이오</span>
                <span>PROTAC 플랫폼 기반 항암신약 개발</span>
                <span className='font-bold text-black'>큐라클</span>
                <span>표적단백질 분해 기술 특화 신약개발</span>
                <span className='font-bold text-black'>압타바이오</span>
                <span>PROTAC 기반 신경퇴행성질환 치료제</span>
              </div>
          </div>
        </div>
      </div>
  );
}