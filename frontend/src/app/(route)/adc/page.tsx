'use client'

import { useRouter } from 'next/navigation'

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
          ADC: 암암제의 정밀 유도 미사일!
        </h1>

        {/* ADC Definition */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4">ADC</h2>
          <p className="text-primary-foreground mb-4">
            이를 그대로 항체(Antibody)와 약물(Drug)을 링커(Linker)라는 연결고리로 연결한 치료제
          </p>
        </div>

        {/* 왜 지금 주목받고 있을까? */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">왜 지금 주목받고 있을까?</h3>
          <div className="space-y-4 text-primary-foreground">
            <p>
              ADC는 암세포 근처로만 항체영역의 특이성 덕분에 정밀하게 치료제가 전달 가능하고
            </p>
            <p>
              암세포 내부로 전달된 독성 약물은 선택적으로 암세포를 죽이는 원신타즈
            </p>
            <p>
              여기에 볼은 감염된 독성 약물들은 불외 처료 약물들이 이직원장 업체
            </p>
            <p>
              이 억옵에 정상세포에는 개주되지 않고, 임상보고 출전 접신 수 있어요
            </p>
            <p>
              새로 오르는 백업되는 스마트 약물이야하고 성형에현 이해가 있어서!
            </p>
          </div>
        </div>

        {/* 이런 곳에 쓰이고 있어요 */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">이런 곳에 쓰이고 있어요</h3>
          <div className="space-y-2 text-primary-foreground">
            <p>이미 허가된 ADC 약물에, 서에스 쏘다 있어요</p>
            <p className="text-primary">Enhertu HER2 양성 유방암, 위암 등</p>
            <p className="text-primary">Trodelvty 삼중음성 유방암</p>
            <p className="text-primary">Adcetris 림프종</p>
            <p className="mt-4">
              기존 치료제 토지 양선 닌지않에도<br/>
              새로운 선택지가 생기고 있어요
            </p>
          </div>
        </div>

        {/* ADC 시장, 얼마나 거대고 있어요 */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">ADC 시장, 얼마나 거대고 있어요</h3>
          <div className="space-y-4 text-primary-foreground">
            <p>
              <span className="text-primary">2024년 100억 달러</span> → <span className="text-primary">2030년 300억 달러</span> 점양
            </p>
            <p>
              더 정확하고 안전한 항암 기술, 다양한 암종에 초점으로<br/>
              시설한 ADC 개발로 활발해요
            </p>
            <p>
              국내 제약사들도 바이어러컨 약물, 공급물 기술요연에<br/>
              뛰어들고 있어요
            </p>
          </div>
        </div>

        {/* 투자자 관점에서 볼 때요? */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">투자자 관점에서 볼 때요?</h3>
          <div className="space-y-4 text-primary-foreground">
            <p>
              <span className="text-primary">2024년 100억 달러</span> → <span className="text-primary">2030년 300억 달러</span> 점양
            </p>
            <p>
              ADC는 신약 종에자도 공급물 제약사들이<br/>
              늘 준 커 치료하고 있어요.
            </p>
            <p className="mt-4">
              <span className="text-primary">✓ 더블: 볼 기자 제코포연기가 있어요</span>
            </p>
            <div className="ml-4 space-y-1">
              <p>• 양체 표적이 '양체표에먼' 특이명구자'</p>
              <p>→ 무석물 줄이기 위한 응 근래하요</p>
              <p>• 실기 전삭속: 턴터박 톻은 의석씬 부족물 기능</p>
              <p>→ 늦진 의혁이 영어나 건의적 그넘어 지혜</p>
              <p>• 임상단정 기지법 변환나 목사 우주</p>
            </div>
            <p className="mt-4">
              → ADC는 개념 나이드는 폭지사, 실공 시 피그어 근<br/>
              아이고스 아이너터 기점해요!
            </p>
          </div>
        </div>

        {/* 관련 한 층 요약 */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">관련 한 층 요약</h3>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-primary-foreground">
              ADCC 암세포만 쏘는 스마트 미사일<br/>
              - 정밀한 항체 시스템 대충측방식니다.
            </p>
          </div>
        </div>

        {/* 관련 상장사 */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-bold mb-4">관련 상장사</h3>
          <p className="text-gray-400 text-sm mb-4">(시가총액 순)</p>
          
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">HK이노엔</h4>
              <p className="text-primary-foreground text-sm">
                ADC 기술 기반 항암제 토입 및 글로벌 임상 협력 숭<br/>
                ABL바이오 - 이옹지제 물정정을 함유한 ADC를 치료제 개발<br/>
                첵근바이오 - 수석시 입기부품 물정성은 마우 거세요.
              </p>
            </div>
          </div>
        </div>

       
      </div>
  );
}
