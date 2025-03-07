"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const testimonials = [
  {
    id: 1,
    name: "Ayşe K.",
    text: "Ruya Hanım ile yaptığımız seanslar hayatımda önemli değişikliklere yol açtı. Profesyonel yaklaşımı ve samimi tavırları sayesinde kendimi çok rahat hissettim.",
  },
  {
    id: 2,
    name: "Mehmet S.",
    text: "Terapiye başlamaya karar verdiğimde en doğru kararı vermişim. Ruya Hanım'ın desteğiyle kaygılarımla başa çıkmayı öğrendim.",
  },
  {
    id: 3,
    name: "Zeynep B.",
    text: "Çocuğumun yaşadığı zorlukları aşmada bize çok yardımcı oldu. Artık daha mutlu ve özgüvenli bir çocuk.",
  },
  {
    id: 4,
    name: "Can D.",
    text: "Profesyonel ve anlayışlı yaklaşımı sayesinde zorlu bir dönemden başarıyla çıktım. Kendisine çok teşekkür ederim.",
  },
  {
    id: 5,
    name: "Elif T.",
    text: "Ruya Hanım'ın desteğiyle kendimi daha iyi tanıdım ve güçlü yönlerimi keşfettim. Hayatıma yeni bir bakış açısı kattı.",
  },
  {
    id: 6,
    name: "Deniz A.",
    text: "Aile terapisi sürecimizde bize çok yardımcı oldu. İletişimimiz güçlendi ve daha huzurlu bir aile ortamı yakaladık.",
  }
]

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const cardsToShow = isMobile ? 1 : 3

  const handlePrevious = () => {
    setStartIndex((prev) => 
      prev > 0 ? prev - 1 : testimonials.length - cardsToShow
    )
  }

  const handleNext = () => {
    setStartIndex((prev) => 
      prev < testimonials.length - cardsToShow ? prev + 1 : 0
    )
  }

  return (
    <section className="w-full py-16 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Danışan Yorumları</h2>
        <div className="relative">
          <div className="flex justify-between items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-4 overflow-hidden">
              {Array.from({ length: cardsToShow }).map((_, offset) => {
                const index = (startIndex + offset) % testimonials.length
                return (
                  <Card 
                    key={testimonials[index].id} 
                    className={`flex-1 min-w-0 transform transition-all duration-300 ${
                      isMobile ? 'w-full' : 'w-1/3'
                    }`}
                  >
                    <CardContent className="p-6">
                      <blockquote className="text-lg mb-4">{testimonials[index].text}</blockquote>
                      <footer className="text-right font-medium">- {testimonials[index].name}</footer>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}