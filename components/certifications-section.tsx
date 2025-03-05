"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, GraduationCap, BookOpen, FileCheck } from "lucide-react"

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      category: "Psikoterapi Eğitimleri",
      items: [
        { title: "Oyun Terapisi Eğitimi – Uygulayıcı Eğitimleri", institution: "Terapileri Derneği", year: "2012" },
        { title: "Akılcı Duygusal Davranışçı Terapi Yöntemleri ile Çocuklar İçin Psikoterapi", institution: "Albert Ellis Enstitüsü", year: "2014" },
        { title: "Bilişsel Davranışçı Terapi Yöntemleri ile Çocuklar İçin Psikoterapi", institution: "Albert Ellis Enstitüsü", year: "2014" },
        { title: "Dinamik Psikoterapi ve Kişilik Bozuklukları", institution: "Prof. Dr. Doğan Şahin", year: "2015-2018", details: "112 Saat Teorik, 76 Saat Pratik Eğitim" },
        { title: "Psikanalitik Psikoterapiler", institution: "Bahattin Göktan, Sezgi Psikoloji", year: "2020" },
        { title: "Duygu Odaklı Bireysel ve Çift Terapisi", institution: "Bahattin Göktan, Sezgi Psikoloji", year: "2021" },
        { title: "Süre Sınırlı Psikanalitik Psikoterapi", institution: "Bahattin Göktan, Sezgi Psikoloji", year: "2020" },
      ]
    },
    {
      category: "Oyun Terapisi ve Çocuklara Yönelik Eğitimler",
      items: [
        { title: "Çocuk Çizimlerinin Projektif Değerlendirmesi", institution: "Uzm. Psk. Funda Akpullu, Rorschach Derneği ve Projektif Testler Derneği", year: "2017-2018" },
        { title: "Çocuk Merkezli Oyun Terapisi & Bilişsel Davranışçı Oyun Terapisi", institution: "Temel, İleri Uygulama ve Süpervizyon Programı", year: "2018", details: "51 Saat" },
        { title: "Çocuk EMDR I. Düzey Eğitimi", institution: "Ümran Korkmazlar", year: "2019" },
        { title: "Attentioner Eğitimi", institution: "", year: "2024" },
      ]
    },
    {
      category: "EMDR Eğitimleri",
      items: [
        { title: "EMDR I. Düzey Eğitimi", institution: "Davranış Bilimleri Enstitüsü", year: "2018" },
        { title: "EMDR R-TEP Protokolü", institution: "Davranış Bilimleri Enstitüsü", year: "2022" },
        { title: "EMDR II. Düzey Eğitimi", institution: "Davranış Bilimleri Enstitüsü", year: "2024" },
        { title: "Tr-V-OCD Protokol Eğitimi", institution: "Davranış Bilimleri Enstitüsü", year: "2024" },
        { title: "Temporal Entegrasyon Workshopu", institution: "Davranış Bilimleri Enstitüsü", year: "2024" },
        { title: "PERGEL (Performans Geliştirme Programı) Uygulayıcı Sertifikası", institution: "", year: "2023" },
      ]
    },
    {
      category: "Test Eğitimleri",
      items: [
        { title: "WÇZÖ-IV Zeka Testi Eğitimi", institution: "Türk Psikologlar Derneği", year: "2016" },
        { title: "Rorschach Eğitimi", institution: "Prof. Dr. Tevfika İkiz, Rorschach Derneği ve Projektif Testler Derneği", year: "2017" },
        { title: "İnsan Çiz, Ağaç Çiz, Aile Çiz Testleri", institution: "Rorschach Derneği ve Projektif Testler Derneği, Uzm. Psk. Funda Akpullu", year: "2017-2018" },
        { title: "TAT Eğitimi", institution: "Prof. Dr. Tevfika İkiz, Rorschach Derneği ve Projektif Testler Derneği", year: "2018" },
        { title: "WISC-R Wechsler Çocuklar İçin Zeka Testi", institution: "Mind Engineers Psikoloji Merkezi", year: "2018" },
        { title: "MMPI (Minnesota Çok Yönlü Kişilik Envanteri)", institution: "", year: "2019" },
        { title: "DENVER 2 Testi", institution: "", year: "2019" },
        { title: "AGTE", institution: "", year: "2019" },
        { title: "Stanford Binet Zeka Testi", institution: "", year: "2019" },
        { title: "Metropolitan Okul Olgunluğu Testi", institution: "", year: "2019" },
        { title: "Frostig Gelişimsel Görsel Algı Testi", institution: "", year: "2019" },
        { title: "Good-Enough Harris Bir Adam Çiz Testi", institution: "", year: "2019" },
        { title: "Cattel 2a Zeka Testi", institution: "", year: "2019" },
        { title: "Peabody Resim Kelime Testi", institution: "", year: "2019" },
        { title: "Bender Gestalt Görsel Motor Algı Testi", institution: "", year: "2019" },
        { title: "Gessel Gelişim Testi", institution: "", year: "2019" },
        { title: "Porteus Labirentleri Testi - Kent Egy Testi", institution: "", year: "2019" },
        { title: "Benton Kognitif Fonksiyonları ve Görsel Hafıza Testi", institution: "", year: "2019" },
        { title: "Kinder Angst Ölçeği - SDÖT Ölçeği", institution: "", year: "2019" },
        { title: "MOXO Dikkat testi", institution: "", year: "" },
      ]
    },
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Eğitim ve Sertifikalar</h2>
          <p className="text-muted-foreground">
            Güncel araştırma ve en iyi uygulamalara dayalı yüksek kaliteli hizmet sunmak için sürekli eğitim ve uzmanlaşma.
          </p>
        </motion.div>

        {certifications.map((category, categoryIndex) => (
          <div key={category.category} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 font-serif">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: (categoryIndex * category.items.length + index) * 0.05 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">{cert.title}</h3>
                        {cert.institution && (
                          <p className="text-muted-foreground text-sm mb-1">{cert.institution}</p>
                        )}
                        {cert.details && (
                          <p className="text-muted-foreground text-sm mb-1">{cert.details}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{cert.year}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Psikolojik araştırma ve tedavi yöntemlerindeki en son gelişmeleri takip etmek için düzenli olarak
            workshop, konferans ve sürekli eğitim programlarına katılıyorum.
          </p>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
    </section>
  )
}
