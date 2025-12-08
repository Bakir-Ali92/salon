// src/lib/products.ts

// 1. Define a shape for a single video
export interface ProductVideo {
  url: string;
  thumbnail: string;
}

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
  // 👇 REPLACED videoPaths/videoThumbnail with this:
  videos?: ProductVideo[]; 
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
     descriptionEn: "Experience the radiance of Angel Glow Cream. This powerful formula is designed to lighten and brighten your skin tone by 4 to 8 shades. It effectively reduces dark spots, pigmentation, and uneven skin tone, leaving your skin soft, glowing, and flawlessly radiant. Suitable for all skin types.",
    descriptionAr: "اكتشفي سر الجمال مع كريم أنجل جلو. تركيبة قوية مصممة لتفتيح وتبييض لون البشرة من ٤ إلى ٨ درجات. يعمل بفعالية على إزالة البقع الداكنة والتصبغات وتوحيد لون البشرة، مما يمنحك بشرة ناعمة ومشرقة وخالية من العيوب. مناسب لجميع أنواع البشرة.",
    imagePath: "/cream1.jpg",
    imagePaths: ["/cream1.jpg", "/cream2.jpg", "/cream3.jpg"],
    videos: [] // No videos
  },
  {
    id: 2,
    slug: "ls-beauty-hair-oil",
    nameEn: "LS Beauty Hair Oil",
    nameAr: "زيت الشعر LS Beauty",
    price: 5,
    categoryEn: "Hair Care Products",
    categoryAr: "منتجات العناية بالشعر",
    descriptionEn: "Revitalize your hair with LS Beauty Hair Oil. This potent natural formula is specifically crafted to stop hair fall and stimulate hair regrowth. It nourishes the scalp, strengthens hair follicles from the root, and promotes thicker, healthier hair. Perfect for restoring volume and vitality to thinning hair.",
    descriptionAr: "جددي حيوية شعرك مع زيت LS Beauty. تركيبة طبيعية فعالة صممت خصيصاً لوقف تساقط الشعر وتحفيز إنبات الشعر من جديد. يغذي فروة الرأس ويقوي بصيلات الشعر من الجذور، ويساعد على تكثيف الشعر ومنحه الصحة واللمعان. الحل الأمثل لاستعادة كثافة الشعر وحيويته.",
    imagePath: "/oil1.jpg",
    imagePaths: ["/oil1.jpg", "/oil2.jpg"],
    
    // 👇 HERE IS HOW YOU ADD MULTIPLE VIDEOS WITH THUMBNAILS
    videos: [
      {
        url: "/oil3.mp4",
        thumbnail: "/oil3thumbnail.jpg" // Thumbnail for the first video
      },
      {
        url: "/oil4.mp4", // Example second video
        thumbnail: "/oil4thumbnail.jpg" // Specific thumbnail for second video
      }
    ]
  },
];

export function getProducts() {
  return productDetails;
}