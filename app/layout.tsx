import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] })

export const metadata: Metadata = {
  title: "Angel Glow Beauty Salon | Luxury Beauty & Skincare",
  description: "Discover luxury beauty services and premium skincare products at Angel Glow Beauty Salon. Experience elegance and radiance.",
  keywords: ["beauty salon", "skincare", "hair salon", "beauty treatments", "Oman salon", "مسقط صالون تجميل"],
  authors: [{ name: "Angel Glow Beauty Salon" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angelglow.com",
    title: "Angel Glow Beauty Salon",
    description: "Luxury Beauty & Skincare Services in Oman",
    siteName: "Angel Glow Beauty Salon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Glow Beauty Salon",
    description: "Luxury Beauty & Skincare Services in Oman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional meta tags for RTL support */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.className} antialiased bg-background text-foreground`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}