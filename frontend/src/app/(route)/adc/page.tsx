'use client'

import { useRouter } from 'next/navigation'
import { SmartTooltipText } from '@/components/home/SmartTooltipText'

export default function ADC() {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
  return (
      <div className="p-4 bg-black text-white min-h-screen">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-6 w-full">
          <button className="text-white" onClick={handleBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex gap-4">
            <span className="text-gray-400">신약 개발 기술</span>
            <span className="text-white">관련 지식</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">
          <SmartTooltipText>ADC: 항암제의 정밀 유도 미사일!</SmartTooltipText>
        </h1>

        {/* ADC Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4"><SmartTooltipText>ADC</SmartTooltipText></h2>
          <SmartTooltipText>이를 그대로 항체(Antibody)와 약물(Drug)을 링커(Linker)라는 연결고리로 연결한 치료제</SmartTooltipText>
        </div>

        {/* 왜 지금 주목받고 있을까? */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">조금 더 자세히 말하면?</h3>
          <div className="space-y-4 text-primary-foreground">
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
          <h3 className="text-white text-lg font-bold mb-4">이런 곳에 쓰이고 있어요</h3>
          <div className="space-y-2 text-primary-foreground">
            <SmartTooltipText>이미 허가된 ADC 약물에, 서에스 쏘다 있어요</SmartTooltipText>
            <div className="text-primary"><SmartTooltipText>Enhertu HER2 양성 유방암, 위암 등</SmartTooltipText></div>
            <div className="text-primary"><SmartTooltipText>Trodelvty 삼중음성 유방암</SmartTooltipText></div>
            <div className="text-primary"><SmartTooltipText>Adcetris 림프종</SmartTooltipText></div>
            <div className="mt-4">
              <SmartTooltipText>기존 치료제 토지 양선 닌지않에도</SmartTooltipText><br/>
              <SmartTooltipText>새로운 선택지가 생기고 있어요</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* ADC 시장, 얼마나 거대고 있어요 */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4"><SmartTooltipText>ADC</SmartTooltipText> 시장, 얼마나 거대고 있어요</h3>
          <div className="space-y-4 text-primary-foreground">
            <div>
              <span className="text-primary"><SmartTooltipText>2024년 100억 달러</SmartTooltipText></span> → <span className="text-primary"><SmartTooltipText>2030년 300억 달러</SmartTooltipText></span> 점양
            </div>
            <div>
              <SmartTooltipText>더 정확하고 안전한 항암 기술, 다양한 암종에 초점으로</SmartTooltipText><br/>
              <SmartTooltipText>시설한 ADC 개발로 활발해요</SmartTooltipText>
            </div>
            <div>
              <SmartTooltipText>국내 제약사들도 바이어러컨 약물, 공급물 기술요연에</SmartTooltipText><br/>
              <SmartTooltipText>뛰어들고 있어요</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* 투자자 관점에서 볼 때요? */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">투자자 관점에서 볼 때요?</h3>
          <div className="space-y-4 text-primary-foreground">
            <div>
              <span className="text-primary"><SmartTooltipText>2024년 100억 달러</SmartTooltipText></span> → <span className="text-primary"><SmartTooltipText>2030년 300억 달러</SmartTooltipText></span> 점양
            </div>
            <div>
              <SmartTooltipText>ADC는 신약 종에자도 공급물 제약사들이</SmartTooltipText><br/>
              <SmartTooltipText>늘 준 커 치료하고 있어요.</SmartTooltipText>
            </div>
            <div className="mt-4">
              <span className="text-primary">✓ 더블: 볼 기자 제코포연기가 있어요</span>
            </div>
            <div className="ml-4 space-y-1">
              <div><SmartTooltipText>• 양체 표적이 '양체표에먼' 특이명구자'</SmartTooltipText></div>
              <div><SmartTooltipText>→ 무석물 줄이기 위한 응 근래하요</SmartTooltipText></div>
              <div><SmartTooltipText>• 실기 전삭속: 턴터박 톻은 의석씬 부족물 기능</SmartTooltipText></div>
              <div><SmartTooltipText>→ 늦진 의혁이 영어나 건의적 그넘어 지혜</SmartTooltipText></div>
              <div><SmartTooltipText>• 임상단정 기지법 변환나 목사 우주</SmartTooltipText></div>
            </div>
            <div className="mt-4">
              → <SmartTooltipText>ADC는 개념 나이드는 폭지사, 실공 시 피그어 근</SmartTooltipText><br/>
              <SmartTooltipText>아이고스 아이너터 기점해요!</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* 관련 한 층 요약 */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">관련 한 층 요약</h3>
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="text-primary-foreground">
              <SmartTooltipText>ADCC 암세포만 쏘는 스마트 미사일</SmartTooltipText><br/>
              <SmartTooltipText>- 정밀한 항체 시스템 대충측방식니다.</SmartTooltipText>
            </div>
          </div>
        </div>

        {/* 관련 상장사 */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">관련 상장사</h3>
          <div className="text-gray-400 text-sm mb-4">(<SmartTooltipText>시가총액</SmartTooltipText> 순)</div>
          
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2"><SmartTooltipText>HK이노엔</SmartTooltipText></h4>
              <div className="text-primary-foreground text-sm">
                <SmartTooltipText>ADC 기술 기반 항암제 토입 및 글로벌 임상 협력 숭</SmartTooltipText><br/>
                <SmartTooltipText>ABL바이오 - 이옹지제 물정정을 함유한 ADC를 치료제 개발</SmartTooltipText><br/>
                <SmartTooltipText>첵근바이오 - 수석시 입기부품 물정성은 마우 거세요.</SmartTooltipText>
              </div>
            </div>
          </div>
        </div>

       
      </div>
  );
}
