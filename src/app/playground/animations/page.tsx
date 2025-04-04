"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { AnimationExample } from "@/components/animation-example"
import { useEffect, useState } from "react"

export default function AnimationsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link
            href="/playground"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Playground</span>
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">CSS Animation Lab</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore various CSS animations and Framer Motion examples. Click on the cards
            to see the animations in action. Feel free to use these in your own projects!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimationExample
            title="Hover Scale"
            description="A simple hover scale effect with a smooth transition."
            codeSnippet={`
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}
            `}
            tag="CSS"
          />

          <AnimationExample
            title="Rotating Animation"
            description="A continuous rotating animation, perfect for loading indicators."
            codeSnippet={`
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.rotate {
  animation: rotate 2s linear infinite;
}
            `}
            tag="CSS"
            animation="rotate"
          />

          <AnimationExample
            title="Pulse Effect"
            description="A pulsing animation that draws attention to important elements."
            codeSnippet={`
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.pulse {
  animation: pulse 2s ease infinite;
}
            `}
            tag="CSS"
            animation="pulse"
          />

          <AnimationExample
            title="Fade In"
            description="A simple fade-in animation for elements entering the viewport."
            codeSnippet={`
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade-in {
  animation: fadeIn 1s ease forwards;
}
            `}
            tag="CSS"
            animation="fade-in"
          />

          <AnimationExample
            title="Slide In"
            description="A slide-in animation from the bottom."
            codeSnippet={`
@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.slide-in {
  animation: slideIn 0.5s ease forwards;
}
            `}
            tag="CSS"
            animation="slide-in"
          />

          <AnimationExample
            title="Bounce"
            description="A bouncing animation for playful interactions."
            codeSnippet={`
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.bounce {
  animation: bounce 1s ease infinite;
}
            `}
            tag="CSS"
            animation="bounce"
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}
