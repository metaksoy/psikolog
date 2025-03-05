import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Ruya Yıldırım | Uzm. Kl. Psk.",
  description:
    "Professional psychologist specializing in child, adolescent and adult therapy with expertise in anxiety, depression, and trauma treatment.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'