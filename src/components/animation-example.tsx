"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Code } from "lucide-react"

interface AnimationExampleProps {
  title: string
  description: string
  codeSnippet: string
  tag: string
  animation?: string
}

export function AnimationExample({
  title,
  description,
  codeSnippet,
  tag,
  animation
}: AnimationExampleProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-lg border border-border bg-card overflow-hidden custom-cursor"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
            {tag}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          {description}
        </p>

        <div
          className="relative h-32 bg-secondary/50 rounded-md flex items-center justify-center mb-4"
          onClick={toggleAnimation}
        >
          <div
            className={cn(
              "h-16 w-16 bg-primary rounded-md flex items-center justify-center text-white",
              {
                "rotate": animation === "rotate" && isPlaying,
                "pulse": animation === "pulse" && isPlaying,
                "fade-in": animation === "fade-in" && isPlaying,
                "slide-in": animation === "slide-in" && isPlaying,
                "bounce": animation === "bounce" && isPlaying,
                "hover-scale": animation === undefined
              }
            )}
          >
            <Code />
          </div>

          <div className="absolute bottom-2 right-2 text-xs">
            {isPlaying ? "Click to pause" : "Click to animate"}
          </div>
        </div>

        <pre className="text-xs bg-secondary/50 p-4 rounded-md overflow-x-auto">
          <code>{codeSnippet.trim()}</code>
        </pre>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

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

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }

        .rotate {
          animation: rotate 2s linear infinite;
        }

        .pulse {
          animation: pulse 2s ease infinite;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }

        .slide-in {
          opacity: 0;
          transform: translateY(20px);
          animation: slideIn 0.5s ease forwards;
        }

        .bounce {
          animation: bounce 1s ease infinite;
        }
        
        .custom-cursor {
          cursor: pointer;
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='36' viewport='0 0 120 36'><rect x='0' y='0' width='120' height='36' rx='18' ry='18' fill='%23333' opacity='0.8'/><text x='60' y='24' font-family='Arial' font-size='14' fill='white' text-anchor='middle'>Click here</text></svg>") 60 18, auto;
        }
      `}</style>
    </motion.div>
  )
}
