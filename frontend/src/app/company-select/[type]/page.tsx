"use client"

import { useParams, useRouter } from "next/navigation"

const OPTIONS = [
  "신약 개발 성공 기대주에 투자하고 싶어요",
  "안정적 매출과 꾸준한 성장 기업을 원해요",
  "위탁생산으로 확장하는 기업이 좋아요",
  "원천기술로 단기 변동성 큰 기업에 관심 있어요",
  "시장 이벤트에 빠르게 반응하는 기업이 좋아요",
  "점유율 상승으로 고성장하는 기업을 보고 싶어요",
  "동물용 시장에 집중하는 기업이 흥미로워요",
  "글로벌 임상 수주로 실적 기대 기업이 좋아요",
  "특허와 임상 결과가 중요한 기업을 선호해요",
  "그룹 성장과 신사업 확장에 주목하고 싶어요"
];

const RECOMMEND = [
  {
    stocks: ["에이치엘비", "셀트리온", "HLB생명과학", "신라젠", "메드팩토", "에이비엘바이오"],
    columns: [
      "임상 3상 돌파 기업 집중 분석",
      "신약 파이프라인의 미래",
      "글로벌 신약개발 트렌드와 국내 기업",
      "바이오벤처의 성공 조건",
      "투자자가 주목해야 할 신약 임상 이슈"
    ]
  },
  {
    stocks: ["유한양행", "종근당", "대웅제약", "한미약품", "동아에스티", "JW중외제약"],
    columns: [
      "안정적 매출 바이오 기업의 투자 매력",
      "전통 제약사의 성장 전략",
      "배당주로서의 바이오 기업",
      "재무 건전성 분석",
      "장기 투자에 적합한 기업"
    ]
  },
  {
    stocks: ["삼성바이오로직스", "SK바이오사이언스", "녹십자", "에스티팜", "바이넥스", "프레스티지바이오"],
    columns: [
      "CDMO 시장의 성장과 전망",
      "위탁생산 강자 기업 비교",
      "글로벌 진출 전략",
      "생산능력 확장의 의미"
    ]
  },
  {
    stocks: ["알테오젠", "에이비엘바이오", "바이오니아", "앱클론", "지노믹트리", "툴젠"],
    columns: [
      "원천기술 보유 기업의 가치",
      "기술수출 성공 사례",
      "특허 전략과 시장 선점",
      "기술이전의 실제"
    ]
  },
  {
    stocks: ["제넥신", "바이오니아", "엔케이맥스", "바이오솔루션", "바이오로그디바이스", "바이오플러스"],
    columns: [
      "시장 이벤트와 주가 변동성",
      "이벤트 드리븐 투자 전략",
      "임상 발표의 영향력",
      "단기 급등주 분석"
    ]
  },
  {
    stocks: ["HLB생명과학", "에스티팜", "에이치엘비파워", "에이프로젠", "에이치엘비제약", "에이치엘비생명과학"],
    columns: [
      "점유율 상승 기업의 성장 스토리",
      "고성장 바이오 기업의 조건",
      "시장 점유율과 수익성",
      "경쟁사와의 차별화"
    ]
  },
  {
    stocks: ["이글벳", "제일바이오", "우진비앤지", "씨티씨바이오", "대성미생물", "중앙백신"],
    columns: [
      "동물용 바이오 시장의 유망주",
      "특화 시장의 성장성",
      "글로벌 동물용 의약품 동향",
      "국내외 경쟁 구도"
    ]
  },
  {
    stocks: ["파미셀", "바이오솔루션", "바이오플러스", "바이오로그디바이스", "바이오니아", "바이오플랜트"],
    columns: [
      "글로벌 임상 수주 기업 분석",
      "실적 기대주 집중 탐구",
      "임상 수주와 주가 흐름",
      "해외 진출 성공 사례"
    ]
  },
  {
    stocks: ["한미약품", "대웅제약", "종근당", "유한양행", "JW중외제약", "동아에스티"],
    columns: [
      "특허와 임상 결과의 중요성",
      "지적재산권 전략",
      "임상 성공이 주가에 미치는 영향",
      "특허 만료와 대체약물"
    ]
  },
  {
    stocks: ["CJ바이오사이언스", "LG화학", "삼성바이오로직스", "SK바이오사이언스", "한미약품", "종근당"],
    columns: [
      "그룹 성장과 신사업 확장 사례",
      "지주회사 체제의 장점",
      "신사업 진출 전략",
      "그룹사간 시너지 효과"
    ]
  }
];

export default function CompanyTypeDetailPage() {
  const params = useParams<{ type: string }>()
  const router = useRouter()
  const idx = Number(params.type)
  const valid = !isNaN(idx) && idx >= 0 && idx < OPTIONS.length

  if (!valid) return <div className="p-8">잘못된 접근입니다.</div>

  return (
    <div className="min-h-[100dvh] bg-gray-50 flex flex-col items-center justify-center p-2 pt-0">
      <div className="w-full max-w-[380px] mt-0 mb-2 overflow-x-auto">
      <div className="w-full max-w-[380px] mt-0 mb-2 overflow-x-auto">
        <h1
          className="h-[50px] text-base md:text-1xl font-bold text-center w-full max-w-[400px] mx-auto whitespace-nowrap overflow-x-auto text-ellipsis"
          style={{ lineHeight: 1.3 }}
        >
          {OPTIONS[idx]}
        </h1>
      </div>
    </div>  
      {/* 추천 주식 2x3 라운드 직사각형 그리드 */}
      <div className="w-full max-w-[375px] bg-[#d5ecc0]/5 rounded-lg p-3 mb-6 shadow border border-[#d5ecc0]">
        <h2 className="text-base font-semibold mb-3 text-lime-800">이 종목을 추천해요!</h2>
        <div className="grid grid-cols-3 gap-3 mb-2">
          {RECOMMEND[idx].stocks.map((stock, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
            >
              <div className="w-28 h-14 rounded-xl bg-[#abca62] flex items-center justify-center text-sm font-semibold text-white shadow hover:scale-105 hover:shadow-lg transition-all cursor-pointer select-none border border-[#abca62] px-2 text-center whitespace-normal break-words">
                {stock}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 칼럼 카드 */}
      <div className="w-full max-w-[375px] bg-white rounded-xl shadow p-0 overflow-hidden">
        <div className="border-b px-4 py-3">
          <div className="text-xl font-bold text-center mb-1">대표 바이오산업 공부하기</div>
          <span className="text-base font-bold"></span>
        </div>
        {RECOMMEND[idx].columns.map((col, i) => (
          <div key={i}>
            <button
              className="w-full text-left px-4 py-3 text-base font-semibold text-gray-800 hover:text-lime-700 transition"
              onClick={() => router.push(`/company-select/${idx}/column/${i}`)}
            >
              {col}
            </button>
            {i < RECOMMEND[idx].columns.length - 1 && <hr className="border-gray-200 mx-4" />}
          </div>
        ))}
      </div>
    </div>
  )
} 