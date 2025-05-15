import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import BackgroundPattern from "@/components/background-pattern"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeCustomizer } from "@/components/theme-customizer"
import ThemeInit from "./theme-init"
import ScrollToTopNavigation from "@/components/scroll-to-top-navigation"
import PageTransitionFix from "@/components/page-transition-fix"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vizir Group | Construction & Développement Immobilier",
  description: "Vizir Group - Experts en construction et développement immobilier résidentiel et commercial",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      
    ],
   
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} theme-transition`}>
      <Suspense>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <ThemeInit />
          <ScrollToTopNavigation />
          <PageTransitionFix />
          <div className="flex min-h-screen flex-col relative">
            <BackgroundPattern />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
            <ThemeCustomizer />
          </div>
        </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
