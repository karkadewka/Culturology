"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cultures, type Culture } from "@/lib/data"
import { ArrowLeft, Plus, Trash } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"

export default function AdminPage() {
  const { toast } = useToast()
  const [newCulture, setNewCulture] = useState<Partial<Culture>>({
    id: "",
    name: "",
    region: "",
    location: "",
    population: "",
    language: "",
    languageFamily: "",
    religion: "",
    description: "",
    overview: "",
    image: "",
    cuisine: "",
    crafts: "",
    languageStatus: "",
    script: "",
  })
  const [allCultures, setAllCultures] = useState<Culture[]>(cultures)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewCulture((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNewCulture((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setImagePreview(result)
        setNewCulture((prev) => ({ ...prev, image: result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const generateId = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newCulture.name || !newCulture.region || !newCulture.description) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля: название, регион и описание",
        variant: "destructive",
      })
      return
    }

    // Генерируем ID из названия, если не указан
    const cultureId = newCulture.id || generateId(newCulture.name)

    const newCultureComplete = {
      ...newCulture,
      id: cultureId,
    } as Culture

    // Добавляем новую культуру в список
    setAllCultures((prev) => [...prev, newCultureComplete])

    // Сохраняем в localStorage для демонстрации
    const savedCultures = JSON.parse(localStorage.getItem("cultures") || "[]")
    localStorage.setItem("cultures", JSON.stringify([...savedCultures, newCultureComplete]))

    toast({
      title: "Культура добавлена",
      description: `Культура "${newCulture.name}" успешно добавлена в базу данных`,
    })

    // Сбрасываем форму
    setNewCulture({
      id: "",
      name: "",
      region: "",
      location: "",
      population: "",
      language: "",
      languageFamily: "",
      religion: "",
      description: "",
      overview: "",
      image: "",
      cuisine: "",
      crafts: "",
      languageStatus: "",
      script: "",
    })
    setImagePreview(null)
  }

  const handleDelete = (id: string) => {
    setAllCultures((prev) => prev.filter((culture) => culture.id !== id))

    // Обновляем localStorage
    const savedCultures = JSON.parse(localStorage.getItem("cultures") || "[]")
    localStorage.setItem("cultures", JSON.stringify(savedCultures.filter((c: Culture) => c.id !== id)))

    toast({
      title: "Культура удалена",
      description: `Культура с ID "${id}" успешно удалена из базы данных`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Button asChild variant="ghost" className="mr-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться на главную
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Панель администратора</h1>
      </div>

      <Tabs defaultValue="add">
        <TabsList className="mb-6">
          <TabsTrigger value="add">Добавить культуру</TabsTrigger>
          <TabsTrigger value="manage">Управление культурами</TabsTrigger>
        </TabsList>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Добавить новую культуру</CardTitle>
              <CardDescription>
                Заполните форму ниже, чтобы добавить новую культуру в базу данных. Поля, отмеченные звездочкой (*),
                обязательны для заполнения.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">
                        Название культуры <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={newCulture.name}
                        onChange={handleChange}
                        placeholder="Например: Ацтеки"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="id">ID (генерируется автоматически, если не указан)</Label>
                      <Input
                        id="id"
                        name="id"
                        value={newCulture.id}
                        onChange={handleChange}
                        placeholder="например: aztecs"
                      />
                    </div>

                    <div>
                      <Label htmlFor="region">
                        Регион <span className="text-red-500">*</span>
                      </Label>
                      <Select value={newCulture.region} onValueChange={(value) => handleSelectChange("region", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите регион" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Восточная Европа">Восточная Европа</SelectItem>
                          <SelectItem value="Западная Европа">Западная Европа</SelectItem>
                          <SelectItem value="Северная Европа">Северная Европа</SelectItem>
                          <SelectItem value="Южная Европа">Южная Европа</SelectItem>
                          <SelectItem value="Восточная Азия">Восточная Азия</SelectItem>
                          <SelectItem value="Южная Азия">Южная Азия</SelectItem>
                          <SelectItem value="Юго-Восточная Азия">Юго-Восточная Азия</SelectItem>
                          <SelectItem value="Центральная Азия">Центральная Азия</SelectItem>
                          <SelectItem value="Ближний Восток">Ближний Восток</SelectItem>
                          <SelectItem value="Северная Африка">Северная Африка</SelectItem>
                          <SelectItem value="Восточная Африка">Восточная Африка</SelectItem>
                          <SelectItem value="Западная Африка">Западная Африка</SelectItem>
                          <SelectItem value="Южная Африка">Южная Африка</SelectItem>
                          <SelectItem value="Северная Америка">Северная Америка</SelectItem>
                          <SelectItem value="Центральная Америка">Центральная Америка</SelectItem>
                          <SelectItem value="Южная Америка">Южная Америка</SelectItem>
                          <SelectItem value="Океания">Океания</SelectItem>
                          <SelectItem value="Арктика">Арктика</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location">Основная территория</Label>
                      <Input
                        id="location"
                        name="location"
                        value={newCulture.location}
                        onChange={handleChange}
                        placeholder="Например: Мексика, Гватемала"
                      />
                    </div>

                    <div>
                      <Label htmlFor="population">Численность населения</Label>
                      <Input
                        id="population"
                        name="population"
                        value={newCulture.population}
                        onChange={handleChange}
                        placeholder="Например: около 5 миллионов"
                      />
                    </div>

                    <div>
                      <Label htmlFor="language">Язык</Label>
                      <Input
                        id="language"
                        name="language"
                        value={newCulture.language}
                        onChange={handleChange}
                        placeholder="Например: науатль"
                      />
                    </div>

                    <div>
                      <Label htmlFor="languageFamily">Языковая семья</Label>
                      <Input
                        id="languageFamily"
                        name="languageFamily"
                        value={newCulture.languageFamily}
                        onChange={handleChange}
                        placeholder="Например: юто-ацтекская"
                      />
                    </div>

                    <div>
                      <Label htmlFor="religion">Религия</Label>
                      <Input
                        id="religion"
                        name="religion"
                        value={newCulture.religion}
                        onChange={handleChange}
                        placeholder="Например: традиционные верования, католицизм"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">
                        Краткое описание <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={newCulture.description}
                        onChange={handleChange}
                        placeholder="Краткое описание культуры (1-2 предложения)"
                        required
                        rows={2}
                      />
                    </div>

                    <div>
                      <Label htmlFor="overview">Общая информация</Label>
                      <Textarea
                        id="overview"
                        name="overview"
                        value={newCulture.overview}
                        onChange={handleChange}
                        placeholder="Подробное описание культуры"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="cuisine">Кухня</Label>
                      <Input
                        id="cuisine"
                        name="cuisine"
                        value={newCulture.cuisine}
                        onChange={handleChange}
                        placeholder="Основные продукты и блюда"
                      />
                    </div>

                    <div>
                      <Label htmlFor="crafts">Ремесла</Label>
                      <Input
                        id="crafts"
                        name="crafts"
                        value={newCulture.crafts}
                        onChange={handleChange}
                        placeholder="Традиционные ремесла и искусства"
                      />
                    </div>

                    <div>
                      <Label htmlFor="image">Изображение</Label>
                      <Input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mb-2"
                      />
                      <Input
                        id="imageUrl"
                        name="image"
                        value={
                          typeof newCulture.image === "string" && !newCulture.image.startsWith("data:")
                            ? newCulture.image
                            : ""
                        }
                        onChange={handleChange}
                        placeholder="Или укажите URL изображения"
                      />
                      {imagePreview && (
                        <div className="mt-2 relative h-40 w-full">
                          <Image
                            src={imagePreview || "/placeholder.svg"}
                            alt="Предпросмотр"
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Добавить культуру
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Управление культурами</CardTitle>
              <CardDescription>
                Здесь вы можете просматривать, редактировать и удалять существующие культуры.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allCultures.map((culture) => (
                  <div key={culture.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden mr-4">
                        <Image
                          src={culture.image || "/placeholder.svg?height=48&width=48"}
                          alt={culture.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{culture.name}</h3>
                        <p className="text-sm text-muted-foreground">{culture.region}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link href={`/culture/${culture.id}`}>Просмотр</Link>
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(culture.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
