import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/search-bar"
import { cultures } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Каталог культур</h1>

      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border p-4 sticky top-4">
            <h2 className="font-semibold text-lg mb-4">Фильтры</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Регион</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Все регионы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все регионы</SelectItem>
                    <SelectItem value="europe">Европа</SelectItem>
                    <SelectItem value="asia">Азия</SelectItem>
                    <SelectItem value="africa">Африка</SelectItem>
                    <SelectItem value="north-america">Северная Америка</SelectItem>
                    <SelectItem value="south-america">Южная Америка</SelectItem>
                    <SelectItem value="australia-oceania">Австралия и Океания</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Языковая семья</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Все языковые семьи" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все языковые семьи</SelectItem>
                    <SelectItem value="indo-european">Индоевропейская</SelectItem>
                    <SelectItem value="sino-tibetan">Сино-тибетская</SelectItem>
                    <SelectItem value="niger-congo">Нигеро-конголезская</SelectItem>
                    <SelectItem value="afroasiatic">Афразийская</SelectItem>
                    <SelectItem value="austronesian">Австронезийская</SelectItem>
                    <SelectItem value="dravidian">Дравидийская</SelectItem>
                    <SelectItem value="turkic">Тюркская</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Численность населения</h3>
                <div className="px-2">
                  <Slider defaultValue={[0, 100]} max={100} step={1} />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>0</span>
                    <span>100+ млн</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Особенности</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="traditional" />
                    <Label htmlFor="traditional">Традиционный образ жизни</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="endangered" />
                    <Label htmlFor="endangered">Исчезающие культуры</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nomadic" />
                    <Label htmlFor="nomadic">Кочевые народы</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="indigenous" />
                    <Label htmlFor="indigenous">Коренные народы</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <Button className="w-full">Применить фильтры</Button>
              <Button variant="outline" className="w-full">
                Сбросить
              </Button>
            </div>
          </div>
        </div>

        {/* Cultures Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground">Найдено: {cultures.length} культур</div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Сортировать:</span>
              <Select defaultValue="alphabetical">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="По алфавиту" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alphabetical">По алфавиту</SelectItem>
                  <SelectItem value="population-desc">По численности (убыв.)</SelectItem>
                  <SelectItem value="population-asc">По численности (возр.)</SelectItem>
                  <SelectItem value="region">По региону</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="grid" className="mb-4">
            <TabsList>
              <TabsTrigger value="grid">Сетка</TabsTrigger>
              <TabsTrigger value="list">Список</TabsTrigger>
            </TabsList>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cultures.map((culture) => (
                  <Card key={culture.id} className="overflow-hidden">
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
                    <CardHeader className="pb-2">
                      <CardTitle>{culture.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="mr-1 h-4 w-4" />
                        {culture.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        {culture.population} человек
                      </div>
                      <p className="mt-2 text-sm line-clamp-2">{culture.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/culture/${culture.id}`}>Подробнее</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list">
              <div className="space-y-4">
                {cultures.map((culture) => (
                  <Card key={culture.id}>
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-48 h-48 md:h-auto">
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
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <h3 className="text-xl font-bold">{culture.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-2">
                          <MapPin className="mr-1 h-4 w-4" />
                          {culture.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Users className="mr-1 h-4 w-4" />
                          {culture.population} человек
                        </div>
                        <Badge className="mt-2">{culture.region}</Badge>
                        <p className="mt-2">{culture.description}</p>
                        <Button asChild variant="outline" className="mt-4">
                          <Link href={`/culture/${culture.id}`}>Подробнее</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              ...
            </Button>
            <Button variant="outline" className="mx-1">
              10
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
