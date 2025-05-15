"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarIcon, Clock } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"

export default function RecentBlogPosts() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Récupérer les 3 articles les plus récents
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)

  return (
    <section ref={ref} className="vizir-section bg-background/80 backdrop-blur-sm">
      <div className="container">
        <div className="space-y-12">
          <div className={`space-y-4 ${inView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="vizir-subheading">Derniers Articles</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-muted-foreground max-w-2xl">
              Découvrez nos derniers articles sur l'immobilier, l'architecture et les tendances du secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card
                key={post.slug}
                className={`overflow-hidden h-full flex flex-col ${inView ? `animate-slide-up stagger-${index + 1}` : "opacity-0"}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6 pb-4 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <CalendarIcon size={14} />
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <Clock size={14} />
                    <span>{post.readTime} min de lecture</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={`/blog/${post.slug}`}>Lire l'article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className={`text-center ${inView ? "animate-fade-in stagger-4" : "opacity-0"}`}>
            <Button asChild variant="outline" className="vizir-button">
              <Link href="/blog">Voir tous les articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
