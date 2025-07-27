'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function ADC() {
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
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">관련 지식</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">
          <SmartTooltipText>ADC: 항암제의 정밀 유도 미사일!</SmartTooltipText>
        </h1>

        {/* ADC Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>ADC</SmartTooltipText></h2>
          <SmartTooltipText>이를 그대로 항체(Antibody)와 약물(Drug)을 링커(Linker)라는 연결고리로 연결한 치료제</SmartTooltipText>
        </div>

        {/* 왜 지금 주목받고 있을까? */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">조금 더 자세히 말하면?</h3>
          <div className="space-y-4 text-black">
               <SmartTooltipText>ADC는 항체에 강력한 항암제를 붙여,
               암세포만 골라 타격하는 차세대 표적 항암 기술이에요</SmartTooltipText>
               <SmartTooltipText>항체는 암세포 표면의 특정 단백질만 인식해요</SmartTooltipText>
               <SmartTooltipText>여기에 붙은 강력한 독성 항암제는
               암세포 안으로 들어가서 작용하고요</SmartTooltipText>
               <SmartTooltipText>이 덕분에 정상세포는 건드리지 않고,
               암세포만 골라 죽일 수 있어요</SmartTooltipText>
               <SmartTooltipText>세포 안으로 배달되는 스마트 약물'이라고
               생각하면 이해가 쉬워요!</SmartTooltipText>
          </div>
        </div>

        {/* 이런 곳에 쓰이고 있어요 */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">이런 곳에 쓰이고 있어요</h3>
          <div className="space-y-2 text-black">
            <SmartTooltipText>이미 허가된 ADC 약물에, 서에스 쏘다 있어요</SmartTooltipText>
            <div className="flex flex-col gap-2">
              <div className="text-primary"><SmartTooltipText>- Enhertu HER2 양성 유방암, 위암 등</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- Trodelvty 삼중음성 유방암</SmartTooltipText></div>
              <div className="text-primary"><SmartTooltipText>- Adcetris 림프종</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              <SmartTooltipText>기존 치료제 토지 양선 닌지않에도</SmartTooltipText>
              <SmartTooltipText>새로운 선택지가 생기고 있어요</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* ADC 시장, 얼마나 거대고 있어요 */}
        <div className="mb-8">
            <SmartTooltipText>ADC 시장, 빠르게 커지고 있어요</SmartTooltipText>
          <div className="space-y-4 text-black">
          <div className="text-black bg-primary/10 px-2 py-1 rounded-md">
                2024년 100억 달러→ 2030년 300억 달러 전망
            </div>
              <SmartTooltipText>더 정밀하고 안전한 링커 기술, 다양한 항암제 조합으로 차세대 ADC 개발도 활발해요</SmartTooltipText>
              <SmartTooltipText>국내 제약사들도 바이어러컨 약물, 공급물 기술요연에 뛰어들고 있어요</SmartTooltipText>
          </div>
        </div>

        {/* 투자자 관점에서 볼 때요? */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">투자자 관점에서 본다면?</h3>
          <div className="space-y-4 text-black">
            
            <div>
              <SmartTooltipText>ADC는 신약 중에서도 글로벌 제약사들이
              큰 돈을 거는 분야예요.</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-black">✓ 다만︎, 몇 가지 체크포인트가 있어요</span>
            </div>
            <div className="ml-4 space-y-1">
              <SmartTooltipText>항체 표적이 암세포에만 특이적인지</SmartTooltipText>
              <SmartTooltipText>부작용 줄이기 위해 중요해요</SmartTooltipText>
              <SmartTooltipText>링커 안정성: 체내에서 잘못 떨어지면 부작용 가능</SmartTooltipText>
              <SmartTooltipText>독성 약물이 얼마나 강력한지, 그리고 정확히 작용하는지</SmartTooltipText>
              <SmartTooltipText>임상단계와 글로벌 파트너사 유무</SmartTooltipText>
            </div>
            <div className="mt-4">
              <SmartTooltipText>ADC는 개발 난이도는 높지만, 성공 시 파급력이 큰 하이리스크-하이리턴형 기술이에요!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* 관련 한 층 요약 */}
        <div className="mb-8">
          <h3 className="text-primary text-lg font-bold mb-4">칼럼 한 줄 요약</h3>
            <div className="text-black bg-primary/10 border-y-1 border-primary py-2 flex flex-col items-center">
              <span className="text-black">ADC는 암세포만 쏘는 스마트 미사일</span>
              <span className="text-black">고정밀 항암제 시대의 대표주자입니다.</span>
          </div>
        </div>

        {/* 관련 상장사 */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <h3 className="text-primary text-lg font-bold mb-4">관련 상장사</h3>
            <div className="text-gray-400 text-sm mb-4">(<SmartTooltipText>시가총액</SmartTooltipText> 순)</div>
          </div>
          
          <div className="space-y-4">
              <div className="text-black text-sm flex flex-col gap-1">
                <span className='font-bold text-black'>HK이노엔</span>
                <span>ADC 기술 기반 항암제 토입 및 글로벌 임상 협력</span>
                <span className='font-bold text-black'>ABL바이오</span>
                <span>이중항체 플랫폼을 활용한 차세대 ADC 개발</span>
                <span className='font-bold text-black'>레고켐바이오</span>
                <span>독자적 링커-약물 플랫폼으로 다수 기술이전 경험 보유</span>
              </div>
          </div>
        </div>

       
      </div>
  );
}
