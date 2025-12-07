"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Offers from "@/components/offers"
import Products from "@/components/products"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext" // Import context

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])
  
  // Remove local language state and use context instead
  const { language } = useLanguage()

  const addToCart = (product: any) => {
    setCartItems([...cartItems, { ...product, id: Date.now() }])
  }

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Update Header - remove language props */}
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(!cartOpen)}
        // Remove language and onLanguageChange props
      />
      
      <Hero language={language} /> {/* Pass language prop */}
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
      
      <Services language={language} /> {/* Pass language prop */}
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
      
      <Offers language={language} /> {/* Pass language prop */}
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
      
      <Products language={language} onAddToCart={addToCart} /> {/* Pass language prop */}
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
      
      <Testimonials language={language} /> {/* Pass language prop */}
      
      <Footer language={language} /> {/* Pass language prop */}
    </main>
  )
}