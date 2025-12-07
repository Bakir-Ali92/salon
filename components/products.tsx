"use client"

import { useState } from "react"
import { ShoppingBag, Eye } from "lucide-react"
import { getProducts, type Product } from "@/lib/products"
import Link from "next/link"

interface ProductsProps {
  language?: "en" | "ar";
  onAddToCart: (product: Product) => void;
}

export default function Products({ language = "en", onAddToCart }: ProductsProps) {
  const [filter, setFilter] = useState("All")
  
  // 1. Fetch data
  const allProducts = getProducts()
  const isAr = language === "ar"

  // 2. Extract unique categories dynamically based on language
  const categories = ["All", ...Array.from(new Set(allProducts.map(p => isAr ? p.categoryAr : p.categoryEn)))]

  // 3. Filter logic
  const filtered = filter === "All" 
    ? allProducts 
    : allProducts.filter((p) => (isAr ? p.categoryAr : p.categoryEn) === filter)

  // 4. Content Translations
  const content = {
    title: isAr ? "مجموعة" : "Curated",
    titleHighlight: isAr ? "المنتجات المختارة" : "Product Collection",
    subtitle: isAr ? "اكتشفي منتجاتنا الفاخرة للعناية بالبشرة والجمال" : "Discover our premium skincare and beauty products",
    currency: isAr ? "ر.ع." : "R.O",
    addToCart: isAr ? "أضف للسلة" : "Add to Cart",
    viewDetails: isAr ? "عرض التفاصيل" : "View Details",
    all: isAr ? "الكل" : "All"
  }

  return (
    <section 
      id="products" 
      dir={isAr ? "rtl" : "ltr"}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            {content.title} <span className="text-accent">{content.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground mb-8">{content.subtitle}</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
                onClick={() => setFilter("All")}
                className={`px-6 py-2 rounded-full transition text-sm font-medium ${
                  filter === "All"
                    ? "bg-accent text-white"
                    : "bg-card border border-accent/20 text-foreground hover:border-accent/50"
                }`}
              >
                {content.all}
              </button>

            {categories.filter(c => c !== "All").map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition text-sm font-medium ${
                  filter === cat
                    ? "bg-accent text-white"
                    : "bg-card border border-accent/20 text-foreground hover:border-accent/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div key={product.id} className="group border border-accent rounded-lg p-4">
              
              {/* Image Card */}
              <div className="relative mb-4 overflow-hidden rounded-xl bg-card border border-accent/20 aspect-square">
                <img
                  src={product.imagePath || "/placeholder.svg"}
                  alt={isAr ? product.nameAr : product.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                
                {/* Action Buttons Overlay */}
                <div className={`absolute bottom-4 ${isAr ? "left-4" : "right-4"} flex gap-2`}>
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => onAddToCart(product)}
                    title={content.addToCart}
                    className="bg-accent text-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-accent/90"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                  
                  {/* View Details Button */}
                  <Link
                    href={`/products/${product.slug || product.id}`}
                    title={content.viewDetails}
                    className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-gray-100"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className={`flex flex-col ${isAr ? "items-start" : "items-start"}`}>
                <h3 className="font-semibold text-foreground mb-1 text-lg">
                  {isAr ? product.nameAr : product.nameEn}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {isAr ? product.categoryAr : product.categoryEn}
                </p>
                
                {/* Price and View Details Button */}
                <div className="flex justify-between items-center w-full">
                  <p className="text-2xl font-bold text-accent">
                    {product.price.toFixed(2)} <span className="text-lg">{content.currency}</span>
                  </p>
                  
                  {/* Text View Details Button */}
                  <Link
                    href={`/products/${product.slug || product.id}`}
                    className="text-accent hover:text-accent/80 text-sm font-medium border border-accent rounded-lg px-4 py-2 hover:bg-accent/10 transition">
                    {content.viewDetails} →
                  </Link>
                </div>
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}