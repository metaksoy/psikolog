"use client"

import { Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialButtons() {
  const openWhatsApp = () => {
    window.open("https://wa.me/5551234567?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20consultation", "_blank")
  }

  const openInstagram = () => {
    window.open("https://www.instagram.com/klinikpsikologruyadilara", "_blank")
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <Button
        onClick={openWhatsApp}
        className="rounded-full w-12 h-12 p-0 bg-green-500 hover:bg-green-600 shadow-lg"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <Button
        onClick={openInstagram}
        className="rounded-full w-12 h-12 p-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 shadow-lg"
        aria-label="Follow on Instagram"
      >
        <Instagram className="h-6 w-6" />
      </Button>
    </div>
  )
}

