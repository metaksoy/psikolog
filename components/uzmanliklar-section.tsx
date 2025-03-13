"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Baby,
  User,
  Brain,
  Lightbulb,
  Gamepad2,
  HeartPulse,
  Frown,
  CheckCircle,
  Zap,
  Flame,
  Pill,
  Heart,
  Sparkles,
  ShieldAlert,
  UserCheck,
  Moon,
  Utensils,
} from "lucide-react"

export default function SpecializationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const uzmanliklar = [
    {
      category: "Yaş Grupları",
      items: [
        { name: "Çocuk ve Ergen Terapisi", icon: <Baby className="h-5 w-5" /> },
        { name: "Yetişkin Terapisi", icon: <User className="h-5 w-5" /> },
      ],
    },
    {
      category: "Terapi Türleri",
      items: [
        { name: "Psikodinamik Terapi", icon: <Brain className="h-5 w-5" /> },
        { name: "Bilişsel Davranışçı Terapi", icon: <Lightbulb className="h-5 w-5" /> },
        { name: "Oyun Terapisi", icon: <Gamepad2 className="h-5 w-5" /> },
      ],
    },
    {
      category: "Tedavi Alanları",
      items: [
        { name: "Kaygı Bozuklukları", icon: <HeartPulse className="h-5 w-5" /> },
        { name: "Depresyon", icon: <Frown className="h-5 w-5" /> },
        { name: "OKB", icon: <CheckCircle className="h-5 w-5" /> },
        { name: "Travma Sonrası Stres Bozukluğu", icon: <Zap className="h-5 w-5" /> },
        { name: "Öfke Kontrolü", icon: <Flame className="h-5 w-5" /> },
        { name: "Bedensel Belirtiler ve Ağrı", icon: <Pill className="h-5 w-5" /> },
        { name: "Stres", icon: <HeartPulse className="h-5 w-5" /> },
        { name: "Özgüven", icon: <UserCheck className="h-5 w-5" /> },
        { name: "Yeme Bozuklukları", icon: <Utensils className="h-5 w-5" /> },
        { name: "Kişilik Bozuklukları", icon: <User className="h-5 w-5" /> },
        { name: "Davranış Bozuklukları", icon: <ShieldAlert className="h-5 w-5" /> },
        { name: "Kayıp ve Yas", icon: <Heart className="h-5 w-5" /> },
        { name: "Uyku Bozuklukları", icon: <Moon className="h-5 w-5" /> },
      ],
    },
    {
      category: "Özel Programlar",
      items: [{ name: "Depremzedelere Ücretsiz Danışmanlık", icon: <Sparkles className="h-5 w-5" /> }],
    },
  ]

  return (
    <section id="uzmanliklar" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Uzmanlık Alanlarım</h2>
          <p className="text-muted-foreground">
           
          </p>
        </motion.div>

        <Tabs defaultValue="Yaş Grupları" className="w-full">
          <TabsList className="h-auto flex-wrap gap-2 grid grid-cols-2 md:grid-cols-4 mb-8">
            {uzmanliklar.map((category) => (
              <TabsTrigger 
                key={category.category} 
                value={category.category}
                className="h-auto py-2 px-3 text-sm whitespace-normal text-center"
              >
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {uzmanliklar.map((category) => (
            <TabsContent key={category.category} value={category.category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6 flex flex-col items-center text-center h-full">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          {item.icon}
                        </div>
                        <h3 className="font-medium mb-2">{item.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
    </section>
  )
}
