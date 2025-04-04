import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/hakkimda-section"
import SpecializationsSection from "@/components/uzmanliklar-section"
import CertificationsSection from "@/components/sertifikalar-section"
import ContactSection from "@/components/iletisim-section"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import SocialButtons from "@/components/social-buttons"
import TestimonialsSection from "@/components/testimonials-section"
import InstagramFeed from "@/components/instagram-feed"

export const metadata: Metadata = {
  title: "Ruya Yıldırım | Uzm. Kl. Psk.",
  description:
    "Çocuk, ergen ve yetişkin terapisinde uzmanlaşmış profesyonel psikolog.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <SpecializationsSection />
      <CertificationsSection />
      <InstagramFeed />
      <ContactSection />
      <ScrollToTopButton />
      <SocialButtons />
    </main>
  )
}

