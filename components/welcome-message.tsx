"use client"

import { useEffect, useState } from "react"

export default function WelcomeMessage() {
  const [visible, setVisible] = useState(true)
  const [text, setText] = useState("")
  const fullText = "Добро пожаловать в мир культур и традиций!"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.substring(0, index))
      index++

      if (index > fullText.length) {
        clearInterval(timer)

        // Скрываем сообщение через 1 секунду после завершения анимации
        setTimeout(() => {
          setVisible(false)
        }, 1000)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 backdrop-blur-md">
      <div className="text-center p-8 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{text}</h1>
        <p className="text-white/70 text-lg">Исследуйте богатство человеческого наследия</p>
      </div>
    </div>
  )
}
