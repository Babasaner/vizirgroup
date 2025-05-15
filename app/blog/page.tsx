import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarIcon, Clock, Tag } from "lucide-react"
import PageTransition from "@/components/page-transition"
import AnimatedElement from "@/components/animated-element"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPage() {
  // Trier les articles par date (du plus récent au plus ancien)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Articles en vedette (les 3 plus récents)
  const featuredPosts = sortedPosts.slice(0, 3)

  // Reste des articles
  const regularPosts = sortedPosts.slice(3)

  return (
    <PageTransition>
      <div>
        <div className="relative min-h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://www.vizirgroup.com/wp-content/uploads/2022/11/Lika-2.png"
              alt="Blog Vizir Group"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container relative z-10 text-center">
            <h1 className="vizir-heading text-white">Notre Blog</h1>
            <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
              Découvrez nos dernières actualités, tendances et conseils dans le domaine de l'immobilier et de
              l'architecture.
            </p>
          </div>
        </div>

        <div className="container py-16 md:py-24">
          <div className="space-y-16">
            {/* Tous les articles */}
            <section>
              <AnimatedElement type="fade-in">
                <div className="space-y-4 mb-8">
                  <h2 className="vizir-subheading">Tous les Articles</h2>
                  <div className="w-20 h-1 bg-primary"></div>
                </div>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {regularPosts.map((post, index) => (
                  <AnimatedElement key={post.slug} type="fade-in" delay={index * 0.05}>
                    <Card className="overflow-hidden h-full flex flex-col">
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
                        <div className="flex flex-wrap gap-2 mt-3">
                          {post.categories.map((category) => (
                            <span
                              key={category}
                              className="text-xs bg-secondary px-2 py-1 rounded-full flex items-center gap-1"
                            >
                              <Tag size={10} />
                              {category}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button asChild variant="link" className="p-0 h-auto text-primary">
                          <Link href={`/blog/${post.slug}`}>Lire l'article</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            </section>

            {/* Appel à l'action */}
            <AnimatedElement type="fade-in">
              <div className="bg-secondary/50 p-8 sm:p-12 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                  <h2 className="vizir-subheading">Restez informé</h2>
                  <p className="text-muted-foreground">
                    Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités directement dans
                    votre boîte mail.
                  </p>
                  <Button asChild variant="outline" className="vizir-button">
                    <Link href="/contact">S'abonner à la newsletter</Link>
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
