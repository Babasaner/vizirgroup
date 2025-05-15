import Hero from "@/components/hero"
import Services from "@/components/services"
import AboutSection from "@/components/about-section"
import NewsSection from "@/components/news-section"
import ContactCta from "@/components/contact-cta"
import Testimonials from "@/components/testimonials"
import FeaturedProjectsGallery from "@/components/featured-projects-gallery"
import PageTransition from "@/components/page-transition"
import RecentBlogPosts from "@/components/recent-blog-posts"

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <Hero />
        <AboutSection />
        <Services />
        <FeaturedProjectsGallery />
        <RecentBlogPosts />
        <Testimonials />
        <ContactCta />
      </div>
    </PageTransition>
  )
}
