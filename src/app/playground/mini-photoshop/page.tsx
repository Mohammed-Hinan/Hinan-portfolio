"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, Download, Sliders, Layers, Image as ImageIcon, Wand2 } from "lucide-react"
import { Footer } from "@/components/footer"

export default function MiniPhotoshopPage() {
  const [image, setImage] = useState<string | null>(null)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [saturation, setSaturation] = useState(100)
  const [blur, setBlur] = useState(0)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.match('image.*')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
        // Reset adjustments
        setBrightness(100)
        setContrast(100)
        setSaturation(100)
        setBlur(0)
        setActiveFilter(null)
      }
      reader.readAsDataURL(file)
    }
  }

  // Apply image adjustments
  useEffect(() => {
    if (!image) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    img.onload = () => {
      // Set canvas dimensions to match image
      canvas.width = img.width
      canvas.height = img.height
      
      // Draw original image
      ctx.filter = 'none'
      ctx.drawImage(img, 0, 0)
      
      // Apply adjustments
      let filterString = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`
      
      if (blur > 0) {
        filterString += ` blur(${blur}px)`
      }
      
      // Apply preset filter if selected
      if (activeFilter) {
        switch(activeFilter) {
          case 'grayscale':
            filterString += ' grayscale(100%)'
            break
          case 'sepia':
            filterString += ' sepia(80%)'
            break
          case 'invert':
            filterString += ' invert(100%)'
            break
          case 'vintage':
            filterString += ' sepia(50%) contrast(85%) brightness(90%)'
            break
          case 'cool':
            filterString += ' hue-rotate(180deg) saturate(120%)'
            break
          case 'warm':
            filterString += ' sepia(30%) saturate(140%) hue-rotate(-30deg)'
            break
        }
      }
      
      ctx.filter = filterString
      ctx.drawImage(img, 0, 0)
    }
    img.src = image
  }, [image, brightness, contrast, saturation, blur, activeFilter])

  // Save edited image
  const handleSave = () => {
    if (!canvasRef.current) return
    
    const link = document.createElement('a')
    link.download = 'edited-image.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
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
        
        <h1 className="text-4xl font-bold mb-4">Mini Photoshop</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Upload an image and edit it with basic adjustments, filters, and effects.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-3 bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center min-h-[500px]">
            {image ? (
              <div className="w-full h-full flex items-center justify-center overflow-auto">
                <canvas 
                  ref={canvasRef} 
                  className="max-w-full max-h-[500px] object-contain shadow-lg"
                />
              </div>
            ) : (
              <div className="text-center">
                <ImageIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">No image selected</p>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
                >
                  <Upload className="h-4 w-4" />
                  <span>Upload Image</span>
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            )}
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Sliders className="h-4 w-4" />
                <span>Adjustments</span>
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Brightness: {brightness}%</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={brightness} 
                    onChange={(e) => setBrightness(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    disabled={!image}
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Contrast: {contrast}%</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={contrast} 
                    onChange={(e) => setContrast(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    disabled={!image}
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Saturation: {saturation}%</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={saturation} 
                    onChange={(e) => setSaturation(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    disabled={!image}
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Blur: {blur}px</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="0.5"
                    value={blur} 
                    onChange={(e) => setBlur(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    disabled={!image}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Wand2 className="h-4 w-4" />
                <span>Filters</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-2">
                {['None', 'Grayscale', 'Sepia', 'Invert', 'Vintage', 'Cool', 'Warm'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter === 'None' ? null : filter.toLowerCase())}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
                      (filter === 'None' && !activeFilter) || 
                      (filter !== 'None' && activeFilter === filter.toLowerCase())
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    disabled={!image}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
              >
                <Upload className="h-4 w-4" />
                <span>Change Image</span>
              </button>
              
              <button 
                onClick={handleSave}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
                disabled={!image}
              >
                <Download className="h-4 w-4" />
                <span>Save Edited Image</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <p className="mb-4">
            This mini Photoshop uses HTML Canvas and CSS filters to apply real-time adjustments to your images:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upload any image to get started</li>
            <li>Adjust brightness, contrast, saturation, and blur with the sliders</li>
            <li>Apply preset filters like Grayscale, Sepia, or Vintage</li>
            <li>Download your edited image when you're satisfied with the results</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            All processing happens in your browser - your images are never uploaded to any server.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}