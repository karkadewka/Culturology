"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Globe, Menu, Search, X, Settings } from "lucide-react"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span className="font-bold">Культуры мира</span>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Культуры мира</SheetTitle>
              <SheetDescription>Энциклопедия культур и народов мира</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Главная
              </Link>
              <Link href="/catalog" className="text-sm font-medium transition-colors hover:text-primary">
                Каталог культур
              </Link>
              <Link href="/map" className="text-sm font-medium transition-colors hover:text-primary">
                Интерактивная карта
              </Link>
              <Link href="/articles" className="text-sm font-medium transition-colors hover:text-primary">
                Статьи
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                О проекте
              </Link>
              <Link href="/admin" className="text-sm font-medium transition-colors hover:text-primary">
                Администрирование
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex md:hidden">
          <Globe className="h-6 w-6" />
          <span className="sr-only">Культуры мира</span>
        </Link>

        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Главная</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/catalog"
                        >
                          <Globe className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">Каталог культур</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Полный список народов и культур с возможностью поиска и фильтрации
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/catalog?region=europe"
                        >
                          <div className="text-sm font-medium leading-none">Европа</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Культуры европейского региона
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/catalog?region=asia"
                        >
                          <div className="text-sm font-medium leading-none">Азия</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Культуры азиатского региона
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/catalog?region=africa"
                        >
                          <div className="text-sm font-medium leading-none">Африка</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Культуры африканского континента
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/map" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Карта</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/articles" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Статьи</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>О проекте</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/admin" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Settings className="h-4 w-4 mr-1" /> Администрирование
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          {showSearch ? (
            <div className="flex items-center">
              <Input type="search" placeholder="Поиск культур..." className="w-[200px] md:w-[300px]" />
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Закрыть поиск</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Поиск</span>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
