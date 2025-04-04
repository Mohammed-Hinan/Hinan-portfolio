'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorRingRef.current) {
        // Simple direct positioning for both cursors
        const x = e.clientX
        const y = e.clientY
        
        cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        cursorRingRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        
        // Check if cursor is over a clickable element
        const target = e.target as HTMLElement
        const isClickable = 
          target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button') ||
          window.getComputedStyle(target).cursor === 'pointer'
        
        setIsPointer(isClickable)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Add body class to hide default cursor
    document.body.classList.add('custom-cursor-enabled')

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.body.classList.remove('custom-cursor-enabled')
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  // Don't render cursor on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null
  }

  return (
    <>
      <div 
        ref={cursorRingRef}
        className="custom-cursor-ring"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isPointer ? '40px' : '30px',
          height: isPointer ? '40px' : '30px',
          borderColor: isClicking ? 'rgba(250, 233, 67, 0.8)' : 'rgba(250, 233, 67, 0.5)',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, opacity 0.2s'
        }}
      />
      <div 
        ref={cursorRef}
        className="custom-cursor"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isPointer ? '5px' : '8px',
          height: isPointer ? '5px' : '8px',
          backgroundColor: isClicking ? 'rgba(250, 233, 67, 1)' : 'rgba(250, 233, 67, 0.8)',
          transition: 'width 0.1s, height 0.1s, background-color 0.2s, opacity 0.2s'
        }}
      />

      <style jsx global>{`
        .custom-cursor-enabled {
          cursor: none !important;
        }
        
        .custom-cursor-enabled a,
        .custom-cursor-enabled button,
        .custom-cursor-enabled [role="button"],
        .custom-cursor-enabled [class*="btn"],
        .custom-cursor-enabled .clickable {
          cursor: none !important;
        }
        
        .custom-cursor-ring {
          position: fixed;
          border: 2px solid rgba(250, 233, 67, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          top: 0;
          left: 0;
          will-change: transform;
        }
        
        .custom-cursor {
          position: fixed;
          background-color: rgba(250, 233, 67, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          top: 0;
          left: 0;
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          .custom-cursor-enabled,
          .custom-cursor-enabled * {
            cursor: auto !important;
          }
          
          .custom-cursor-ring,
          .custom-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
