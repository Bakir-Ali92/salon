// app/products/page.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { productDetails } from "@/lib/products";
import { useLanguage } from "@/contexts/LanguageContext";

// Define TypeScript interfaces
interface ProductItem {
  id: number;
  slug: string;
  nameEn: string;
  nameAr: string;
  price: number;
  categoryEn: string;
  categoryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  imagePath: string;
  imagePaths?: string[];
}

interface ProductCategory {
  id: string;
  nameEn: string;
  nameAr: string;
  items: ProductItem[];
}

// Helper function to group products by category for the listing page
const groupProductsByCategory = (products: ProductItem[]): ProductCategory[] => {
  const grouped = products.reduce((acc, product) => {
    const categoryName = product.categoryEn;
    if (!acc[categoryName]) {
      acc[categoryName] = {
        id: categoryName.toLowerCase().replace(/\s/g, '-'),
        nameEn: categoryName,
        nameAr: product.categoryAr,
        items: [],
      };
    }
    acc[categoryName].items.push(product);
    return acc;
  }, {} as Record<string, ProductCategory>);
  return Object.values(grouped);
};

const productCategories = groupProductsByCategory(productDetails);

export default function ProductsPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Header 
        cartCount={0} 
        onCartClick={() => {}} 
      />
      
      <div className="pt-20" />

      <div
        className={`min-h-screen bg-background pt-6 pb-12 px-4 sm:px-6 lg:px-8 ${isArabic ? "text-right" : "text-left"}`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              {isArabic ? "منتجاتنا للبيع بالتجزئة" : "Retail Products"}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isArabic
                ? "تصفح مجموعتنا الحصرية من منتجات الصالون الاحترافية."
                : "Browse our exclusive line of professional salon products."}
            </p>
          </div>

          {/* Product Grid / Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {productCategories.map((category: ProductCategory) => (
              <Card key={category.id} className="border border-amber-500/20 w-full">
                <CardContent className="p-4 space-y-3">
                  {/* Category Title */}
                  <h2 className="text-xl font-semibold text-foreground pb-2 border-b border-amber-500/10 mb-2">
                    {isArabic ? category.nameAr : category.nameEn}
                  </h2>

                  {category.items.map((item: ProductItem) => (
                    <div key={item.id} className="space-y-3 pb-4 border-b border-amber-500/10 last:border-b-0">
                      {/* Product Image and Name */}
                      <div className="flex items-start gap-4">
                        <Image
                          src={item.imagePath} 
                          alt={isArabic ? item.nameAr : item.nameEn}
                          width={96}
                          height={96}
                          className="rounded-md object-cover border border-amber-500/20 flex-shrink-0"
                        />
                        <div className="flex-grow">
                          <span className="text-base font-semibold block mt-1">
                            {isArabic ? item.nameAr : item.nameEn}
                          </span>
                          <span className="text-sm font-bold text-amber-500">
                            {item.price.toFixed(2)} {language === "en" ? "R.O" : "ر.ع"}
                          </span>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <Button asChild variant="outline" className="w-full text-sm h-9 border-amber-500 text-amber-500 hover:bg-amber-500/10 mt-2">
                        <Link href={`/products/${item.slug}`}>
                          {isArabic ? "عرض التفاصيل" : "View Details"}
                        </Link>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer language={language} />
    </main>
  );
}