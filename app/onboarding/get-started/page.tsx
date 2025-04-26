"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GetStartedPage() {
  const router = useRouter()

  return (
    <div className="app-container">
      <div className="onboarding-screen">
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-bold text-heritage-primary mt-8">Get Started</h1>

          <div className="mt-4 mb-8">
            <Image
              src="/placeholder.svg?height=200&width=350"
              alt="Heritage monument"
              width={350}
              height={200}
              className="w-full rounded-lg object-cover"
            />
          </div>

          <p className="text-sm text-heritage-primary">
            Let's get started! We'll guide you toward a journey of exploration as you discover the rich cultural
            heritage.
          </p>
        </div>

        <div className="nav-buttons">
          <Button
            onClick={() => router.push("/onboarding/about")}
            className="bg-transparent hover:bg-transparent text-heritage-primary"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> PREVIOUS
          </Button>

          <Button
            onClick={() => router.push("/auth/login")}
            className="bg-[#6f5643] hover:bg-[#5f4633] text-white px-6"
          >
            START <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
