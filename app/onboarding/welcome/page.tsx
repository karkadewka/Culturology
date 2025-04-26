"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function WelcomePage() {
  const router = useRouter()

  return (
    <div className="app-container">
      <div className="onboarding-screen">
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-bold text-heritage-primary mt-8">Welcome</h1>

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
            Our app is a platform for discovering and exploring cultural heritage, offering an immersive experience of
            different regions around India.
          </p>
        </div>

        <div className="nav-buttons">
          <div></div>
          <Button
            onClick={() => router.push("/onboarding/about")}
            className="bg-transparent hover:bg-transparent text-heritage-primary"
          >
            NEXT <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
