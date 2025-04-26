import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Globe, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6" />
              <span className="font-bold">Культуры мира</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Энциклопедия культур и народов мира. Исследуйте богатое разнообразие традиций, языков и обычаев.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Разделы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-muted-foreground hover:text-foreground">
                  Каталог культур
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-muted-foreground hover:text-foreground">
                  Интерактивная карта
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-muted-foreground hover:text-foreground">
                  Статьи
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  О проекте
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Ресурсы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                  Библиотека
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-muted-foreground hover:text-foreground">
                  Глоссарий терминов
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-foreground">
                  Партнеры
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Подписка на новости</h3>
            <p className="mb-4 text-sm text-muted-foreground">Получайте уведомления о новых статьях и обновлениях</p>
            <div className="flex gap-2">
              <Input placeholder="Ваш email" type="email" />
              <Button size="sm" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Культуры мира. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Условия использования
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
