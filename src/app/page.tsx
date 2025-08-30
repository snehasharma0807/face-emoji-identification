'use client'

import { useState } from "react";
import VideoFeed from "@/components/VideoFeed";
import EmojiDisplay from "@/components/EmojiDisplay";

interface Expression {
  expression: string;
  confidence: number;
}

export default function Home() {
  const [expressions, setExpressions] = useState<Expression[]>([]);
  const [faceDetected, setFaceDetected] = useState(false);

  const handleExpressionsDetected = (newExpressions: Expression[]) => {
    setExpressions(newExpressions);
  };

  const handleFaceDetected = (detected: boolean) => {
    setFaceDetected(detected);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            😊 Face Expression Reader
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real-time facial expression detection using AI. Show your emotions to the camera!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Video Feed */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 text-center lg:text-left">
              📹 Live Camera Feed
            </h2>
            <VideoFeed
              onExpressionsDetected={handleExpressionsDetected}
              onFaceDetected={handleFaceDetected}
            />
          </div>

          {/* Emoji Display */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 text-center lg:text-left">
              🎭 Expression Analysis
            </h2>
            <EmojiDisplay
              expressions={expressions}
              faceDetected={faceDetected}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            How to Use
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl">📱</div>
              <h4 className="font-medium text-gray-800">Allow Camera Access</h4>
              <p className="text-gray-600 text-sm">Click &ldquo;Allow&rdquo; when prompted for camera permission</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">👤</div>
              <h4 className="font-medium text-gray-800">Position Your Face</h4>
              <p className="text-gray-600 text-sm">Center your face in the camera view</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">😊</div>
              <h4 className="font-medium text-gray-800">Show Expressions</h4>
              <p className="text-gray-600 text-sm">Try different facial expressions to see real-time analysis</p>
            </div>
          </div>
        </div>



        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Built with Next.js, face-api.js, and Tailwind CSS</p>
          <p className="mt-1">Built by Sneha Sharma</p>
        </div>
      </div>
    </div>
  );
}
