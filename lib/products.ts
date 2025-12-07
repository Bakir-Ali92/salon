// src/lib/products.ts

export interface Product {
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
}

export const productDetails: Product[] = [
  {
    id: 1,
    slug: "angel-glow-cream",
    nameEn: "Angel Glow Cream",
    nameAr: "كريم أنجل جلو للتفتيح",
    price: 5,
    categoryEn: "Skin Care Products",
    categoryAr: "منتجات العناية بالبشرة",
    descriptionEn: "A powerful skin lightening and brightening cream that improves tone by 4 to 8 shades...",
    descriptionAr: "خلطة قوى للتبييض وتفتيح البشرة من ٤ إلى ٨ درجات...",
    imagePath: "/cream1.jpg",
    imagePaths: ["/cream1.jpg", "/cream2.jpg", "/cream3.jpg"]
  },
  {
    id: 2,
    slug: "ls-beauty-hair-oil",
    nameEn: "LS Beauty Hair Oil",
    nameAr: "زيت الشعر LS Beauty",
    price: 5,
    categoryEn: "Hair Care Products",
    categoryAr: "منتجات العناية بالشعر",
    descriptionEn: "LS Beauty Hair Oil is a highly effective, natural formula...",
    descriptionAr: "زيت طبيعي فعال لتقوية الشعر وتقليل التساقط...",
    imagePath: "/oil1.jpg",
    imagePaths: ["/oil1.jpg", "/oil2.jpg"]
  },
];

// === ADD THIS FUNCTION ===
export function getProducts() {
  return productDetails;
}