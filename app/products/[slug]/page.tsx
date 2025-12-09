// app/products/[slug]/page.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { productDetails } from "@/lib/products"; 
import { usePathname } from 'next/navigation';
import { useLanguage } from "@/contexts/LanguageContext";

// Define the type for a single product matching your lib/products.ts
// 1. UPDATE INTERFACE
interface ProductVideo {
  url: string;
  thumbnail: string;
}

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
    imagePaths: string[];
    videos?: ProductVideo[]; // 👈 Updated to match new structure
}

// Function to simulate fetching a product by slug
const getProductBySlug = (slug: string): Product | undefined => {
    return productDetails.find(p => p.slug === slug);
};

export const runtime = 'edge';

export default function ProductDetailPage() {
    const { language } = useLanguage();
    
    const pathname = usePathname();
    const slug = pathname.split('/').pop() || '';

    const product = getProductBySlug(slug);

    // Combine images and videos into a single media array for the gallery
    // We'll store objects: { type: 'image' | 'video', src: string, poster?: string }
    const [mediaList, setMediaList] = useState<{ type: 'image' | 'video', src: string, poster?: string }[]>([]);
    const [currentMedia, setCurrentMedia] = useState<{ type: 'image' | 'video', src: string, poster?: string } | null>(null);

    useEffect(() => {
        if (product) {
            // Map images
            const images = (product.imagePaths || [product.imagePath]).map(src => ({ type: 'image' as const, src }));
            
            // Map videos using the new structure
            const videos = (product.videos || []).map(v => ({ 
                type: 'video' as const, 
                src: v.url, 
                poster: v.thumbnail 
            }));
            
            const combined = [...images, ...videos];
            setMediaList(combined);
            setCurrentMedia(combined[0]);
        }
    }, [product]);

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
    
    return (
        <main dir={language === "ar" ? "rtl" : "ltr"}>
            <Header cartCount={0} onCartClick={() => {}} />

            <div
                className={`min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${isArabic ? "text-right" : "text-left"}`}
                dir={isArabic ? "rtl" : "ltr"}
            >
                <div className="max-w-6xl mx-auto">
                    
                    {/* Back Button */}
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="mb-6 px-4 py-2 border-accent text-accent hover:bg-accent/10 hover:text-foreground"
                    >
                        {isArabic ? " العودة للمنتجات" : "Back to Products"}
                    </Button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-card p-6 sm:p-10 rounded-xl shadow-lg border border-accent/20">
                        
                        {/* Product Media Gallery Column */}
                        <div className="flex flex-col sm:flex-row lg:flex-row gap-6">
                            
                            {/* Thumbnails */}
                            <div className={`flex flex-row sm:flex-col gap-3 ${isArabic ? 'sm:order-2' : 'sm:order-1'} justify-center sm:justify-start overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0`}>
                                {mediaList.map((media, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setCurrentMedia(media)}
                                        className={`
                                            relative w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 transition
                                            ${currentMedia?.src === media.src ? 'border-accent shadow-md' : 'border-accent/20 opacity-70'}
                                        `}
                                    >
                                        {media.type === 'image' ? (
                                            <Image
                                                src={media.src}
                                                alt={`Thumbnail ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            /* Video Thumbnail with specific poster if available */
                                            <div className="relative w-full h-full">
                                                {media.poster ? (
                                                    <Image
                                                        src={media.poster}
                                                        alt={`Video Thumbnail ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-black/10 flex items-center justify-center">
                                                       {/* Fallback if no poster */}
                                                    </div>
                                                )}
                                                {/* Play Icon Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                                    <span className="text-2xl">▶️</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Main Media Viewer */}
                            <div className={`flex justify-center items-start flex-grow ${isArabic ? 'sm:order-1' : 'sm:order-2'}`}>
                                {currentMedia?.type === 'image' ? (
                                    <Image
                                        src={currentMedia.src}
                                        alt={isArabic ? nameAr : nameEn}
                                        width={500}
                                        height={500}
                                        priority
                                        className="w-full max-w-sm h-auto object-cover rounded-lg shadow-xl"
                                    />
                                ) : currentMedia?.type === 'video' ? (
                                    <video 
                                        controls 
                                        className="w-full max-w-sm h-auto rounded-lg shadow-xl bg-black"
                                        src={currentMedia.src}
                                        poster={currentMedia.poster} // 👈 Using specific thumbnail here 
                                        controlsList="nodownload"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                ) : null}
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
                                  rel="noopener noreferrer"
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