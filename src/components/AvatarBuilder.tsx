'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AvatarBuilder() {
  // State for current selections
  const [colorIndex, setColorIndex] = useState(0)
  const [eyesIndex, setEyesIndex] = useState(0)
  const [mouthIndex, setMouthIndex] = useState(0)
  
  // Define available options (based on your image files)
  // Assuming the files are numbered 1.svg, 2.svg, etc.
  const colors = Array.from({ length: 18 }, (_, i) => i + 1)
  const eyes = Array.from({ length: 13 }, (_, i) => String(i + 1).padStart(2, '0'))
  const mouths = Array.from({ length: 16 }, (_, i) => String(i + 1).padStart(2, '0'))
  
  // Navigation handlers
  const handleNextColor = () => {
    setColorIndex((prev) => (prev + 1) % colors.length)
  }
  
  const handlePrevColor = () => {
    setColorIndex((prev) => (prev - 1 + colors.length) % colors.length)
  }
  
  const handleNextEyes = () => {
    setEyesIndex((prev) => (prev + 1) % eyes.length)
  }
  
  const handlePrevEyes = () => {
    setEyesIndex((prev) => (prev - 1 + eyes.length) % eyes.length)
  }
  
  const handleNextMouth = () => {
    setMouthIndex((prev) => (prev + 1) % mouths.length)
  }
  
  const handlePrevMouth = () => {
    setMouthIndex((prev) => (prev - 1 + mouths.length) % mouths.length)
  }
  
  const handleRandomAvatar = () => {
    setColorIndex(Math.floor(Math.random() * colors.length))
    setEyesIndex(Math.floor(Math.random() * eyes.length))
    setMouthIndex(Math.floor(Math.random() * mouths.length))
  }
  
  return (
    <div className="bg-blue-900 p-6 rounded-lg border border-border mb-4">
      <div className="flex justify-between items-center">
        {/* Left arrows */}
        <div className="flex flex-col gap-4">
          <button 
            className="w-8 h-8 flex items-center justify-center bg-black rounded-sm hover:bg-gray-800"
            onClick={handlePrevColor}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center bg-black rounded-sm hover:bg-gray-800"
            onClick={handlePrevEyes}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center bg-black rounded-sm hover:bg-gray-800"
            onClick={handlePrevMouth}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          </button>
        </div>
        
        {/* Avatar preview - center */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Base avatar shape with color */}
          <div className="w-full h-full relative">
            <img 
              src={`/images/avatars/colors/${colors[colorIndex]}.svg`}
              alt="Avatar base color"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Eyes - smaller and higher positioning */}
          <div className="absolute" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '55%' }}>
            <img 
              src={`/images/avatars/eyes/${eyes[eyesIndex]}.svg`}
              alt="Avatar eyes"
              className="w-full h-auto"
            />
          </div>
          
          {/* Mouth - smaller and lower positioning */}
          <div className="absolute" style={{ bottom: '6%', left: '50%', transform: 'translateX(-50%)', width: '40%' }}>
            <img 
              src={`/images/avatars/mouths/${mouths[mouthIndex]}.svg`}
              alt="Avatar mouth"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Right arrows */}
        <div className="flex flex-col gap-4">
          <button 
            className="w-8 h-8 flex items-center justify-center bg-black rounded-sm hover:bg-gray-800"
            onClick={handleNextColor}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center bg-black rounded-sm hover:bg-gray-800"
            onClick={handleNextEyes}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center bg-black rounded-sm hover:bg-gray-800"
            onClick={handleNextMouth}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
      
      {/* Random button */}
      <div className="flex justify-center mt-6">
        <button 
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-medium py-2.5 px-5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          onClick={handleRandomAvatar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
          Randomize Avatar
        </button>
      </div>
    </div>
  )
}