"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Home, Search, Bookmark, User, MapPin, ArrowLeft } from "lucide-react"

export default function SavedPage() {
  const router = useRouter()

  return (
    <div className="app-container">
      <div className="home-screen">
        <div className="flex items-center p-4">
          <Button onClick={() => router.back()} variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Saved places</h1>
        </div>

        <div className="flex-1 overflow-auto pb-16">
          <div className="monument-card">
            <Image
              src="/placeholder.svg?height=200&width=350"
              alt="Monument"
              width={350}
              height={200}
              className="monument-image"
            />
            <div className="monument-info">
              <div className="monument-title">Qutub Minar</div>
              <div className="monument-location">
                <MapPin className="w-3 h-3" /> Delhi, India
              </div>
              <p className="text-xs mt-2">
                The Qutub Minar is a minaret and victory tower located in Delhi, India. It is a UNESCO World Heritage
                Site.
              </p>
            </div>
          </div>

          <div className="monument-card">
            <Image
              src="/placeholder.svg?height=200&width=350"
              alt="Monument"
              width={350}
              height={200}
              className="monument-image"
            />
            <div className="monument-info">
              <div className="monument-title">Victoria Memorial Museum</div>
              <div className="monument-location">
                <MapPin className="w-3 h-3" /> Kolkata, India
              </div>
              <p className="text-xs mt-2">
                The Victoria Memorial is a large marble building in Kolkata, which was built between 1906 and 1921. It
                is dedicated to the memory of Queen Victoria.
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-nav">
          <div className="nav-item">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </div>
          <div className="nav-item">
            <Bookmark className="w-5 h-5 text-heritage-primary" />
            <span>Saved</span>
          </div>
          <div className="nav-item">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  )
}
