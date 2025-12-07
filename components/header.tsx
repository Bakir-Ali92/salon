"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface HeaderProps {
  cartCount?: number
  onCartClick?: () => void
}

export default function Header({
  cartCount = 0,
  onCartClick = () => {},
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navItems = {
    en: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    ar: [
      { label: "الرئيسية", href: "/" },
      { label: "الخدمات", href: "/services" },
      { label: "المنتجات", href: "/products" },
      { label: "المعرض", href: "/gallery" },
      { label: "اتصل بنا", href: "/contact" },
    ],
  }

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-amber-500/30 z-50">
      <div dir={language === "ar" ? "rtl" : "ltr"} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between ${language === "ar" ? "flex-row-reverse" : ""}`}>
        {/* Logo - Only AG with Angel Glow Beauty Salon */}
        <Link href="/" className="flex items-center gap-3">
        
          <div className="flex flex-col">
            <span className="hidden sm:block font-playfair text-xl lg:text-2xl font-bold text-amber-500">
              {language === "en" ? "Angel Glow" : "أنجل جلو"}
            </span>
            <span className="text-xs text-white hidden sm:block">
              {language === "en" ? "Beauty Salon" : "صالون تجميل"}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-6 lg:gap-8 text-sm ${language === "ar" ? "flex-row-reverse" : ""}`}>
          {navItems[language].map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-white hover:text-amber-400 transition-colors font-medium relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Right side: Language Switcher and Mobile Menu */}
        <div className={`flex items-center gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}>
          {/* Language Toggle Switch */}
          <div className="flex gap-1 bg-amber-500/10 rounded-lg p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-1.5 rounded text-sm font-medium transition ${language === "en" ? "bg-amber-500 text-white" : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/20"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-4 py-1.5 rounded text-sm font-medium transition ${language === "ar" ? "bg-amber-500 text-white" : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/20"}`}
            >
              العربية
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden p-2 text-white hover:text-amber-400"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur border-t border-amber-500/30">
          <div className="px-4 py-6 space-y-2">
            {navItems[language].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-white hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition text-center"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="pt-6 mt-4 border-t border-amber-500/20 flex gap-2">
              <button
                onClick={() => {
                  setLanguage("en")
                  setMobileOpen(false)
                }}
                className={`flex-1 px-3 py-3 rounded text-sm font-medium transition ${language === "en" ? "bg-amber-500 text-white" : "bg-amber-500/10 text-gray-300 hover:text-amber-400"}`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("ar")
                  setMobileOpen(false)
                }}
                className={`flex-1 px-3 py-3 rounded text-sm font-medium transition ${language === "ar" ? "bg-amber-500 text-white" : "bg-amber-500/10 text-gray-300 hover:text-amber-400"}`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}