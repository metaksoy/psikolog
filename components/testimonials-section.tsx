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
    name: "Zeynep B.",
    text: "Çocuğumun yaşadığı zorlukları aşmada bize çok yardımcı oldu. Yavrumun yüzünün güldüğünü gördükçe dua ediyorum.",
  },
  {
    id: 3,
    name: "Hilal H.",
    text: "Rüya Hanımla bir arkadaşım vasıtası ile tanıştım. aldığım destekten çok memnun kaldım. Empati duygusu çok yüksek, danışanı olarak güven veren bir psikolog. Ben kendi adıma sıkıntımı korkularımı, Rüya hanım sayesinde atlattım. Hayata bambaşka bir pencereden bakmayı öğrendim. Mesleğinde kendini geliştirmiş dolu bir insan olduğunu daha ilk seansta anlıyorsunuz. İyiki Rüya hanımdan destek aldım ve kendisini mesleki bilgisi, insana yaklaşımı, pozitifliği, güler yüzü nedeniyle tüm tedavi almak isteyen Danışanlara şiddetle tavsiye ediyorum. Burdan bir kez daha kendisine çok teşekkür ediyorum",
  },
  {
    id: 4,
    name: "Mehmet S.",
    text: "Terapiye başlamaya karar verdiğimde en doğru kararı vermişim. Ruya Hanım'ın desteğiyle kaygılarımla başa çıkmayı öğrendim.",
  },

    {
        id: 5,
        name: "Ezgi K.",
        text: "Rüya Hanımla yaklaşık 1 sene boyunca seanslarımız oldu, gerek bana yaklaşımı gerekse çözüm odaklı ve samimi sohbetiyle beni bu seanslar süresince çok rahatlattı ve geçen sene ile psikoloijik ve ruhen aramdaki farkın çok büyük olduğunu ( iyi anlamda) farkediyorum. kendisine buradan da teşekkür ediyorum ve danışanlarına şunu söylemek istiyorum; Rüya Hanım'a güvenirseniz inanın çoğu şeyi yoluna sokabilirsiniz. Bundan sonraki süreçte de kendisiyle seanslarıma devam etmeyi planlıyorum. Güleryüzü ve samimiyeti ve iş ahlakı için kendisine tekrar teşekkür ediyorum."

    },
    {
        id: 6,
        name: "Merve A.",
        text: "İnternet aracılığıyla buldum ve çok memnun kaldım. İşinde gayet başarılı dinlemesini bilen zaman doldurmak için değil gerçekten yardımcı olmak için seans yapıyor.Kişisel özellikleri ise güleryüzlü ve içten birisi sizi yargılamadan çözüm odaklı bir şekilde seanslarını gerçekleştiriyor. İyi ki tanışmışım diyorum ve yakın çevreme tavsiye ediyorum Kendisiyle her şeyi rahatlıkla konuşabiliyor olmak ve yargılanmamak beni gerçekten çok rahatlatıyor. Rüya Hanım çok kibar ve güleryüzlü bir insan, bu yüzden seanslardan rahatlamış ve dinlenmiş olarak çıkıyordum. Hiç yargılamadan her detayı ile anlattıklarımı dinlemesi bana kendimi çok özel hissettirdi. Rüya Hanım problemlerimi çözebilecek yeni bakış açıları kazanmama yardımcı oldu. Teşekkür ederim kendisine"       
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