'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function BioPrinting3D() {
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
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">바이오프린팅</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>3D 바이오프린팅: 살아있는 장기를 프린팅하는 시대</SmartTooltipText>
        </h1>

        {/* Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>3D 바이오프린팅이란?</SmartTooltipText></h2>
          <SmartTooltipText>살아있는 세포를 잉크로 사용해 조직이나 장기를 3차원으로 프린팅하는 혁신적인 기술</SmartTooltipText>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">어떻게 작동하나요?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>기존 3D 프린팅은 플라스틱이나 금속을 사용했다면,
               바이오프린팅은 실제 살아있는 세포, 생체재료를 사용해요</SmartTooltipText>
               <SmartTooltipText>피부, 혈관, 심지어 심장이나 간 같은 장기까지 만들어내는 것이 목표예요</SmartTooltipText>
               <SmartTooltipText>환자의 줄기세포를 배양해 맞춤형 조직을 제작할 수 있어
               면역거부반응을 크게 줄일 수 있습니다</SmartTooltipText>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">현재 적용 분야</h3>
          <div className="space-y-2 text-black">
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- 피부조직: 화상 치료용 인공피부</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 혈관조직: 관상동맥 우회술용 혈관</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 연골조직: 관절염 치료용 인공연골</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- 신약개발: 동물실험 대체용 장기모델</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>장기이식 대기자들에게 맞춤형 장기를 제공할 수 있어
              의료계에 혁명을 일으킬 것으로 기대됩니다</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Market size */}
        <div className="mb-8">
            <h3 className="text-primary text-lg font-bold mb-4">시장 전망</h3>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                2024년 18억 달러 → 2030년 39억 달러 전망
            </div>
              <SmartTooltipText>재생의학과 개인맞춤 치료의 핵심 기술로 급성장 중</SmartTooltipText>
              <SmartTooltipText>특히 장기이식 시장의 대안으로 주목받고 있어요</SmartTooltipText>
          </div>
        </div>

        {/* Investment perspective */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            <div>
              <SmartTooltipText>3D 바이오프린팅은 장기적 관점에서 
              엄청난 시장 잠재력을 가진 분야예요</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 주요 체크포인트</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>세포 생존율과 조직 성숙도</SmartTooltipText>
              <SmartTooltipText>프린팅 속도와 정밀도 기술력</SmartTooltipText>
              <SmartTooltipText>임상시험 진행 상황과 규제 승인 전략</SmartTooltipText>
              <SmartTooltipText>글로벌 파트너십과 상업화 계획</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>아직 초기 단계이지만, 성공 시 의료산업 전체를 바꿀 혁신기술입니다!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">3D 바이오프린팅은 장기이식의 미래</span>
              <span className="text-black">살아있는 조직을 프린팅하는 꿈의 기술입니다</span>
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
                <span className='font-bold text-black'>테고사이언스</span>
                <span>3D 바이오프린팅 기반 재생의료 솔루션 개발</span>
                <span className='font-bold text-black'>셀트리온</span>
                <span>바이오프린팅 기술을 활용한 조직공학 연구</span>
                <span className='font-bold text-black'>메디포스트</span>
                <span>줄기세포 기반 3D 프린팅 조직 재생치료제</span>
              </div>
          </div>
        </div>
      </div>
  );
}