"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, RefreshCw } from "lucide-react"
import { Footer } from "@/components/footer"

export default function KaleidoscopePage() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [symmetryCount, setSymmetryCount] = useState(8)
  const [isDrawing, setIsDrawing] = useState(false)
  
  useEffect(() => {
    let p5Instance: any = null
    
    // Import p5.js dynamically to avoid SSR issues
    import('p5').then((p5Module) => {
      const p5 = p5Module.default
      
      // Create a new p5 instance
      p5Instance = new p5((p) => {
        let symmetry = symmetryCount
        let angle = 360 / symmetry
        let lastX, lastY
        let strokeColor = 0
        
        p.setup = () => {
          // Create canvas that fills the container
          const canvas = p.createCanvas(
            canvasRef.current ? canvasRef.current.offsetWidth : 800, 
            canvasRef.current ? canvasRef.current.offsetHeight : 600
          )
          canvas.parent(canvasRef.current!)
          
          p.angleMode(p.DEGREES)
          p.colorMode(p.HSB, 360, 100, 100, 1)
          p.background(0)
          
          // Initial instructions
          p.textAlign(p.CENTER)
          p.textSize(16)
          p.fill(255)
          p.noStroke()
          p.text('Click and drag to create patterns', p.width/2, p.height/2)
        }
        
        p.draw = () => {
          symmetry = symmetryCount
          angle = 360 / symmetry
          
          if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
            let mx = p.mouseX - p.width / 2
            let my = p.mouseY - p.height / 2
            
            if (p.mouseIsPressed) {
              setIsDrawing(true)
              
              // Only draw if mouse has moved
              if (lastX !== mx || lastY !== my) {
                strokeColor = (strokeColor + 0.5) % 360
                p.push()
                p.translate(p.width / 2, p.height / 2)
                p.stroke(strokeColor, 100, 100, 0.6)
                p.strokeWeight(3)
                
                for (let i = 0; i < symmetry; i++) {
                  p.rotate(angle)
                  
                  // Draw line
                  if (lastX && lastY) {
                    p.line(mx, my, lastX, lastY)
                  }
                  
                  // Mirror across axis
                  p.push()
                  p.scale(1, -1)
                  if (lastX && lastY) {
                    p.line(mx, my, lastX, lastY)
                  }
                  p.pop()
                }
                p.pop()
                
                lastX = mx
                lastY = my
              }
            } else {
              lastX = null
              lastY = null
              setIsDrawing(false)
            }
          }
        }
        
        p.windowResized = () => {
          p.resizeCanvas(
            canvasRef.current ? canvasRef.current.offsetWidth : 800, 
            canvasRef.current ? canvasRef.current.offsetHeight : 600
          )
        }
        
        p.mouseReleased = () => {
          lastX = null
          lastY = null
          setIsDrawing(false)
        }
      }, canvasRef.current)
    })
    
    return () => {
      // Cleanup
      if (p5Instance) {
        p5Instance.remove()
      }
    }
  }, [symmetryCount])
  
  const handleClear = () => {
    if (canvasRef.current && canvasRef.current.firstChild) {
      const canvas = canvasRef.current.querySelector('canvas')
      if (canvas) {
        const context = canvas.getContext('2d')
        if (context) {
          context.fillStyle = 'black'
          context.fillRect(0, 0, canvas.width, canvas.height)
        }
      }
    }
  }
  
  const handleSave = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current.querySelector('canvas')
      if (canvas) {
        const link = document.createElement('a')
        link.download = 'kaleidoscope-creation.png'
        link.href = canvas.toDataURL('image/png')
        link.click()
      }
    }
  }
  
  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            href="/playground"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to playground</span>
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Interactive Kaleidoscope</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Click and drag to create mesmerizing symmetrical patterns. Adjust the number of reflections to create different effects.
        </p>
        
        <div className="mb-4 flex flex-wrap gap-4 items-center">
          <div>
            <label htmlFor="symmetry-slider" className="block text-sm font-medium mb-1">
              Reflections: {symmetryCount}
            </label>
            <input
              id="symmetry-slider"
              type="range"
              min="2"
              max="24"
              value={symmetryCount}
              onChange={(e) => setSymmetryCount(parseInt(e.target.value))}
              className="w-48 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          
          <button
            onClick={handleClear}
            className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-secondary border border-border rounded-md transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Clear</span>
          </button>
          
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Save Creation</span>
          </button>
        </div>
        
        <div 
          ref={canvasRef} 
          className="w-full h-[600px] bg-black rounded-lg overflow-hidden mb-8 cursor-crosshair"
        ></div>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <p className="mb-4">
            This kaleidoscope uses p5.js to create symmetrical patterns based on your mouse movements. 
            The mathematics behind it involves:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rotational symmetry around a central point</li>
            <li>Mirroring across multiple axes</li>
            <li>Color transitions based on the HSB color model</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            Try different reflection counts to create unique patterns. The colors automatically shift as you draw for a rainbow effect.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}