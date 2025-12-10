// app/layout.tsx (or wherever your RootLayout is located)
import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/LanguageContext"
import ClientLayout from "@/components/ClientLayout" // 👈 Import the new wrapper
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] })

export const metadata: Metadata = {
  // ✅ 1. Put "Salalah" in the title (Crucial for clicks)
  title: "Angel Glow Beauty Salon | Best Beauty Salon in Salalah, Oman",
  
  // ✅ 2. Mention location and nearby landmarks in description
  description: "Offering professional luxury services in beauty, hair, and specialized skincare, Angel Glow is your premier destination in Salalah, Oman. Schedule your appointment to discover our expert care.",
  
  // ✅ 3. Target Salalah keywords (English & Arabic)
  keywords: [
    "beauty salon in salalah",
    "beauty salon in oman",
    "angel glow beauty salon",
    "angel glow salon",
    "angel glow",
    "beauty salon Salalah",   // Specific location
    "Salalah hair salon",
    "best spa in Salalah",
    "Dhofar beauty salon",    // The region name
    "bridal makeup Salalah",
    "skincare Oman",
    "صالون تجميل صلالة",      // "Beauty Salon Salalah" (Arabic)
    "أفضل صالون في صلالة",    // "Best salon in Salalah" (Arabic)
    "مكياج صلالة",           // "Makeup Salalah" (Arabic)
    "علاجات شعر صلالة"        // "Hair treatments Salalah" (Arabic)
  ],
  
  authors: [{ name: "Angel Glow Beauty Salon" }],
  
  openGraph: {
    type: "website",
    locale: "en_US",
    // ✅ 4. Add alternate locale for Arabic if you have it
    alternateLocale: ["ar_OM"], 
    url: "https://angelglow.com",
    title: "Angel Glow - Luxury Salon in Salalah",
    description: "Premium hair and beauty services in the heart of Salalah, Oman.",
    siteName: "Angel Glow Beauty Salon",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Angel Glow Beauty Salon - Salalah",
    description: "Luxury Beauty & Skincare Services in Dhofar, Oman",
  },
  
  // ... rest of your robots/icons settings remain the same
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
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  // 👇 SECTION 1: PASTE THIS DATA HERE (Before the 'return' statement)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Angel Glow Beauty Salon",
    "url": "https://angelglow.online",
    "telephone": "+968 9127 4704",  // 👈 Replace with real number
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salalah",
      "addressRegion": "Dhofar",
      "postalCode": "211",
      "addressCountry": "OM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.071600749367942,  // 👈 Replace with real coordinates from Google Maps
      "longitude":  54.18928984084738
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
        "opens": "11:00 AM",
        "closes": "23:00 PM"
      }
    ],
    "priceRange": "1-50 R.O"
  };
  // 👆 END OF SECTION 1
return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* 👇 SECTION 2: JSON-LD SCRIPT */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* 👆 END OF SECTION 2 */}
        
      </head>
      {/* 👇 FIXED LINE BELOW: Added 'notranslate' */}
      <body className={`${poppins.className} antialiased bg-background text-foreground notranslate`}>
        <LanguageProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}