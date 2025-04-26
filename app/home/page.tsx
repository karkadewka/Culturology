"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Home, Search, Bookmark, User, MapPin } from "lucide-react"

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="app-container">
      <div className="home-screen">
        <div className="search-bar">
          <Search className="w-4 h-4 mr-2" />
          <span>Search monuments, places...</span>
        </div>

        <div className="category-tabs">
          <div className="category-tab active">All</div>
          <div className="category-tab">Monuments</div>
          <div className="category-tab">Temples</div>
          <div className="category-tab">Museums</div>
          <div className="category-tab">Forts</div>
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
              <div className="monument-title">Taj Mahal</div>
              <div className="monument-location">
                <MapPin className="w-3 h-3" /> Agra, India
              </div>
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
              <div className="monument-title">Hawa Mahal</div>
              <div className="monument-location">
                <MapPin className="w-3 h-3" /> Jaipur, India
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-nav">
          <div className="nav-item">
            <Home className="w-5 h-5 text-heritage-primary" />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </div>
          <div className="nav-item">
            <Bookmark className="w-5 h-5" />
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
