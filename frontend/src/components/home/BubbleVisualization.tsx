"use client"

import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { BubbleData, SearchData } from "./SearchResults"

interface BubbleVisualizationProps {
  searchData: SearchData | undefined
}

const BACKGROUND_FADE_DURATION_MS = 800;
const FLOATING_AMPLITUDE = 10; // 플로팅 진폭
const CONNECTION_LINE_OPACITY = 0.2;

// 파티클 생성을 위한 유틸리티 함수
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 384,
    y: Math.random() * 384,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2
  }))
}

export function BubbleVisualization({ searchData }: BubbleVisualizationProps) {
  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  
  const bubbleData: BubbleData[] = useMemo(() => {
    if (!searchData) return []

    const bubbles: BubbleData[] = []
    
    if (searchData.company) {
      bubbles.push({
        id: 0,
        text: searchData.company,
        size: 150, 
        x: 0, 
        y: 0, 
        color: "bg-gradient-to-br from-blue-500 to-purple-600"
      })
    }

    if (searchData.technology && searchData.technology.length > 0) {
      const techCount = searchData.technology.length
      const radius = 120 
      const upwardOffset = -250 // 전체적으로 위로 올리는 오프셋
      const leftOffset = -60 // 전체적으로 왼쪽으로 이동하는 오프셋
      const gradients = [
        "bg-gradient-to-br from-blue-400 to-cyan-500",
        "bg-gradient-to-br from-green-400 to-emerald-500", 
        "bg-gradient-to-br from-purple-400 to-pink-500",
        "bg-gradient-to-br from-orange-400 to-red-500",
        "bg-gradient-to-br from-pink-400 to-rose-500",
        "bg-gradient-to-br from-yellow-400 to-orange-500",
        "bg-gradient-to-br from-indigo-400 to-purple-500",
        "bg-gradient-to-br from-red-400 to-pink-500"
      ]
      
      searchData.technology.forEach((tech, index) => {
        const angle = (index * 2 * Math.PI) / techCount
        const x = Math.cos(angle) * radius + leftOffset // 왼쪽으로 이동하는 오프셋 적용
        const y = Math.sin(angle) * radius + upwardOffset // 위로 올리는 오프셋 적용
        
        bubbles.push({
          id: index + 1,
          text: tech,
          size: 90, 
          x: x,
          y: y,
          color: gradients[index % gradients.length] 
        })
      })
    }

    return bubbles
  }, [searchData])

  // 파티클 데이터 생성
  const particles = useMemo(() => generateParticles(15), [searchData])

  // 연결선을 그리기 위한 함수
  const getConnectionLines = () => {
    if (bubbleData.length <= 1) return []
    
    const centerBubble = bubbleData.find(b => b.id === 0)
    if (!centerBubble) return []
    
    return bubbleData
      .filter(b => b.id !== 0)
      .map(bubble => ({
        from: { x: 192, y: 192 }, // 중심점 (384/2)
        to: { 
          x: 192 + bubble.x, 
          y: 192 + bubble.y 
        },
        id: bubble.id
      }))
  }

  const connectionLines = getConnectionLines()

  return (
    <div 
      className="flex-1 flex items-center justify-center relative pb-30"
      onMouseEnter={() => setIsInteractive(true)}
      onMouseLeave={() => setIsInteractive(false)}
    >
      <div className="relative w-96 h-96">
        {/* 주식 가격 정보 */}
        <motion.div 
          className="flex gap-1 absolute right-[10%] bottom-[20%] z-20"
          animate={{ y: isInteractive ? [-2, 2, -2] : 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="">462,000</span>
          <span className="text-blue-500">-3.14%</span>
        </motion.div>

        {/* Background Circle with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: isInteractive ? 1.02 : 1,
            boxShadow: isInteractive 
              ? "0 0 50px rgba(59, 130, 246, 0.3)" 
              : "0 0 20px rgba(59, 130, 246, 0.1)"
          }}
          transition={{
            duration: BACKGROUND_FADE_DURATION_MS / 1000,
            ease: "easeOut"
          }}
          className="absolute inset-0 rounded-full border-2 border-gray-200/30 bg-gradient-to-br from-blue-50/30 to-purple-50/20 backdrop-blur-sm"
        />

        {/* Animated background rings */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.1, 0.3],
            rotate: [0, 360]
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute inset-4 rounded-full border border-blue-200/50"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.05, 0.2],
            rotate: [360, 0]
          }}
          transition={{
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute inset-8 rounded-full border border-purple-200/30"
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(particle.id) * 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* SVG for connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connectionLines.map((line) => (
            <motion.line
              key={line.id}
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: hoveredBubble === line.id || hoveredBubble === 0 ? 0.8 : CONNECTION_LINE_OPACITY,
                strokeWidth: hoveredBubble === line.id || hoveredBubble === 0 ? 3 : 2
              }}
              transition={{
                pathLength: { duration: 1, delay: 0.5 },
                opacity: { duration: 0.3 },
                strokeWidth: { duration: 0.3 }
              }}
            />
          ))}
          
          {/* Enhanced gradient definition */}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
        
        {bubbleData.map((bubble, index) => (
          <motion.div
            key={bubble.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: hoveredBubble === bubble.id ? 1.15 : 1, 
              opacity: 1,
              y: [0, -FLOATING_AMPLITUDE, 0], // 플로팅 애니메이션
              rotate: hoveredBubble === bubble.id ? [0, 5, -5, 0] : 0
            }}
            transition={{
              scale: { duration: 0.3 },
              opacity: { duration: 0.5, delay: 0.4 + index * 0.1 },
              y: {
                duration: 3 + index * 0.5, // 각 버블마다 다른 속도
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3 // 각 버블마다 다른 시작 시간
              },
              rotate: { duration: 0.5, ease: "easeInOut" }
            }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredBubble(bubble.id)}
            onHoverEnd={() => setHoveredBubble(null)}
            className={`absolute rounded-full ${bubble.color} flex items-center justify-center cursor-pointer shadow-xl backdrop-blur-sm relative overflow-hidden`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `calc(50% + ${bubble.x}px - ${bubble.size / 2}px)`,
              top: `calc(50% + ${bubble.y}px - ${bubble.size / 2}px)`,
            }}
          >
            {/* 반짝이는 효과 */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4
              }}
            />

            {/* 펄스 효과 */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{
                scale: [1, 1.5],
                opacity: [0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.6
              }}
            />
            
            {/* 텍스트 */}
            <motion.span 
              className="text-white font-semibold text-sm px-2 text-center leading-tight relative z-10 drop-shadow-lg"
              animate={{
                textShadow: hoveredBubble === bubble.id 
                  ? "0 0 10px rgba(255,255,255,0.8)" 
                  : "0 2px 4px rgba(0,0,0,0.5)"
              }}
            >
              {bubble.text}
            </motion.span>

            {/* 호버 시 글로우 효과 */}
            {hoveredBubble === bubble.id && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white/10 border-2 border-white/50"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0 }}
              />
            )}

            {/* 클릭 파티클 효과 */}
            {hoveredBubble === bubble.id && (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: [0, (Math.cos(i * 60 * Math.PI / 180) * 30)],
                      y: [0, (Math.sin(i * 60 * Math.PI / 180) * 30)],
                      opacity: [1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
} 