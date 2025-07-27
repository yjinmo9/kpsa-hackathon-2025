"use client"

import { ArrowLeftIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation"

import { useState } from "react"

const OPTIONS = [
  "신약 개발 성공 기대하며 성장에 투자하고 싶어요",
  "안정된 매출과 꾸준한 성장을 원해요",
  "위탁생산으로 안정적 확장을 하는 기업이 좋아요",
  "원천기술 가치 상승으로 단기 변동 큰 기업에 관심 있어요",
  "시장 이벤트에 빠르게 반응하는 기업을 원해요",
  "특정 시장 점유율 상승으로 고성장하는 기업을 보고 싶어요",
  "특화된 동물용 시장에 집중하는 기업이 흥미로워요",
  "글로벌 임상 수주로 안정적 실적 기대 기업이 좋아요",
  "특허와 임상 결과가 중요한 기업을 선호해요",
  "그룹 전체 성장과 신사업 확장에 주목하고 싶어요"
];

const COLUMNS = [
  [
    "임상 3상 돌파 기업 집중 분석",
    "신약 파이프라인의 미래",
    "글로벌 신약개발 트렌드와 국내 기업",
    "바이오벤처의 성공 조건",
    "투자자가 주목해야 할 신약 임상 이슈"
  ],
  [
    "안정적 매출 바이오 기업의 투자 매력",
    "전통 제약사의 성장 전략",
    "배당주로서의 바이오 기업",
    "재무 건전성 분석",
    "장기 투자에 적합한 기업"
  ],
  [
    "CDMO 시장의 성장과 전망",
    "위탁생산 강자 기업 비교",
    "글로벌 진출 전략",
    "생산능력 확장의 의미"
  ],
  [
    "원천기술 보유 기업의 가치",
    "기술수출 성공 사례",
    "특허 전략과 시장 선점",
    "기술이전의 실제"
  ],
  [
    "시장 이벤트와 주가 변동성",
    "이벤트 드리븐 투자 전략",
    "임상 발표의 영향력",
    "단기 급등주 분석"
  ],
  [
    "점유율 상승 기업의 성장 스토리",
    "고성장 바이오 기업의 조건",
    "시장 점유율과 수익성",
    "경쟁사와의 차별화"
  ],
  [
    "동물용 바이오 시장의 유망주",
    "특화 시장의 성장성",
    "글로벌 동물용 의약품 동향",
    "국내외 경쟁 구도"
  ],
  [
    "글로벌 임상 수주 기업 분석",
    "실적 기대주 집중 탐구",
    "임상 수주와 주가 흐름",
    "해외 진출 성공 사례"
  ],
  [
    "특허와 임상 결과의 중요성",
    "지적재산권 전략",
    "임상 성공이 주가에 미치는 영향",
    "특허 만료와 대체약물"
  ],
  [
    "그룹 성장과 신사업 확장 사례",
    "지주회사 체제의 장점",
    "신사업 진출 전략",
    "그룹사간 시너지 효과"
  ]
];

const COLUMN_BODIES = [
  [
    "임상 3상에 성공한 기업들은 신약 상용화에 한 발 더 다가서며, 투자자들의 기대를 한 몸에 받고 있습니다. 이번 칼럼에서는 최근 임상 3상에 돌파한 주요 기업들의 전략과 향후 전망을 집중 분석합니다...",
    "신약 파이프라인의 미래는 혁신 기술과 글로벌 협업에 달려 있습니다. 각 기업의 파이프라인 현황과 미래 성장 가능성을 살펴봅니다...",
    "글로벌 신약개발 트렌드는 오픈이노베이션과 맞춤형 치료제 개발입니다. 국내 기업들이 어떻게 글로벌 트렌드에 대응하고 있는지 분석합니다...",
    "바이오벤처의 성공 조건은 기술력, 자금력, 그리고 임상 성공 경험입니다. 성공한 바이오벤처들의 공통점을 정리합니다...",
    "투자자가 주목해야 할 신약 임상 이슈와 최근 이슈별 주가 반응 사례를 소개합니다..."
  ],
  [
    "안정적 매출을 기록하는 바이오 기업들은 경기 변동에도 강한 모습을 보입니다. 이번 칼럼에서는 대표적인 안정 매출 기업들의 재무 구조와 투자 포인트를 짚어봅니다...",
    "전통 제약사의 성장 전략은 신사업 진출과 글로벌 파트너십에 있습니다. 주요 제약사들의 최근 성장 전략을 분석합니다...",
    "배당주로서의 바이오 기업은 장기 투자자에게 매력적입니다. 배당 정책과 실적을 비교합니다...",
    "재무 건전성은 기업의 지속 성장에 필수입니다. 주요 기업들의 재무 지표를 분석합니다...",
    "장기 투자에 적합한 기업의 조건과 실제 사례를 소개합니다..."
  ],
  [
    "CDMO 시장은 글로벌 신약 개발 증가와 함께 지속 성장하고 있습니다. 국내 CDMO 기업들의 경쟁력과 투자 포인트를 분석합니다...",
    "위탁생산 강자 기업들의 기술력과 생산능력을 비교 분석하며, 투자자 관점에서의 선택 기준을 제시합니다...",
    "국내 CDMO 기업들의 글로벌 진출 전략과 성공 사례, 향후 확장 계획을 살펴봅니다...",
    "생산능력 확장은 CDMO 기업의 핵심 성장 동력입니다. 최근 증설 현황과 그 의미를 분석합니다..."
  ],
  [
    "원천기술을 보유한 기업은 높은 진입장벽과 독점적 지위를 확보할 수 있습니다. 대표적인 원천기술 보유 기업들을 분석합니다...",
    "기술수출에 성공한 국내 바이오 기업들의 사례와 성공 요인, 투자 관점에서의 의미를 살펴봅니다...",
    "특허 전략과 시장 선점의 중요성, 그리고 이를 통한 기업 가치 상승 사례를 분석합니다...",
    "기술이전의 실제 과정과 기업에 미치는 재무적 영향, 투자자가 주목해야 할 포인트를 정리합니다..."
  ],
  [
    "시장 이벤트에 민감하게 반응하는 바이오 기업들의 특성과 주가 변동성 요인을 분석합니다...",
    "이벤트 드리븐 투자 전략의 기본 원리와 바이오 섹터에서의 적용 방안을 소개합니다...",
    "임상 결과 발표가 주가에 미치는 영향과 투자자가 주목해야 할 발표 시점을 정리합니다...",
    "단기간에 급등한 바이오 주식들의 공통점과 급등 요인을 분석합니다..."
  ],
  [
    "시장 점유율 상승을 통해 고성장을 달성한 바이오 기업들의 성장 스토리를 살펴봅니다...",
    "고성장 바이오 기업이 되기 위한 필수 조건과 투자자가 확인해야 할 지표들을 정리합니다...",
    "시장 점유율 확대가 수익성에 미치는 영향과 지속 가능한 성장 모델을 분석합니다...",
    "경쟁사와의 차별화 전략이 성공한 기업 사례와 그 요인을 분석합니다..."
  ],
  [
    "동물용 바이오 시장에서 주목받는 기업들의 사업 모델과 성장 가능성을 분석합니다...",
    "특화 시장에 집중하는 전략의 장점과 투자 매력도를 살펴봅니다...",
    "글로벌 동물용 의약품 시장 동향과 국내 기업들의 기회 요인을 분석합니다...",
    "동물용 바이오 시장의 국내외 경쟁 구도와 주요 플레이어들을 비교합니다..."
  ],
  [
    "글로벌 임상 수주에 성공한 기업들의 경쟁력과 향후 수주 전망을 분석합니다...",
    "안정적 실적이 기대되는 기업들의 사업 모델과 투자 포인트를 집중 탐구합니다...",
    "임상 수주 규모와 주가 흐름의 상관관계를 데이터로 분석합니다...",
    "해외 진출에 성공한 국내 바이오 기업들의 성공 요인과 전략을 살펴봅니다..."
  ],
  [
    "특허와 임상 결과가 기업 가치에 미치는 중요성과 투자 판단 기준을 제시합니다...",
    "지적재산권 전략이 성공한 바이오 기업들의 사례와 그 효과를 분석합니다...",
    "임상 성공이 주가에 미치는 단기 및 장기적 영향을 과거 데이터로 검증합니다...",
    "특허 만료 시점과 대체약물 출현이 기업에 미치는 영향을 분석합니다..."
  ],
  [
    "그룹 차원의 성장 전략과 신사업 확장이 성공한 사례들을 분석합니다...",
    "지주회사 체제로 전환한 바이오 기업들의 장점과 투자 매력도를 살펴봅니다...",
    "신사업 진출 전략이 성공한 기업들의 공통점과 투자자 관점에서의 평가를 정리합니다...",
    "그룹사간 시너지 효과가 실제로 발현된 사례와 그 성과를 분석합니다..."
  ]
];

interface AIAnalysisResponse {
  analysis: string;
  recommendations: string[];
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
}

export default function ColumnDetailPage() {
  const params = useParams<{ type: string, col: string }>()
  const typeIdx = Number(params.type)
  const colIdx = Number(params.col)
  const valid = !isNaN(typeIdx) && !isNaN(colIdx) && typeIdx >= 0 && typeIdx < OPTIONS.length && colIdx >= 0 && colIdx < COLUMNS[typeIdx].length
  const router = useRouter()

  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysisResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!valid) return <div className="p-8">잘못된 접근입니다.</div>

  const handleAIAnalysis = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/ai-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: COLUMNS[typeIdx][colIdx],
          content: COLUMN_BODIES[typeIdx][colIdx],
          userSelection: OPTIONS[typeIdx]
        }),
      })

      if (!response.ok) {
        throw new Error('AI 분석에 실패했습니다.')
      }

      const result = await response.json()
      setAiAnalysis(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'AI 분석 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'LOW': return 'text-green-600 bg-green-100'
      case 'HIGH': return 'text-red-600 bg-red-100'
      default: return 'text-yellow-600 bg-yellow-100'
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-6">
      <div className="flex items-center justify-start w-full">
        <button onClick={() => router.back()}>
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">{COLUMNS[typeIdx][colIdx]}</h1>
      
      <div className="w-full max-w-2xl space-y-6">
        <div className="bg-gray-100 rounded-lg p-6 shadow text-gray-800">
          <h2 className="text-lg font-semibold mb-3">기본 정보</h2>
          <p className="mb-4">{COLUMN_BODIES[typeIdx][colIdx]}</p>
          <p className="text-sm text-gray-600">선택한 투자 성향: {OPTIONS[typeIdx]}</p>
        </div>

        <div className="text-center">
          <button
            onClick={handleAIAnalysis}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {loading ? '분석 중...' : 'AI 투자 분석 받기'}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {loading && (
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded text-center">
            <div className="animate-spin inline-block w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full mr-2"></div>
            AI가 투자 분석을 진행 중입니다...
          </div>
        )}

        {aiAnalysis && (
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">AI 투자 분석</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(aiAnalysis.riskLevel)}`}>
                  위험도: {aiAnalysis.riskLevel}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{aiAnalysis.analysis}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">투자 추천사항</h3>
              <ul className="space-y-2">
                {aiAnalysis.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 