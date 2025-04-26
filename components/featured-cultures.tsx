import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cultures } from "@/lib/data"

export default function FeaturedCultures() {
  // Выбираем первые 4 культуры для отображения
  const featuredCultures = cultures.slice(0, 4)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredCultures.map((culture) => (
        <Card key={culture.id} className="overflow-hidden flex flex-col">
          <div className="relative h-48">
            <Image
              src={
                culture.id === "slavs"
                  ? "https://mpsc.ru/uploads/posts/2020-01/1579649665_1397095824_drevnie-slavyane.png"
                  : culture.id === "maya"
                    ? "https://techno.bigmir.net/i/59/11/19/1/5911191/7d82a0acc0d5dbda6957c9ea601bcfca-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_400.jpg"
                    : culture.id === "japanese"
                      ? "https://s9.travelask.ru/uploads/post/000/009/664/main_image/full-a1d07a1d8ff139e31b5a6e91ba24fb56.jpg"
                      : culture.id === "maasai"
                        ? "https://avatars.mds.yandex.net/get-vertis-journal/4220003/4_3.jpg_1709481276538/orig"
                        : culture.image || "/placeholder.svg?height=200&width=300"
              }
              fill
              alt={culture.name}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <Badge className="bg-primary/80">{culture.region}</Badge>
            </div>
          </div>
          <CardContent className="flex-1 pt-4">
            <h3 className="font-bold text-lg mb-2">{culture.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="mr-1 h-4 w-4" />
              {culture.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="mr-1 h-4 w-4" />
              {culture.population} человек
            </div>
            <p className="mt-2 text-sm line-clamp-3">{culture.description}</p>
          </CardContent>
          <CardFooter className="pt-0">
            <Button asChild variant="outline" className="w-full">
              <Link href={`/culture/${culture.id}`}>Подробнее</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
