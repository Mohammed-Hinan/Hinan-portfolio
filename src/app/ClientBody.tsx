"use client"

import { useEffect, useState } from "react"

export default function ClientBody({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateCursorPosition)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {children}
    </>
  )
}
