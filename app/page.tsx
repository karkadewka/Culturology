"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, MapPin, Search, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FeaturedCultures from "@/components/featured-cultures"
import SearchBar from "@/components/search-bar"
import { useEffect, useState } from "react"
import CustomCursor from "@/components/custom-cursor"
import WelcomeMessage from "@/components/welcome-message"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      {showWelcome && <WelcomeMessage />}

      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10"></div>
          <Image
            src="https://broadview.org/wp-content/uploads/2017/03/feature-culture-appropriation-1200x0-c-default.jpg"
            width={1200}
            height={500}
            alt="Разнообразие культур мира"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Откройте для себя культуры мира</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Исследуйте богатое разнообразие народов, их традиции, языки и обычаи в нашей интерактивной энциклопедии
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/catalog">Начать исследование</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm">
                <Link href="/map">Интерактивная карта</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="mb-12">
          <div className="bg-muted rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Найдите интересующую вас культуру</h2>
            <SearchBar />
            <div className="mt-4 text-sm text-muted-foreground">
              Популярные запросы:{" "}
              <Link href="/catalog?q=славяне" className="text-primary hover:underline">
                славяне
              </Link>
              ,{" "}
              <Link href="/catalog?q=майя" className="text-primary hover:underline">
                майя
              </Link>
              ,{" "}
              <Link href="/catalog?q=японцы" className="text-primary hover:underline">
                японцы
              </Link>
              ,{" "}
              <Link href="/catalog?q=масаи" className="text-primary hover:underline">
                масаи
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Cultures */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Культуры недели</h2>
            <Button variant="ghost" asChild>
              <Link href="/catalog" className="flex items-center">
                Все культуры <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <FeaturedCultures />
        </section>

        {/* Quick Access Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Быстрый доступ к разделам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-primary" /> Регионы мира
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Изучайте культуры по географическим регионам</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full justify-between">
                  <Link href="/regions">
                    Перейти <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" /> Языковые семьи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Классификация народов по языковым группам</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full justify-between">
                  <Link href="/languages">
                    Перейти <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" /> Интерактивная карта
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Визуализация расположения народов на карте мира</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full justify-between">
                  <Link href="/map">
                    Перейти <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Search className="mr-2 h-5 w-5 text-primary" /> Расширенный поиск
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Детальный поиск с множеством фильтров</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full justify-between">
                  <Link href="/search">
                    Перейти <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* About Project */}
        <section className="mb-12">
          <div className="bg-muted rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">О проекте "Культуры мира"</h2>
                <p className="mb-4">
                  Наш проект создан для сохранения и популяризации культурного наследия народов мира. Мы собираем и
                  систематизируем информацию об этнических группах, их истории, традициях, языках и современном
                  положении.
                </p>
                <p className="mb-4">
                  База данных постоянно пополняется новыми материалами, собранными из достоверных источников и
                  проверенными экспертами в области этнографии и культурологии.
                </p>
                <Button asChild className="w-fit">
                  <Link href="/about">Подробнее о проекте</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="https://artlogic-res.cloudinary.com/w_1800,h_1320,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/jimmynelsonstudio/images/view/81c82a99eece38248786e97f53d293b5p/artgallery-jimmynelson-jimmy-nelson.png"
                  fill
                  alt="О проекте"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Последние статьи</h2>
            <Button variant="ghost" asChild>
              <Link href="/articles" className="flex items-center">
                Все статьи <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Исчезающие языки: как сохранить лингвистическое разнообразие</CardTitle>
                <CardDescription>12 апреля 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Каждые две недели в мире исчезает один язык. Узнайте о проектах и инициативах, направленных на
                  сохранение языкового наследия малочисленных народов.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full justify-between">
                  <Link href="/articles/1">
                    Читать статью <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Традиционные ремесла в современном мире</CardTitle>
                <CardDescription>5 апреля 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Как древние техники ремесленного производства адаптируются к современным реалиям и находят новую жизнь
                  в эпоху цифровых технологий.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full justify-between">
                  <Link href="/articles/2">
                    Читать статью <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Кулинарные традиции как отражение культурной идентичности</CardTitle>
                <CardDescription>28 марта 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Исследование связи между национальной кухней и историческим развитием народов. Как пищевые привычки
                  формируют и отражают культурные особенности.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full justify-between">
                  <Link href="/articles/3">
                    Читать статью <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
