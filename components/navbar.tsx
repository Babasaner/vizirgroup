"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeColorPicker } from "@/components/theme-color-picker"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    {
      href: "/projets",
      label: "Projets",
      children: [
        { href: "/projets", label: "Tous les projets" },
        { href: "/projets/featured", label: "Projets phares" },
        { href: "/projets?category=residential", label: "Résidentiels" },
        { href: "/projets?category=commercial", label: "Commerciaux" },
      ],
    },
    { href: "/blog", label: "Blog" },
    { href: "/partenaires", label: "Partenaires" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/vefa", label: "VEFA" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo width={120} height={30} />
        </Link>

        <nav className="hidden md:flex gap-6">
          {routes.map((route) => {
            // Si la route a des enfants, créer un menu déroulant
            if (route.children) {
              return (
                <DropdownMenu key={route.href}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "vizir-nav-link flex items-center gap-1",
                        pathname === route.href || pathname.startsWith(`${route.href}/`) ? "vizir-nav-link-active" : "",
                      )}
                    >
                      {route.label} <ChevronDown size={14} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    {route.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          href={child.href}
                          className={cn("w-full", pathname === child.href ? "text-primary" : "text-foreground")}
                          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            // Sinon, créer un lien normal
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn("vizir-nav-link", pathname === route.href ? "vizir-nav-link-active" : "")}
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              >
                {route.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeColorPicker />
          <ThemeToggle />
          <Button variant="outline" className="vizir-button">
            Demander mon projet
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeColorPicker />
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                VIZIR GROUP
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              {routes.map((route) => {
                // Si la route a des enfants, créer un groupe de liens
                if (route.children) {
                  return (
                    <div key={route.href} className="space-y-2">
                      <div
                        className={cn(
                          "text-base font-medium",
                          pathname.startsWith(route.href) ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {route.label}
                      </div>
                      <div className="pl-4 border-l border-border/40 space-y-2">
                        {route.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "text-sm transition-colors hover:text-primary block",
                              pathname === child.href ? "text-primary" : "text-muted-foreground",
                            )}
                            onClick={() => {
                              setIsOpen(false)
                              window.scrollTo({ top: 0, behavior: "instant" })
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                // Sinon, créer un lien normal
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      pathname === route.href ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => {
                      setIsOpen(false)
                      window.scrollTo({ top: 0, behavior: "instant" })
                    }}
                  >
                    {route.label}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-auto pt-8">
              <Button variant="outline" className="w-full vizir-button">
                Demander mon projet
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
