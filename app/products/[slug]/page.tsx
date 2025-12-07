// app/products/[slug]/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { productDetails } from "@/lib/products"; 
import { usePathname } from 'next/navigation';
import { Link } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // Import context

// Define the type for a single product
interface Product {
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

// Function to simulate fetching a product by slug
const getProductBySlug = (slug: string): Product | undefined => {
    return productDetails.find(p => p.slug === slug);
};

export default function ProductDetailPage() {
    // Remove local language state
    // const [language, setLanguage] = useState<"en" | "ar">("en");
    
    // Use context instead
    const { language } = useLanguage();
    
    const pathname = usePathname();
    const slug = pathname.split('/').pop() || '';

    const product = getProductBySlug(slug);

    if (!product) {
        return (
            <main dir={language === "ar" ? "rtl" : "ltr"}>
                <Header cartCount={0} onCartClick={() => {}} />
                <div className="min-h-screen pt-24 text-center">
                    <h1 className="text-3xl font-bold">
                        {language === "en" ? "Product Not Found" : "المنتج غير موجود"}
                    </h1>
                    <p className="text-muted-foreground mt-4">
                        {language === "en" ? "Please check the product link." : "يرجى التحقق من رابط المنتج."}
                    </p>
                </div>
            </main>
        );
    }
    
    const { nameEn, nameAr, price, categoryEn, categoryAr, descriptionEn, descriptionAr } = product;
    const isArabic = language === "ar";
    
    // Determine the array of images, falling back to the single imagePath if imagePaths is undefined
    const productImages = product.imagePaths || [product.imagePath]; 
    
    // Initialize state for the currently displayed main image
    const [mainImage, setMainImage] = useState(productImages[0]);

    return (
        <main dir={language === "ar" ? "rtl" : "ltr"}>
            {/* Update Header - remove language props */}
            <Header 
                cartCount={0} 
                onCartClick={() => {}} 
                // Remove language and onLanguageChange props
            />

            <div
                className={`min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${isArabic ? "text-right" : "text-left"}`}
                dir={isArabic ? "rtl" : "ltr"}
            >
                <div className="max-w-6xl mx-auto">
                    
                    {/* Breadcrumb or Back Button */}
                   <Button
    variant="outline" // Changed from "link" to "outline"
    onClick={() => window.history.back()}
    className="mb-6 px-4 py-2 border-accent text-accent hover:bg-accent/10 hover:text-foreground" // Adjusted padding and added hover effects
>
    {isArabic ? "← العودة للمنتجات" : "← Back to Products"}
</Button>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-card p-6 sm:p-10 rounded-xl shadow-lg border border-accent/20">
                        
                        {/* Product Image Gallery Column */}
                        <div className="flex flex-col sm:flex-row lg:flex-row gap-6">
                            
                            {/* Thumbnails */}
                            <div className={`flex flex-row sm:flex-col gap-3 ${isArabic ? 'sm:order-2' : 'sm:order-1'} justify-center sm:justify-start`}>
                                {/* FIX APPLIED HERE: Now using productImages which is correctly defined */}
                                {productImages.map((path, index) => (
                                    <Image
                                        key={index}
                                        src={path}
                                        alt={`${isArabic ? nameAr : nameEn} image ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className={`rounded-md object-cover border-2 cursor-pointer transition 
                                            ${path === mainImage ? 'border-accent shadow-md' : 'border-accent/20 opacity-70'}`}
                                        onClick={() => setMainImage(path)}
                                    />
                                ))}
                            </div>

                            {/* Main Image Viewer */}
                            <div className={`flex justify-center items-start flex-grow ${isArabic ? 'sm:order-1' : 'sm:order-2'}`}>
                                <Image
                                    src={mainImage}
                                    alt={isArabic ? nameAr : nameEn}
                                    width={500}
                                    height={500}
                                    priority
                                    className="w-full max-w-sm h-auto object-cover rounded-lg shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Product Details Column */}
                        <div>
                            <span className="text-sm font-semibold uppercase text-muted-foreground">
                                {isArabic ? categoryAr : categoryEn}
                            </span>
                            <h1 className="font-playfair text-4xl font-bold text-foreground mt-1 mb-4">
                                {isArabic ? nameAr : nameEn}
                            </h1>
                            
                            <p className="text-4xl font-extrabold text-accent mb-6">
                                {price} {isArabic ? "ر.ع" : "R.O"}
                            </p>

                            <h2 className="text-xl font-semibold border-b pb-2 mb-3 text-foreground">
                                {isArabic ? "الوصف" : "Description"}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {isArabic ? descriptionAr : descriptionEn}
                            </p>

                            {/* Call to Action */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            
                                <a 
  href="https://wa.me/96891274704"
  target="_blank"
  rel="noopener noreferrer noreferrer"
  className="inline-block"
>
  <Button 
    variant="outline" 
    className="group text-lg px-8 py-6 border-accent text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300"
  >
    <span className="mr-2">💬</span>
    {isArabic ? "محادثة واتساب" : "WhatsApp Chat"}
    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
  </Button>
</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer language={language} />
        </main>
    );
}