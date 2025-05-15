"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo width={120} height={30} />
            <p className="text-sm text-muted-foreground">
              Experts en construction et développement immobilier résidentiel et commercial.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Liens Rapides</h3>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projets"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Services</h3>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/services/architecture"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing-immobilier"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  Marketing Immobilier
                </Link>
              </li>
              <li>
                <Link
                  href="/services/webdesign"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  Webdesign
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Contact</h3>
            <ul className="grid gap-2">
              <li className="text-sm text-muted-foreground">123 Boulevard Mohammed V, Casablanca, Maroc</li>
              <li className="text-sm text-muted-foreground">+212 5XX XX XX XX</li>
              <li className="text-sm text-muted-foreground">contact@vizirgroup.com</li>
              <li className="text-sm text-muted-foreground">Lundi - Vendredi: 9h00 - 18h00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vizir Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
