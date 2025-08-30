'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import * as faceapi from 'face-api.js'

interface VideoFeedProps {
  onExpressionsDetected: (expressions: Array<{ expression: string; confidence: number }>) => void
  onFaceDetected: (detected: boolean) => void
}

export default function VideoFeed({ onExpressionsDetected, onFaceDetected }: VideoFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // Load face-api.js models
  const loadModels = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Load models one by one with better error handling
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
      await faceapi.nets.faceExpressionNet.loadFromUri('/models')
      
      setIsLoading(false)
    } catch (err) {
      console.error('Error loading models:', err)
      setError(`Failed to load face detection models: ${err instanceof Error ? err.message : 'Unknown error'}`)
      setIsLoading(false)
    }
  }, [])

  // Start camera
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        } 
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
    } catch (err) {
      console.error('Error accessing camera:', err)
      setError(`Failed to access camera: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }, [])

  // Process video frames for face detection
  const processFrame = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || isProcessing) return

    try {
      setIsProcessing(true)
      
      const video = videoRef.current
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      if (!ctx) {
        console.error('Could not get canvas context')
        return
      }

      // Check if video is ready
      if (video.readyState !== 4) {
        return
      }

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Detect faces and expressions
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions()

      if (detections.length > 0) {
        // Face detected
        onFaceDetected(true)
        
        // Get the first face's expressions
        const expressions = detections[0].expressions
        
        // Convert to array and sort by confidence
        const expressionsArray = Object.entries(expressions)
          .map(([expression, confidence]) => ({ expression, confidence }))
          .sort((a, b) => b.confidence - a.confidence)
          .slice(0, 3) // Top 3 expressions
        
        onExpressionsDetected(expressionsArray)
        
        // Draw face detection box (optional)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const resizedDetections = faceapi.resizeResults(detections, {
          width: canvas.width,
          height: canvas.height
        })
        faceapi.draw.drawDetections(canvas, resizedDetections)
      } else {
        // No face detected
        onFaceDetected(false)
        onExpressionsDetected([])
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    } catch (err) {
      console.error('Error processing frame:', err)
    } finally {
      setIsProcessing(false)
    }
  }, [onExpressionsDetected, onFaceDetected, isProcessing])

  // Initialize models and camera
  useEffect(() => {
    loadModels()
  }, [loadModels])

  // Start camera after models are loaded
  useEffect(() => {
    if (!isLoading && !error) {
      startCamera()
    }
  }, [isLoading, error, startCamera])

  // Process frames continuously
  useEffect(() => {
    if (isLoading || error || !videoRef.current) return

    const interval = setInterval(processFrame, 100) // Process every 100ms for smooth performance
    
    return () => clearInterval(interval)
  }, [isLoading, error, processFrame])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-100 rounded-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">Loading face detection models...</p>
        <p className="text-gray-500 text-sm mt-2">This may take a few moments</p>
        <div className="mt-4 text-xs text-gray-400">
          <p>Loading TinyFaceDetector...</p>
          <p>Loading FaceExpressionNet...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-red-50 rounded-lg border border-red-200">
        <div className="text-red-500 text-6xl mb-4">📷</div>
        <p className="text-red-600 text-center mb-2">{error}</p>
        <div className="text-center mb-4">
          <p className="text-red-500 text-sm mb-2">Try these solutions:</p>
          <ul className="text-red-500 text-sm text-left space-y-1">
            <li>• Check your internet connection</li>
            <li>• Refresh the page</li>
            <li>• Try a different browser</li>
          </ul>
        </div>
        <div className="space-x-2">
          <button 
            onClick={loadModels}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry Loading Models
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
        style={{ width: '100%', maxWidth: '640px' }}
      />
    </div>
  )
}
