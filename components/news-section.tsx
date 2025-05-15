"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Inauguration du projet HALYS RESIDENCE",
    excerpt: "Découvrez les moments forts de l'inauguration de notre dernier projet résidentiel de luxe à Casablanca.",
    date: "15 avril 2023",
    image: "/news-1.png",
    slug: "inauguration-halys-residence",
  },
  {
    id: "2",
    title: "Vizir Group remporte le prix d'excellence en architecture",
    excerpt: "Notre équipe a été récompensée pour son approche innovante et durable dans la conception architecturale.",
    date: "28 février 2023",
    image: "/news-2.png",
    slug: "prix-excellence-architecture",
  },
  {
    id: "3",
    title: "Lancement de notre nouveau service de marketing immobilier",
    excerpt:
      "Vizir Group élargit son offre avec un service complet de marketing immobilier pour valoriser vos projets.",
    date: "10 janvier 2023",
    image: "/news-3.png",
    slug: "nouveau-service-marketing-immobilier",
  },
]

export default function NewsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="vizir-section bg-secondary/90 backdrop-blur-sm">
      <div className={`space-y-4 ${inView ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="vizir-subheading">Actualités</h2>
        <div className="w-20 h-1 bg-primary"></div>
      </div>

      {newsItems.map((item, index) => (
        <Card
          key={item.id}
          className={`vizir-card mt-8 sm:mt-12 ${inView ? `animate-slide-up stagger-${index + 1}` : "opacity-0"}`}
        >
          <div className="vizir-card-image">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
            />
          </div>
          <CardContent className="vizir-card-content">
            <div className="flex items-center gap-2 text-sm text-primary mb-2">
              <CalendarIcon size={16} />
              <span>{item.date}</span>
            </div>
            <h3 className="vizir-card-title">{item.title}</h3>
            <p className="vizir-card-description">{item.excerpt}</p>
          </CardContent>
          <CardFooter className="vizir-card-footer">
            <Link href={`/actualites/${item.slug}`} className="vizir-link text-sm uppercase tracking-wider">
              Lire la suite
            </Link>
          </CardFooter>
        </Card>
      ))}

      <div className={`text-center mt-8 sm:mt-12 ${inView ? "animate-fade-in stagger-4" : "opacity-0"}`}>
        <Button asChild variant="outline" className="vizir-button">
          <Link href="/actualites">Toutes les actualités</Link>
        </Button>
      </div>
    </section>
  )
}
