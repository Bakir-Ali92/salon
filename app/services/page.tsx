"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { servicesCategories } from "@/lib/services";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import {getOffers,getServicesList} from "@/lib/offers"
import { useLanguage } from "@/contexts/LanguageContext" // Import context

const serviceCategories = servicesCategories

// Exclusive offers data
const exclusiveOffers = {
  specialOffers: getOffers(),
  serviceList: getServicesList()
}

export default function ServicesPage() {
  // Remove local language state
  // const [language, setLanguage] = useState<"en" | "ar">("en")
  
  // Use context instead
  const { language } = useLanguage()
  
  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0].id)
  const [showOffers, setShowOffers] = useState(false)

  const currentCategory = serviceCategories.find(c => c.id === selectedCategory)

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Update Header - remove language props */}
      <Header 
        cartCount={0} 
        onCartClick={() => {}} 
        // Remove language and onLanguageChange props
      />

      <div
        // 1. MAIN BACKGROUND: BLACK
        className={`min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${language === "ar" ? "text-right" : "text-left"}`}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-4 text-white">
              {language === "en" ? "Our Services" : "خدماتنا"}
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              {language === "en"
                ? "Select a category below to view prices and details for our luxury beauty and salon services."
                : "حدد فئة أدناه لعرض الأسعار والتفاصيل لخدمات التجميل والصالون الفاخرة لدينا."}
            </p>
            
            {/* Offers Button */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="default"
                onClick={() => setShowOffers(true)}
                // 2. ACTIVE BUTTON: GOLD BG, BLACK TEXT
                className={`${showOffers ? "bg-amber-500 text-black hover:bg-amber-400" : "bg-black border border-amber-500 text-amber-500 hover:bg-zinc-900"} font-bold transition-all`}
              >
                {language === "en" ? "🏆 Exclusive Offers" : "🏆 العروض الخاصة"}
              </Button>
              <Button
                variant="default"
                onClick={() => setShowOffers(false)}
                 // 3. INACTIVE BUTTON: BLACK BG, GOLD BORDER
                className={`${!showOffers ? "bg-amber-500 text-black hover:bg-amber-400" : "bg-black border border-amber-500 text-amber-500 hover:bg-zinc-900"} font-bold transition-all`}
              >
                {language === "en" ? "View All Services" : "عرض جميع الخدمات"}
              </Button>
            </div>
          </div>

          {/* Exclusive Offers Section */}
          {showOffers ? (
            <div className="space-y-8 justify-center">
              {/* Special Offers Banner */}
              <Card className="justify-center text-center border border-amber-500/50  shadow-lg shadow-amber-900/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-center text-3xl font-bold text-amber-400">
                    {language === "en" ? "🏆 Special Offers 🏆" : "🏆 عروض خاصة 🏆"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-center grid grid-cols-1 gap-6 justify-center">
  {exclusiveOffers.specialOffers.map((offer, index) => (
    <div 
      key={index}
      className="relative p-6 border border-amber-500/30 rounded-xl bg-black overflow-hidden"
    >
      {/* Decorative circles - subtle gold transparency */}
      <div className="absolute top-0 left-0 w-20 h-20 -translate-x-8 -translate-y-8 bg-amber-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 translate-x-6 translate-y-6 bg-amber-500 rounded-full opacity-10"></div>
      
      <div className="text-4xl font-bold text-white mb-3">
        {language === "en" 
          ? `${offer.nameEn} + one coupon free`
          : `${offer.nameAr} + كوبون مجاني واحد`
        }
      </div>
      <div className="text-3xl font-bold text-amber-400 mb-2">
         {language === "en" 
          ? offer.priceEn
          : offer.priceAr
        }
      </div>
    </div>
  ))}
</div>
                  
                  {/* How it works */}
                  <div className="mt-8 p-4 bg-black rounded-lg border border-amber-500/30">
                    <p className="text-center text-white font-medium">
                      {language === "en" 
                        ? "Choose any services from the list below. Each service consumes a certain number of credits from your package."
                        : "اختر أي خدمة من القائمة أدناه. كل خدمة تستهلك عددًا معينًا من الرصيد من حزمتك."}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Service List with Credits Consumed */}
              <Card className="border border-amber-500/30 ">
                <CardHeader className="border-b border-amber-500/20">
                  <CardTitle className="font-playfair text-2xl font-bold text-white">
                    {language === "en" ? "Available Services" : "الخدمات المتاحة"}
                  </CardTitle>
                  <p className="text-white">
                    {language === "en" 
                      ? "Each service consumes the following number of credits from your package"
                      : "كل خدمة تستهلك العدد التالي من الرصيد من حزمتك"}
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className=" border-amber-500/20">
                          <th className={`px-6 py-4 text-sm font-semibold text-amber-500 ${language === "ar" ? "text-right" : "text-left"}`}>
                            {language === "en" ? "Service" : "الخدمة"}
                          </th>
                          <th className={`px-6 py-4 text-sm font-semibold text-amber-500 text-center`}>
                            {language === "en" ? "Credits Consumed" : "الرصيد المستهلك"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {exclusiveOffers.serviceList.map((service, idx) => (
                          <tr 
                            key={idx} 
                            className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 transition duration-200"
                          >
                            <td className={`px-6 py-4 text-sm text-white ${language === "ar" ? "text-right" : "text-left"}`}>
                              {language === "en" ? service.nameEn : service.nameAr}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {/* Credits Circle: Gold BG, Black Text */}
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-black font-bold text-sm">
                                {service.servicesConsumed}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Package Examples */}
              <Card className="border border-amber-500/30 ">
                <CardHeader className=" border-amber-500/20">
                  <CardTitle className="text-xl font-bold text-white">
                    {language === "en" ? "Package Examples" : "أمثلة على الحزم"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-amber-500/20 rounded-lg p-5 bg-black">
                      <h4 className="font-bold text-lg text-white mb-3">
                        {language === "en" ? "10 R.O Package (5 services)" : "حزمة 5 ريال (3 خدمات)"}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-amber-500 text-black font-bold text-xs">1</span>
                          <span>{language === "en" ? "Facial Cleaning + Eyebrow Treading" : "تنظيف فيمقرر + حف حواجب"}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-amber-500 text-black font-bold text-xs">1</span>
                          <span>{language === "en" ? "Half Hand Halawa" : "حلاقة نصف ابدي"}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-amber-500 text-black font-bold text-xs">1</span>
                          <span>{language === "en" ? "Hair Oil Bath" : "حمام زيت شعر"}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-amber-500 text-black font-bold text-xs">2</span>
                          <span>{language === "en" ? "Nail Fixing" : "حمام زيت شعر"}</span>
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-zinc-800">
                        <div className="text-center text-lg font-bold text-amber-400">
                          {language === "en" ? "Total: 5 credits" : "المجموع: 3 رصيد"}
                        </div>
                      </div>
                    </div>
                    
                    
                  </div>
                </CardContent>
              </Card>

          
            </div>
          ) : (
            /* Regular Services Section */
            <>
              {/* Service Category Dropdown */}
              <div className="mb-12 flex justify-center">
  <div className="w-full max-w-lg">
    <Select defaultValue={selectedCategory} onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-full text-base h-12 border-amber-500/50 text-white focus:ring-amber-500">
        <SelectValue placeholder={language === "en" ? "Select a Service Category" : "اختر فئة الخدمة"} />
      </SelectTrigger>
      <SelectContent 
        position="popper"
        side="bottom"
        avoidCollisions={true}
        collisionPadding={20}
        className="bg-zinc-900 border-amber-500/50 text-white max-h-60 overflow-y-auto" // Set fixed max-height
        style={{
          width: "var(--radix-select-trigger-width)",
        }}
      >
        {serviceCategories.map((category) => (
          <SelectItem
            key={category.id}
            value={category.id}
            className="text-base focus:bg-amber-500 focus:text-black cursor-pointer"
          >
            {language === "en" ? category.nameEn : category.nameAr}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>

              {/* Service Price List */}
              {currentCategory && (
                <Card className="border border-amber-500/30  shadow-md">
                  <CardHeader className=" border-amber-500/20">
                    <CardTitle className="font-playfair text-2xl font-bold text-white">
                      {language === "en" ? currentCategory.nameEn : currentCategory.nameAr}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className=" border-b border-amber-500/20">
                            <th className={`px-6 py-4 text-sm font-semibold text-amber-500 ${language === "ar" ? "text-right" : "text-left"}`}>
                              {language === "en" ? "Service" : "الخدمة"}
                            </th>
                            <th className={`px-6 py-4 text-sm font-semibold text-amber-500 ${language === "ar" ? "text-left" : "text-right"}`}>
                              {language === "en" ? "Price (R.O)" : "السعر (ر.ع)"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentCategory.items.map((item, idx) => (
                            <tr key={idx} className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 transition">
                              <td className={`px-6 py-4 text-sm text-gray-200 ${language === "ar" ? "text-right" : "text-left"}`}>
                                {language === "en" ? item.nameEn : item.nameAr}
                              </td>
                              <td className={`px-6 py-4 text-sm font-bold text-amber-400 ${language === "ar" ? "text-left" : "text-right"}`}>
                                {item.price} R.O
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
      <Footer language={language} />
    </main>
  )
}