"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Award, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="hakkimda" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/10 rounded-full"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              <img
                src="/pskruyadilarayıldırım.jpg?height=600&width=600"
                alt="Ruya Dilara Yıldırıme"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Hakkımda</h2>
            <p className="text-muted-foreground mb-6">
            Merhaba, ben Uzm. Klinik Psikolog Ruya Dilara Yıldırım. Uzun yıllardır klinik psikoloji alanında aktif olarak hizmet veren, 
            deneyimli bir uzmanım. İstanbul Arel Üniversitesi Psikoloji ve Klinik Psikoloji bölümlerinden derece ile mezun olduktan sonra, 
            meslek hayatım boyunca yüzlerce danışana eşlik etme fırsatı buldum.
            </p>
            <p className="text-muted-foreground mb-8">
            Uzun yıllara dayanan klinik tecrübemle çocuklar, ergenler, aileler ve yetişkinlerle çalışıyor, 
            her danışanımın benzersiz hikâyesine uygun, kanıta dayalı ve bütüncül bir yaklaşım sunuyorum. 
            Türk Psikologlar Derneği ve EMDR Derneği üyesi, aynı zamanda Rasyonel Pozitif Psikoloji Derneği Başkan Yardımcılığı görevini sürdürmektedir.
            </p>
            <p className="text-muted-foreground mb-8">
            Türk Psikologlar Derneği ve EMDR Derneği üyesi, aynı zamanda Rasyonel Pozitif Psikoloji Derneği Başkan Yardımcılığı görevini sürdürmekteyim.
            
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Terapötik İlişki</h3>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Kanıta Dayalı Uygulama</h3>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Sürekli Öğrenme</h3>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

