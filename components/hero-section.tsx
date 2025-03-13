"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openWhatsApp = () => {
    window.open("https://wa.me/905077737285?text=Merhaba%2C%20Seans%20olu%C5%9Fturmak%20istiyorum.", "_blank")
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="https://pskruyadilara.vercel.app/#iletisim"
            className={`font-serif text-xl md:text-2xl font-bold transition-all duration-300 ${
              scrolled ? "text-primary" : "text-primary"
            }`}
          >
           Ruya Dilara YILDIRIM
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#hakkimda" className="text-muted-foreground hover:text-primary transition-colors">
              Hakkımda
            </a>
            <a href="#uzmanliklar" className="text-muted-foreground hover:text-primary transition-colors">
              Uzmanlık Alanları
            </a>
            <a href="#sertifikalar" className="text-muted-foreground hover:text-primary transition-colors">
              Sertifikalar
            </a>
            <a href="#iletisim" className="text-muted-foreground hover:text-primary transition-colors">
              İletişim
            </a>
          </nav>
          <Button variant="default" size="sm" className="hidden md:flex" onClick={openWhatsApp}>
            <Calendar className="mr-2 h-4 w-4" />
            Randevu Oluştur
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menü</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      <motion.div
        className="container px-4 md:px-6 flex flex-col items-center text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
          <img
            src="/uzmanklinikpsikologruyadilara.jpg?height=128&width=128"
            alt="Uzm. Kl. Psk. Ruya Dilara Yıldırım"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-serif">Ruya Dilara Yıldırım</h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">UZMAN KLİNİK PSİKOLOG</h2>
        <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8">
        Daha sağlıklı ve mutlu bir hayata doğru ilk adımı atmaya hazırsan başlayalım.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="rounded-full" onClick={openWhatsApp}>
            ONLİNE-YÜZ YÜZE RANDEVU AL
          </Button>
          {/* <Button variant="outline" size="lg" className="rounded-full">
            DAHA FAZLASI
          </Button> */}
        </div>
      </motion.div>

      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <a
          href="#hakkimda"
          className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Aşağı Kaydır</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_65%)]"></div>
    </section>
  )
}

