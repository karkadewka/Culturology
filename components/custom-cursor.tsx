"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    // Скрываем стандартный курсор
    document.body.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)

      // Возвращаем стандартный курсор при размонтировании
      document.body.style.cursor = "auto"
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-primary/30 backdrop-blur-sm"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "30px",
          height: "30px",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out, width 0.2s, height 0.2s",
        }}
      />
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-primary"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.05s linear",
        }}
      />
    </>
  )
}
