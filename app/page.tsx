import Hero from "@/components/hero"
import Services from "@/components/services"
import AboutSection from "@/components/about-section"
import ContactCta from "@/components/contact-cta"
import Testimonials from "@/components/testimonials"
import FeaturedProjectsGallery from "@/components/featured-projects-gallery"
import PageTransition from "@/components/page-transition"
import RecentBlogPosts from "@/components/recent-blog-posts"
import Video from "@/components/video"

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <Hero />
        <AboutSection />
        <Services />
        <Video />
        <RecentBlogPosts />
        <Testimonials />
        <ContactCta />
      </div>
    </PageTransition>
  )
}
