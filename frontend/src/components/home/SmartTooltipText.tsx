"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import React from "react"

// 어려운 용어 사전 (바이오/의료/금융 분야)
const DIFFICULT_TERMS: Record<string, string> = {
  "바이오시밀러": "기존 바이오의약품과 유사한 효능과 안전성을 가진 후발 바이오의약품",
  "헤르셉틴": "유방암 치료에 사용되는 항암제 (트라스투주맙)",
  "ADC": "Antibody-Drug Conjugate의 줄임말로, 항체와 항암제를 결합한 표적항암제",
  "SC제형": "피하주사(Subcutaneous) 제형으로, 근육이나 정맥 주사 대신 피부 아래에 투여하는 방식",
  "ALT-B4": "알테오젠의 독자적인 SC 제형 변환 기술 플랫폼",
  "Hybrozyme": "알테오젠의 효소를 이용한 SC 제형 변환 기술",
  "항체공학기술": "항체의 구조와 기능을 인위적으로 개선하는 생명공학 기술",
  "사이토카인": "세포 간 신호전달을 담당하는 단백질",
  "바이오리액터": "미생물이나 세포를 이용해 의약품을 생산하는 장비",
  "FDA": "미국 식품의약국(Food and Drug Administration)",
  "EMA": "유럽의약품청(European Medicines Agency)",
  "임상시험": "신약의 안전성과 효능을 사람에게서 검증하는 시험",
  "면역질환": "면역체계가 자신의 조직을 공격하는 질환",
  "항체치료제": "항체를 이용해 특정 질병을 치료하는 의약품",
  "성장호르몬": "뇌하수체에서 분비되어 성장을 촉진하는 호르몬",
  "세포기반치료제": "살아있는 세포를 이용하여 질병을 치료하는 의약품",
  "생명공학기술": "생명체의 기능을 이용하여 유용한 물질을 생산하는 기술",
  "PER": "주가수익비율(Price Earnings Ratio) - 주가를 주당순이익으로 나눈 값",
  "PBR": "주가순자산비율(Price Book-value Ratio) - 주가를 주당순자산으로 나눈 값",
  "ROE": "자기자본이익률(Return On Equity) - 기업이 자기자본으로 얼마나 효율적으로 이익을 창출했는지 보는 지표",
  "PSR": "주가매출액비율(Price Sales Ratio) - 주가를 주당매출액으로 나눈 값",
  "CMC": "Chemistry, Manufacturing, and Controls - 의약품의 화학적 성질, 제조과정, 품질관리에 관한 분야",
  "키트루다": "머크의 면역항암제 (펨브롤리주맙)",
  "액면분할": "주식의 액면가를 낮춰 주식 수를 늘리는 것",
  "R&D": "Research and Development의 줄임말로, 연구개발을 의미",
  "바이오텍": "생명공학기술을 활용하는 기술집약적 기업",
  "기술이전": "기술을 개발한 회사가 다른 회사에 기술을 넘겨주는 것",
  "파이프라인": "신약개발 단계별로 진행 중인 후보물질들의 목록",
  "시가총액": "상장된 기업의 주식 총 가치 (주가 × 발행주식수)",
  "코스닥": "한국의 중소기업 및 벤처기업을 위한 주식시장",
  "코스피": "한국의 대기업을 중심으로 한 주식시장",
  "USPTO": "미국 특허청(United States Patent and Trademark Office)",
  "면역항암제": "환자의 면역시스템을 활성화해서 암을 치료하는 항암제",
  "펜브롤리주맙": "키트루다의 성분명으로, PD-1 억제제 계열의 면역항암제",
  "트라스투주맙": "헤르셉틴의 성분명으로, HER2 양성 유방암 치료제",
  // ADC 관련 추가 용어들
  "항체": "면역계에서 특정 항원을 인식하고 결합하는 단백질",
  "링커": "ADC에서 항체와 약물을 연결하는 화학적 연결고리",
  "HER2": "인간 표피성장인자 수용체 2로, 유방암의 한 유형을 분류하는 단백질",

  "삼중음성 유방암": "에스트로겐, 프로게스테론, HER2 수용체가 모두 음성인 유방암",
  "림프종": "림프계에서 발생하는 혈액암의 일종",
  "Enhertu": "다이이치 산쿄의 HER2 양성 암 치료용 ADC 약물",
  "Trodelvvy": "길리어드의 삼중음성 유방암 치료용 ADC 약물",
  "Adcetris": "시애틀 제네틱스의 림프종 치료용 ADC 약물",
  "표적항암제": "특정 암세포만을 선택적으로 공격하는 항암제",
  "독성": "생체에 해로운 영향을 미치는 성질",
  "임상": "환자를 직접 진료하고 치료하는 의료 현장",
  "HK이노엔": "국내 제약회사로 ADC 기술 기반 항암제를 개발하는 기업",
  "ABL바이오": "ADC 치료제 개발에 특화된 국내 바이오 기업",
  "암종": "암의 조직학적 분류나 발생 부위에 따른 암의 종류"
}

interface SmartTooltipTextProps {
  children: string
  className?: string
}

// 개별 용어 컴포넌트
function TermWithTooltip({ term, definition, index }: { term: string; definition: string; index: number }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isUserControlled, setIsUserControlled] = React.useState(false)
  
  // 모바일 터치 감지
  const isMobile = typeof window !== 'undefined' && 'ontouchstart' in window

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!isUserControlled) {
      // 첫 번째 클릭: 열기 및 사용자 제어 모드 활성화
      setIsUserControlled(true)
      setIsOpen(true)
    } else {
      // 이후 클릭: 토글
      setIsOpen(!isOpen)
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile && !isUserControlled) {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile && !isUserControlled) {
      setIsOpen(false)
    }
  }

  const handleOpenChange = (open: boolean) => {
    // 사용자가 제어하지 않는 상태에서만 외부 변경 허용
    if (!isUserControlled) {
      setIsOpen(open)
    }
  }

  const handleOutsideClick = () => {
    setIsOpen(false)
    setIsUserControlled(false)
  }

  return (
    <Tooltip open={isOpen} onOpenChange={handleOpenChange}>
      <TooltipTrigger asChild>
        <span 
          className="bg-blue-100 text-blue-500 rounded-lg border-[1px] border-blue-200 px-1 cursor-help hover:bg-blue-200 transition-colors touch-manipulation active:bg-blue-200 inline-block select-none"
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setIsOpen(!isOpen)
            }
          }}
        >
          {term}
        </span>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="max-w-xs z-50 text-xs"
        sideOffset={8}
        onPointerDownOutside={handleOutsideClick}
      >
        <p>{definition}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export function SmartTooltipText({ children, className = "" }: SmartTooltipTextProps) {
  // 텍스트에서 어려운 용어를 찾아 툴팁으로 감싸는 함수
  const processText = (text: string): React.ReactNode[] => {
    const elements: React.ReactNode[] = []
    let lastIndex = 0
    const terms = Object.keys(DIFFICULT_TERMS)
    
    // 모든 용어를 찾기 위한 정규식 생성
    const termPattern = new RegExp(`(${terms.join('|')})`, 'gi')
    const matches = Array.from(text.matchAll(termPattern))
    
    matches.forEach((match, index) => {
      const matchStart = match.index!
      const matchEnd = matchStart + match[0].length
      
      // 매치 이전 텍스트 추가
      if (matchStart > lastIndex) {
        elements.push(text.slice(lastIndex, matchStart))
      }
      
      // 매치된 용어를 툴팁으로 감싸기
      const term = match[0]
      const definition = DIFFICULT_TERMS[term] || DIFFICULT_TERMS[term.toLowerCase()]
      
      if (definition) {
        elements.push(
          <TermWithTooltip 
            key={`${term}-${index}`}
            term={term}
            definition={definition}
            index={index}
          />
        )
      } else {
        elements.push(term)
      }
      
      lastIndex = matchEnd
    })
    
    // 남은 텍스트 추가
    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex))
    }
    
    return elements.length > 0 ? elements : [text]
  }

  return (
    <span className={className}>
      {processText(children)}
    </span>
  )
} 