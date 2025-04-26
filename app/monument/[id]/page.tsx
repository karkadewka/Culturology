"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowLeft, Bookmark, Heart, MapPin, Share2, Star } from "lucide-react"

export default function MonumentDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  return (
    <div className="app-container">
      <div className="flex flex-col h-full bg-heritage-background">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=300&width=390"
            alt="Monument"
            width={390}
            height={300}
            className="w-full h-64 object-cover"
          />
          <Button
            onClick={() => router.back()}
            variant="ghost"
            size="icon"
            className="absolute top-4 left-4 bg-white/80 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 rounded-full">
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-4 flex-1 overflow-auto">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">The Qutub Minar</h1>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-[#d2a24c] fill-[#d2a24c]" />
              <span className="ml-1 text-sm">4.8</span>
            </div>
          </div>

          <div className="flex items-center mt-2 text-sm text-heritage-primary">
            <MapPin className="w-3 h-3 mr-1" />
            <span>Mehrauli, Delhi, India</span>
          </div>

          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="sm" className="flex-1">
              <Heart className="w-4 h-4 mr-2" />
              Like
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">About Place</h2>
            <p className="text-sm text-heritage-primary">
              The Qutub Minar, also spelled as Qutb Minar, is a minaret and "victory tower" that forms part of the Qutb
              complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi, India. The height of Qutub Minar is
              72.5 meters, making it the tallest minaret in the world built of bricks.
            </p>
            <p className="text-sm text-heritage-primary mt-2">
              The tower is famous for its intricate carvings, verses from the Quran, and its historical significance as
              it represents the beginning of Islamic rule in India.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">History</h2>
            <p className="text-sm text-heritage-primary">
              Construction of the Qutub Minar was begun by Qutb-ud-din Aibak, the first ruler of the Delhi Sultanate, in
              1199 AD. The construction was later continued by his successor, Iltutmish, and finally completed by Firoz
              Shah Tughlaq.
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-heritage-muted">
          <Button className="w-full bg-[#b96936] hover:bg-[#a95926]">Book a Tour</Button>
        </div>
      </div>
    </div>
  )
}
