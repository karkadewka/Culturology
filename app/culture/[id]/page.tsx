import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Globe, MapPin, Users, Calendar, BookOpen, Share2, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cultures } from "@/lib/data"
import { notFound } from "next/navigation"

export default function CulturePage({ params }: { params: { id: string } }) {
  const culture = cultures.find((c) => c.id === params.id)

  if (!culture) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{culture.name}</h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <Badge variant="outline" className="flex items-center">
                <MapPin className="mr-1 h-3 w-3" />
                {culture.region}
              </Badge>
              <Badge variant="outline" className="flex items-center">
                <Users className="mr-1 h-3 w-3" />
                {culture.population} человек
              </Badge>
              <Badge variant="outline" className="flex items-center">
                <Globe className="mr-1 h-3 w-3" />
                {culture.language}
              </Badge>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
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
                        : culture.image || "/placeholder.svg?height=400&width=600"
              }
              fill
              alt={culture.name}
              className="object-cover"
            />
          </div>

          <div className="flex gap-2 mb-6">
            <Button variant="outline" size="sm" className="flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Поделиться
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <Bookmark className="mr-2 h-4 w-4" />
              Сохранить
            </Button>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="traditions">Традиции</TabsTrigger>
              <TabsTrigger value="language">Язык</TabsTrigger>
              <TabsTrigger value="history">История</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Общая информация</h2>
                <p className="mb-4">{culture.description}</p>
                <p className="mb-4">
                  {culture.name} — {culture.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Расположение и численность</h3>
                <p className="mb-4">
                  Основная территория проживания: {culture.location}. Общая численность составляет около{" "}
                  {culture.population} человек.
                </p>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
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
                              : "/placeholder.svg?height=300&width=600"
                    }
                    fill
                    alt={`Карта расселения ${culture.name}`}
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Современное положение</h3>
                <p className="mb-4">
                  В настоящее время {culture.name} сохраняют свою культурную идентичность, несмотря на процессы
                  глобализации. Многие представители этого народа продолжают следовать традиционному укладу жизни, хотя
                  и с адаптацией к современным условиям.
                </p>
                <p>
                  Правительство {culture.location.split(",")[1] || "региона"} реализует программы по сохранению
                  культурного наследия {culture.name}, включая поддержку языка, традиционных ремесел и фольклора.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="traditions" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Традиции и обычаи</h2>
                <p className="mb-4">
                  Культура {culture.name} богата уникальными традициями и обычаями, которые формировались на протяжении
                  многих веков и отражают их мировоззрение, ценности и образ жизни.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Праздники и ритуалы</h3>
                    <p>
                      Традиционный календарь {culture.name} включает множество праздников, связанных с
                      сельскохозяйственным циклом, сменой времен года и важными историческими событиями. Особое место
                      занимают ритуалы перехода, отмечающие ключевые моменты в жизни человека: рождение,
                      совершеннолетие, свадьба, смерть.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Традиционная одежда</h3>
                    <p>
                      Национальный костюм {culture.name} отличается яркими цветами и уникальными элементами декора,
                      которые часто имеют символическое значение. Традиционная одежда до сих пор используется во время
                      праздников и важных церемоний.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Кухня</h3>
                    <p>
                      Кулинарные традиции {culture.name} формировались под влиянием географических условий и доступных
                      продуктов. Основу рациона составляют блюда из {culture.cuisine || "местных продуктов"},
                      приготовленные по рецептам, передающимся из поколения в поколение.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Ремесла и искусство</h3>
                    <p>
                      {culture.name} славятся своими традиционными ремеслами, включая{" "}
                      {culture.crafts || "различные виды рукоделия"}. Эти навыки передаются от мастеров к ученикам,
                      сохраняя уникальные техники и художественные стили.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden mt-4">
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
                            : "/placeholder.svg?height=300&width=600"
                  }
                  fill
                  alt={`Традиционный праздник ${culture.name}`}
                  className="object-cover"
                />
              </div>
            </TabsContent>

            <TabsContent value="language" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Язык и лингвистические особенности</h2>
                <p className="mb-4">
                  Язык {culture.name} относится к {culture.languageFamily || "языковой семье"} и имеет богатую историю
                  развития. Он является важнейшим элементом культурной идентичности народа и хранителем его духовного
                  наследия.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Лингвистическая классификация</h3>
                    <p>
                      Язык {culture.name} принадлежит к {culture.languageFamily || "языковой семье"} и имеет несколько
                      диалектов, распространенных в разных регионах проживания этого народа. Письменность основана на{" "}
                      {culture.script || "алфавите"}.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Современное состояние</h3>
                    <p>
                      В настоящее время язык {culture.name} имеет статус{" "}
                      {culture.languageStatus || "официального/регионального/местного"} языка. Он изучается в школах,
                      используется в СМИ и литературе. Существуют программы по сохранению и развитию языка.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Примеры слов и выражений</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left pb-2">На языке {culture.name}</th>
                        <th className="text-left pb-2">Перевод на русский</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">Пример слова 1</td>
                        <td>Значение 1</td>
                      </tr>
                      <tr>
                        <td className="py-1">Пример слова 2</td>
                        <td>Значение 2</td>
                      </tr>
                      <tr>
                        <td className="py-1">Пример выражения</td>
                        <td>Перевод выражения</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Историческая справка</h2>
                <p className="mb-4">
                  История {culture.name} насчитывает много веков и тесно связана с историей региона {culture.region}. На
                  протяжении своего существования этот народ пережил периоды расцвета и упадка, взаимодействовал с
                  соседними культурами и адаптировался к меняющимся условиям.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="h-full w-0.5 bg-border mx-auto mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-semibold">Древний период</h3>
                    <p className="text-muted-foreground">III-I тысячелетия до н.э.</p>
                    <p className="mt-2">
                      Формирование этнической группы {culture.name} на территории современного{" "}
                      {culture.location.split(",")[1] || "региона"}. Развитие первых поселений и становление
                      традиционного уклада жизни.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="h-full w-0.5 bg-border mx-auto mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-semibold">Средневековый период</h3>
                    <p className="text-muted-foreground">V-XV века</p>
                    <p className="mt-2">
                      Формирование государственности, развитие торговых и культурных связей с соседними народами.
                      Распространение религиозных верований, оказавших значительное влияние на культуру {culture.name}.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="h-full w-0.5 bg-border mx-auto mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-semibold">Новое время</h3>
                    <p className="text-muted-foreground">XVI-XIX века</p>
                    <p className="mt-2">
                      Период колонизации и интеграции в состав крупных государств. Трансформация традиционного образа
                      жизни под влиянием внешних факторов. Начало национального возрождения в конце периода.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <Calendar className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Современный период</h3>
                    <p className="text-muted-foreground">XX-XXI века</p>
                    <p className="mt-2">
                      Формирование современной идентичности {culture.name}, борьба за культурные и политические права.
                      Развитие образования, науки и искусства. Интеграция в глобальное сообщество при сохранении
                      культурной самобытности.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border p-6 sticky top-4">
            <h2 className="font-semibold text-xl mb-4">Краткая информация</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-muted-foreground">Название</h3>
                <p>{culture.name}</p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-muted-foreground">Регион</h3>
                <p>{culture.region}</p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-muted-foreground">Основная территория</h3>
                <p>{culture.location}</p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-muted-foreground">Численность</h3>
                <p>{culture.population} человек</p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-muted-foreground">Язык</h3>
                <p>{culture.language}</p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-muted-foreground">Языковая семья</h3>
                <p>{culture.languageFamily || "Информация отсутствует"}</p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-muted-foreground">Религия</h3>
                <p>{culture.religion || "Информация отсутствует"}</p>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/map?culture=${culture.id}">Показать на карте</Link>
              </Button>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">Похожие культуры</h3>
              <div className="space-y-3">
                {cultures
                  .filter((c) => c.id !== culture.id)
                  .slice(0, 3)
                  .map((relatedCulture) => (
                    <Link href={`/culture/${relatedCulture.id}`} key={relatedCulture.id}>
                      <div className="flex items-center gap-3 group">
                        <div className="relative h-12 w-12 rounded-md overflow-hidden">
                          <Image
                            src={
                              relatedCulture.id === "slavs"
                                ? "https://mpsc.ru/uploads/posts/2020-01/1579649665_1397095824_drevnie-slavyane.png"
                                : relatedCulture.id === "maya"
                                  ? "https://techno.bigmir.net/i/59/11/19/1/5911191/7d82a0acc0d5dbda6957c9ea601bcfca-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_400.jpg"
                                  : relatedCulture.id === "japanese"
                                    ? "https://s9.travelask.ru/uploads/post/000/009/664/main_image/full-a1d07a1d8ff139e31b5a6e91ba24fb56.jpg"
                                    : relatedCulture.id === "maasai"
                                      ? "https://avatars.mds.yandex.net/get-vertis-journal/4220003/4_3.jpg_1709481276538/orig"
                                      : relatedCulture.image || "/placeholder.svg?height=48&width=48"
                            }
                            fill
                            alt={relatedCulture.name}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {relatedCulture.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{relatedCulture.region}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">Источники</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <p>Этнографическая энциклопедия, 2020</p>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <p>Народы мира: историко-этнографический справочник, 2018</p>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <p>Культурное наследие: электронная база данных, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
