"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CalendarIcon, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import PageTransition from "@/components/page-transition"
import AnimatedElement from "@/components/animated-element"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Trouver l'article correspondant au slug
    const currentPost = blogPosts.find((post) => post.slug === params.slug)
    setPost(currentPost || null)

    // Trouver des articles similaires (même catégorie)
    if (currentPost) {
      const similar = blogPosts
        .filter((p) => p.slug !== params.slug && p.categories.some((cat) => currentPost.categories.includes(cat)))
        .slice(0, 3)
      setRelatedPosts(similar)
    }

    setLoading(false)
  }, [params.slug])

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <p>Chargement...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container py-16 text-center">
        <h1 className="vizir-heading">Article non trouvé</h1>
        <p className="text-muted-foreground mt-4">L'article que vous recherchez n'existe pas.</p>
        <Button asChild variant="outline" className="vizir-button mt-8">
          <Link href="/blog">Retour au blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <PageTransition>
      <div>
        <div className="relative min-h-[50vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container relative z-10 py-12 sm:py-16">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category: string) => (
                  <span
                    key={category}
                    className="text-xs bg-primary/80 text-white px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <Tag size={12} />
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="vizir-heading text-white">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-white/90">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime} min de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Button variant="ghost" asChild className="w-fit mb-8">
                <Link href="/blog" className="flex items-center gap-2 text-primary">
                  <ArrowLeft size={16} />
                  Retour au blog
                </Link>
              </Button>

              <AnimatedElement type="fade-in">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {post.content.map((section: any, index: number) => {
                    if (section.type === "paragraph") {
                      return <p key={index}>{section.content}</p>
                    } else if (section.type === "heading") {
                      return (
                        <h2 key={index} className="text-2xl font-medium mt-8 mb-4">
                          {section.content}
                        </h2>
                      )
                    } else if (section.type === "image") {
                      return (
                        <div key={index} className="my-8 relative">
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={section.src || "/placeholder.svg"}
                              alt={section.alt || "Image de l'article"}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {section.caption && (
                            <p className="text-sm text-muted-foreground text-center mt-2">{section.caption}</p>
                          )}
                        </div>
                      )
                    } else if (section.type === "list") {
                      return (
                        <ul key={index} className="my-4 space-y-2">
                          {section.items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    } else if (section.type === "quote") {
                      return (
                        <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-6">
                          {section.content}
                          {section.author && (
                            <footer className="text-sm text-muted-foreground mt-2">— {section.author}</footer>
                          )}
                        </blockquote>
                      )
                    }
                    return null
                  })}
                </div>
              </AnimatedElement>

              {/* Partage sur les réseaux sociaux */}
              <div className="mt-12 pt-8 border-t border-border/40">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Share2 size={18} />
                  Partager cet article
                </h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook size={18} />
                    <span className="sr-only">Partager sur Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter size={18} />
                    <span className="sr-only">Partager sur Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin size={18} />
                    <span className="sr-only">Partager sur LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* À propos de l'auteur */}
                <AnimatedElement type="slide-left">
                  <div className="bg-secondary/30 p-6">
                    <h3 className="text-lg font-medium mb-4">À propos de l'auteur</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden">
                        <Image
                          src={post.authorImage || "/team/ahmed-benali.png"}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{post.authorRole || "Rédacteur"}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {post.authorBio ||
                        "Expert dans le domaine de l'immobilier et de l'architecture, partageant son expertise et ses connaissances à travers des articles informatifs et inspirants."}
                    </p>
                  </div>
                </AnimatedElement>

                {/* Articles similaires */}
                {relatedPosts.length > 0 && (
                  <AnimatedElement type="slide-left" delay={0.1}>
                    <div className="bg-secondary/30 p-6">
                      <h3 className="text-lg font-medium mb-4">Articles similaires</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <div key={relatedPost.slug} className="flex gap-3">
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden">
                              <Image
                                src={relatedPost.coverImage || "/placeholder.svg"}
                                alt={relatedPost.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium line-clamp-2">
                                <Link
                                  href={`/blog/${relatedPost.slug}`}
                                  className="hover:text-primary transition-colors"
                                >
                                  {relatedPost.title}
                                </Link>
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedElement>
                )}

                {/* Catégories */}
                <AnimatedElement type="slide-left" delay={0.2}>
                  <div className="bg-secondary/30 p-6">
                    <h3 className="text-lg font-medium mb-4">Catégories</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(blogPosts.flatMap((post) => post.categories))).map((category) => (
                        <Link
                          key={category as string}
                          href={`/blog?category=${encodeURIComponent(category as string)}`}
                          className="text-xs bg-secondary px-2 py-1 rounded-full flex items-center gap-1 hover:bg-primary/10 transition-colors"
                        >
                          <Tag size={10} />
                          {category as string}
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedElement>

                {/* Newsletter */}
                <AnimatedElement type="slide-left" delay={0.3}>
                  <div className="bg-primary/10 p-6">
                    <h3 className="text-lg font-medium mb-4">Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Abonnez-vous pour recevoir nos derniers articles et actualités.
                    </p>
                    <Button asChild variant="outline" className="vizir-button w-full">
                      <Link href="/contact">S'abonner</Link>
                    </Button>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
