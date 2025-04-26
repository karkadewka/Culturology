"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Layers, ZoomIn, ZoomOut } from "lucide-react"
import Image from "next/image"

export default function MapPage() {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Функция увеличения масштаба
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3))
  }

  // Функция уменьшения масштаба
  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5))
  }

  // Обработчики для перетаскивания карты
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-80 border-r bg-background p-4 overflow-y-auto hidden md:block">
          <h2 className="font-semibold text-lg mb-4">Настройки карты</h2>

          <Tabs defaultValue="layers">
            <TabsList className="w-full">
              <TabsTrigger value="layers" className="flex-1">
                Слои
              </TabsTrigger>
              <TabsTrigger value="filters" className="flex-1">
                Фильтры
              </TabsTrigger>
              <TabsTrigger value="info" className="flex-1">
                Информация
              </TabsTrigger>
            </TabsList>

            <TabsContent value="layers" className="space-y-4 mt-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="layer-population" defaultChecked />
                  <Label htmlFor="layer-population">Плотность населения</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="layer-language" defaultChecked />
                  <Label htmlFor="layer-language">Языковые группы</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="layer-religion" />
                  <Label htmlFor="layer-religion">Религии</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="layer-historical" />
                  <Label htmlFor="layer-historical">Исторические границы</Label>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Базовая карта</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Стандартная"
                      className="mr-2"
                    />
                    Стандартная
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Спутник"
                      className="mr-2"
                    />
                    Спутник
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Рельеф"
                      className="mr-2"
                    />
                    Рельеф
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Темная"
                      className="mr-2"
                    />
                    Темная
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Прозрачность слоев</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <Label htmlFor="opacity-population">Плотность населения</Label>
                      <span className="text-sm">70%</span>
                    </div>
                    <Slider id="opacity-population" defaultValue={[70]} max={100} step={1} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <Label htmlFor="opacity-language">Языковые группы</Label>
                      <span className="text-sm">80%</span>
                    </div>
                    <Slider id="opacity-language" defaultValue={[80]} max={100} step={1} />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="filters" className="space-y-4 mt-4">
              <div>
                <h3 className="font-medium mb-2">Регионы</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="region-europe" defaultChecked />
                    <Label htmlFor="region-europe">Европа</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="region-asia" defaultChecked />
                    <Label htmlFor="region-asia">Азия</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="region-africa" defaultChecked />
                    <Label htmlFor="region-africa">Африка</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="region-namerica" defaultChecked />
                    <Label htmlFor="region-namerica">Северная Америка</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="region-samerica" defaultChecked />
                    <Label htmlFor="region-samerica">Южная Америка</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="region-australia" defaultChecked />
                    <Label htmlFor="region-australia">Австралия и Океания</Label>
                  </div>
                </div>
              </div>

              <Separator />

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
                <h3 className="font-medium mb-2">Языковые семьи</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-indoeuropean" defaultChecked />
                    <Label htmlFor="lang-indoeuropean">Индоевропейская</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-sinotibetan" defaultChecked />
                    <Label htmlFor="lang-sinotibetan">Сино-тибетская</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-afroasiatic" defaultChecked />
                    <Label htmlFor="lang-afroasiatic">Афразийская</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-austronesian" defaultChecked />
                    <Label htmlFor="lang-austronesian">Австронезийская</Label>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-2">Применить фильтры</Button>
            </TabsContent>

            <TabsContent value="info" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">О карте</h3>
                  <p className="text-sm text-muted-foreground">
                    Интерактивная карта мира позволяет исследовать географическое распределение различных культур и
                    народов. Используйте инструменты навигации для перемещения по карте и изменения масштаба.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Как пользоваться</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                    <li>Используйте кнопки масштабирования для приближения и отдаления</li>
                    <li>Перетаскивайте карту, чтобы перемещаться по ней</li>
                    <li>Выбирайте различные слои для отображения дополнительной информации</li>
                    <li>Применяйте фильтры для поиска конкретных культур и регионов</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Текущий масштаб</h3>
                  <p className="text-sm text-muted-foreground">{Math.round(scale * 100)}% от исходного размера</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Map */}
        <div className="flex-1 relative overflow-hidden">
          <div
            className="absolute inset-0 cursor-grab"
            style={{
              overflow: "hidden",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transformOrigin: "center",
                transition: isDragging ? "none" : "transform 0.3s ease-out",
              }}
            >
              <Image
                src="https://sjc.microlink.io/lOzOuJVDbVfXlhnAi_ARTpiv6bmeFly9vC3i4Ifq-fQGRoPkeUMFcCyPAp00OCznPvy0eyurL_Fk-fsNwTUgMw.jpeg"
                fill
                alt="Карта культур мира"
                className="object-contain"
                priority
                draggable="false"
              />
            </div>
          </div>

          {/* Map controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm shadow-md"
              onClick={zoomIn}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm shadow-md"
              onClick={zoomOut}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm shadow-md">
              <Layers className="h-4 w-4" />
            </Button>
          </div>

          {/* Scale indicator */}
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm">
            {Math.round(scale * 100)}%
          </div>

          {/* Mobile controls */}
          <div className="absolute bottom-4 left-4 md:hidden">
            <Button variant="outline" className="bg-background/80 backdrop-blur-sm shadow-md">
              Настройки карты
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
