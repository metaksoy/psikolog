import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SpecializationsSection from "@/components/specializations-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import SocialButtons from "@/components/social-buttons"

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
      <SpecializationsSection />
      <CertificationsSection />
      <ContactSection />
      <ScrollToTopButton />
      <SocialButtons />
    </main>
  )
}

