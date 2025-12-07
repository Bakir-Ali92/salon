// lib/gallery.ts
export type MediaType = 'image' | 'video';

export interface Category {
    id: string;
    nameEn: string;
    nameAr: string; 
}

export interface GalleryItem {
    id: number;
    category: string;
    titleEn: string;
    titleAr: string;
    mediaUrl: string; // Use for both images and videos
    mediaType: MediaType; // 'image' or 'video'
    thumbnail?: string; // For videos (optional)
    duration?: string; // For videos
    descriptionEn?: string;
    descriptionAr?: string;
}

export const categories: Category[] = [
    { id: "all", nameEn: "All", nameAr: "الكل" },
    { id: "manicure", nameEn: "Menicure", nameAr: "منيكير" },
    { id: "henna", nameEn: "Henna", nameAr: "الحناء" },
    { id: "hair", nameEn: "Hair", nameAr: "الشعر" },
    { id: "pedicure", nameEn: "Pedicure", nameAr:" بديكير" },
    { id: "facial", nameEn: "Facial", nameAr: "الوجه" },
    { id: "salon", nameEn: "Salon", nameAr: "الصالون" }
];

export const galleryitems: GalleryItem[] = [
    // Images
    {
        id: 1,
        category: "facial",
        titleEn: "facial",
        titleAr: "مكياج العروس",
        mediaUrl: "/facial7.jpg",
        mediaType: "image"
    },
    {
        id: 2,
        category: "salon",
        titleEn: "Salon Interior",
        titleAr: "ديكور الصالون",
        mediaUrl: "/salon1.jpg",
        mediaType: "image"
    },
    {
        id: 3,
        category: "salon",
        titleEn: "Salon Interior",
        titleAr: "ديكور الصالون",
        mediaUrl: "/salon2.jpg",
        mediaType: "image"
    },
    {
        id: 4,
        category: "salon",
        titleEn: "Salon Interior",
        titleAr: "ديكور الصالون",
        mediaUrl: "/salon3.jpg",
        mediaType: "image"
    },
    {
        id: 5,
        category: "salon",
        titleEn: "Salon Interior",
        titleAr: "ديكور الصالون",
        mediaUrl: "/salon4.jpg",
        mediaType: "image"
    },
    {
        id: 6,
        category: "salon",
        titleEn: "Salon Interior",
        titleAr: "ديكور الصالون",
        mediaUrl: "/salon5.jpg",
        mediaType: "image"
    },
    {
        id: 7,
        category: "salon",
        titleEn: "Salon Interior",
        titleAr: "ديكور الصالون",
        mediaUrl: "/salon6.jpg",
        mediaType: "image"
    },
    {
        id: 8,
        category: "salon",
        titleEn: "Salon Interior",
        titleAr: "ديكور الصالون",
        mediaUrl: "/salon7.jpg",
        mediaType: "image"
    },
    {
        id: 9,
        category: "salon",
        titleEn: "Salon Interior",
        titleAr: "ديكور الصالون",
        mediaUrl: "/salon8.jpg",
        mediaType: "image"
    },
    
    // Videos
    {
        id: 10,
        category: "facial",
        titleEn: "facial",
        titleAr: "تعليم تسريحة الشعر",
        mediaUrl: "/facial1.mp4",
        mediaType: "video",
        thumbnail: "/facial1.jpg",
        duration: "00:16",
        descriptionEn: "Learn professional hair styling techniques",
        descriptionAr: "تعلم تقنيات تصفيف الشعر الاحترافية"
    },
    {
        id: 11,
        category: "facial",
        titleEn: "facial",
        titleAr: "عرض علاج الوجه",
        mediaUrl: "/facial2.mp4",
        mediaType: "video",
        thumbnail: "/facial2.jpg",
        duration: "00:16",
        descriptionEn: "Complete facial treatment process",
        descriptionAr: "عملية العلاج الكامل للوجه"
    },
    {
        id: 12,
        category: "facial",
        titleEn: "facial",
        titleAr: "جولة في الصالون",
        mediaUrl: "/facial3.mp4",
        mediaType: "video",
        thumbnail: "/facial3.jpg",
        duration: "00:09",
        descriptionEn: "Behind the scenes look at our luxury salon",
        descriptionAr: "نظرة خلف الكواليس لصالوننا الفاخر"
    },
    {
        id: 13,
        category: "facial",
        titleEn: "facial",
        titleAr: "تحول مكياج العروس",
        mediaUrl: "/facial4.mp4",
        mediaType: "video",
        thumbnail: "/facial4.jpg",
        duration: "00:15",
        descriptionEn: "Complete bridal makeup transformation",
        descriptionAr: "تحول كامل لمكياج العروس"
    },
    {
        id: 14,
        category: "facial",
        titleEn: "facial",
        titleAr: "مراجعة العميلة - سارة",
        mediaUrl: "/facial5.mp4",
        mediaType: "video",
        thumbnail: "/facial5.jpg",
        duration: "00:13",
        descriptionEn: "Hear from our satisfied clients",
        descriptionAr: "استمع إلى عملائنا الراضين"
    },
    {
        id: 15,
        category: "facial",
        titleEn: "facial",
        titleAr: "دليل تطبيق الحناء",
        mediaUrl: "/facial6.mp4",
        mediaType: "video",
        thumbnail: "/facial6.jpg",
        duration: "00:12",
        descriptionEn: "Step-by-step henna application",
        descriptionAr: "تطبيق الحناء خطوة بخطوة"
    },
    {
        id: 16,
        category: "henna",
        titleEn: "Henna Application Demo",
        titleAr: "عرض تطبيق الحناء",
        mediaUrl: "/henna1.mp4",
        mediaType: "video",
        thumbnail: "/henna1.jpg",
        duration: "00:26"
    },
    {
        id: 17,
        category: "henna",
        titleEn: "Henna Application Demo",
        titleAr: "عرض تطبيق الحناء",
        mediaUrl: "/henna2.mp4",
        mediaType: "video",
        thumbnail: "/henna2.jpg",
        duration: "00:12"
    },
{
    id: 18,
    category: "hair",
    titleEn: "Hair Styling Techniques",
    titleAr: "تقنيات تصفيف الشعر",
    mediaUrl: "/hairs1.mp4",
    mediaType: "video",
    thumbnail: "/hairs1.jpg",
    duration: "00:07",
    descriptionEn: "Professional hair styling techniques demonstration",
    descriptionAr: "عرض تقنيات تصفيف الشعر الاحترافية"
},
{
    id: 19,
    category: "hair",
    titleEn: "Hair Coloring Process",
    titleAr: "عملية صبغ الشعر",
    mediaUrl: "/hairs2.mp4",
    mediaType: "video",
    thumbnail: "/hairs2.jpg",
    duration: "00:08",
    descriptionEn: "Complete hair coloring and treatment process",
    descriptionAr: "عملية صبغ ومعالجة الشعر الكاملة"
},
{
    id: 20,
    category: "hair",
    titleEn: "Hair Treatment Therapy",
    titleAr: "علاج العلاج للشعر",
    mediaUrl: "/hairs3.mp4",
    mediaType: "video",
    thumbnail: "/hairs3.jpg",
    duration: "00:10",
    descriptionEn: "Deep conditioning and hair therapy session",
    descriptionAr: "جلسة الترطيب العميق وعلاج الشعر"
},
{
    id: 21,
    category: "hair",
    titleEn: "Professional Haircut",
    titleAr: "قص شعر احترافي",
    mediaUrl: "/hairs4.mp4",
    mediaType: "video",
    thumbnail: "/hairs4.jpg",
    duration: "00:16",
    descriptionEn: "Professional haircut and styling session",
    descriptionAr: "جلسة قص وتصفيف الشعر الاحترافية"
},
{
    id: 22,
    category: "hair",
    titleEn: "Hair Extensions Installation",
    titleAr: "تركيب امتدادات الشعر",
    mediaUrl: "/hairs5.mp4",
    mediaType: "video",
    thumbnail: "/hairs5.jpg",
    duration: "00:05",
    descriptionEn: "Professional hair extensions installation",
    descriptionAr: "تركيب امتدادات الشعر الاحترافية"
},
{
        id: 23,
        category: "manicure",
        titleEn: "Henna Application Demo",
        titleAr: "عرض تطبيق الحناء",
        mediaUrl: "/manicure1.mp4",
        mediaType: "video",
        thumbnail: "/manicure1.jpg",
        duration: "00:23"
},
{
        id: 24,
        category: "pedicure",
        titleEn: "Henna Application Demo",
        titleAr: "عرض تطبيق الحناء",
        mediaUrl: "/pedicure1.mp4",
        mediaType: "video",
        thumbnail: "/pedicure1.jpg",
        duration: "1:30"
}
];

export function getgalleryitems() {
    return galleryitems;
}

export function getcategories() {
    return categories;
}

export function getVideoItems() {
    return galleryitems.filter(item => item.mediaType === 'video');
}

export function getVideoCategories() {
    return [
        { id: "all", nameEn: "All Videos", nameAr: "جميع الفيديوهات" },
        { id: "tutorials", nameEn: "Tutorials", nameAr: "دروس تعليمية" },
        { id: "behind-scenes", nameEn: "Behind the Scenes", nameAr: "كواليس" },
        { id: "transformations", nameEn: "Transformations", nameAr: "تحولات" },
        { id: "testimonials", nameEn: "Client Testimonials", nameAr: "شهادات العملاء" },
    ];
}