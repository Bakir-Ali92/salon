// components/offers.tsx
import { getOffers } from "@/lib/offers"
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface OffersProps {
  language: "en" | "ar" // Add language prop
}

export default function Offers({ language }: OffersProps) {
  const offers = getOffers()
  const isArabic = language === "ar"
  
  // Helper function to create a clean slug for linking
  const createSlug = (name: string) => name.toLowerCase().replace(/\s/g, '-').replace(/[^\w-]+/g, '')

  return (
    <section id="offers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            {isArabic ? "العروض الحصرية" : "Exclusive "}<span className="text-accent">{isArabic ? "الخاصة" : "Offers"}</span>
          </h2>
        </div>

        {/* Centered single offer card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="relative group bg-gradient-to-br from-card to-card/50 border border-accent/30 rounded-xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-accent/20 transition" />

                <div className="relative z-10 text-center">
                  {/* OFFER NAME */}
                  <h3 className="font-semibold text-2xl text-accent mb-2">
                    {isArabic ? offer.nameAr : offer.nameEn}
                  </h3>
                  
                  {/* PRICE */}
                  <div className="text-foreground text-4xl font-bold mb-4">
                    {isArabic ? offer.priceAr : offer.priceEn}
                  </div>
                  
                  {/* DESCRIPTION */}
                  <p className="text-muted-foreground text-sm mb-6">
                    {isArabic ? "اختر من الخدمات المؤهلة" : "Choose from eligible services"}
                  </p>

                  {/* ACTION BUTTON */}
                  <Button asChild className="w-full bg-accent text-primary py-2 rounded-lg font-semibold hover:bg-accent/90 transition bg-amber-500 text-sm text-white">
                    <Link href="/services">
                      {isArabic ? "عرض التفاصيل الكاملة" : "View Full Details"}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}