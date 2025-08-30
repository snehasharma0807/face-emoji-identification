'use client'

interface Expression {
  expression: string
  confidence: number
}

interface EmojiDisplayProps {
  expressions: Expression[]
  faceDetected: boolean
}

// Emoji mapping for each expression
const EMOJI_MAP: Record<string, string[]> = {
  happy: ['😀', '😄', '😊'],
  sad: ['😢', '😭', '😞'],
  angry: ['😡', '🤬', '😤'],
  surprised: ['😲', '😯', '😮'],
  fearful: ['😨', '😱', '😰'],
  disgusted: ['🤢', '🤮', '😒'],
  neutral: ['😐', '🙂', '😶']
}

// Get emoji for expression (cycles through the array)
const getEmoji = (expression: string, index: number): string => {
  const emojis = EMOJI_MAP[expression.toLowerCase()]
  if (!emojis) return '❓'
  return emojis[index % emojis.length]
}

export default function EmojiDisplay({ expressions, faceDetected }: EmojiDisplayProps) {
  if (!faceDetected) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">👀</div>
        <p className="text-gray-600 text-lg font-medium">Looking for a face...</p>
        <p className="text-gray-500 text-sm mt-2">Position yourself in front of the camera</p>
      </div>
    )
  }

  if (expressions.length === 0) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">🤔</div>
        <p className="text-gray-600 text-lg font-medium">Analyzing expressions...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Top Expressions Detected
      </h3>
      
      <div className="grid grid-cols-3 gap-4">
        {expressions.map((expression, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
          >
            {/* Rank Badge */}
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">
              #{index + 1}
            </div>
            
            {/* Emoji */}
            <div className="text-5xl mb-3">
              {getEmoji(expression.expression, index)}
            </div>
            
            {/* Expression Name */}
            <p className="text-gray-700 font-medium text-center capitalize mb-2">
              {expression.expression}
            </p>
            
            {/* Confidence Score */}
            <div className="text-sm text-gray-600">
              {Math.round(expression.confidence * 100)}%
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Info */}
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          Processing in real-time • Updates every frame
        </p>
      </div>
    </div>
  )
}
