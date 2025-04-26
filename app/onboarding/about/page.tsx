"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="app-container">
      <div className="onboarding-screen">
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-bold text-heritage-primary mt-8">About Us</h1>

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
            The Heritage team created with the aim of promoting cultural tourism in India and providing a platform for
            people to explore and learn more.
          </p>
        </div>

        <div className="nav-buttons">
          <Button
            onClick={() => router.push("/onboarding/welcome")}
            className="bg-transparent hover:bg-transparent text-heritage-primary"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> PREVIOUS
          </Button>

          <Button
            onClick={() => router.push("/onboarding/get-started")}
            className="bg-transparent hover:bg-transparent text-heritage-primary"
          >
            NEXT <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
