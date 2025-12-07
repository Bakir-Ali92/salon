// src/lib/services.ts

// Define the interface for a single service item
interface ServiceItem {
  nameEn: string;
  nameAr: string;
  price: number;
}

// Define the interface for a service category
export interface ServiceCategory {
  id: string;
  nameEn: string;
  nameAr: string;
  items: ServiceItem[];
}

export const servicesCategories: ServiceCategory[] = [
    {
      id: "hair-style",
      nameEn: "Hair Style",
      nameAr: "أسعار التسريحه",
      items: [
        { nameEn: "Hair Normal", nameAr: "تسريحه بسيطه", price: 10 },
        { nameEn: "Hair Rolls Simple Style", nameAr: "تسريحه شعر الحاضرات", price: 15 },
        { nameEn: "Hair Style New", nameAr: "تسريحه 3D جديده", price: 25 },
      ],
    },
    {
      id: "collagen",
      nameEn: "Collagen Hair Treatment",
      nameAr: "علاج كولاجين الشعر",
      items: [
        { nameEn: "Short Hair", nameAr: "كولاجين لشعر قصير", price: 10 },
        { nameEn: "Medium Hair", nameAr: "كولاجين لشعر متوسط", price: 15 },
        { nameEn: "Long Hair", nameAr: "كولاجين لشعر الطويل", price: 25 },
      ],
    },
    {
      id: "hina",
      nameEn: "Hina",
      nameAr: "الجناء",
      items: [
        { nameEn: "Bottom and plain", nameAr: "قاع و ساده", price: 4 },
        { nameEn: "Fingers", nameAr: "أصابع اليد", price: 4 },
        { nameEn: "Palm length", nameAr: "طول كتف اليد", price: 5 },
        { nameEn: "Hand text length", nameAr: "طول نص اليد", price: 7 },
        { nameEn: "Elbow length", nameAr: "طول كوع اليد", price: 10 },
        { nameEn: "Foot", nameAr: "القدم", price: 7 },
        { nameEn: "Text man", nameAr: "نص الرجل", price: 14 },
        { nameEn: "The length of a man's knees", nameAr: "طول ركب الرجل", price: 20 },
      ],
    },
    {
      id: "wax",
      nameEn: "Wax",
      nameAr: "حلاوة",
      items: [
        { nameEn: "Wax full face", nameAr: "حلاوة خاص الوجه", price: 4 },
        { nameEn: "Wax eyebrow", nameAr: "حلاوة خاص الحواجب", price: 2 },
        { nameEn: "Wax half hand", nameAr: "حلاوة نص اليدين", price: 3 },
        { nameEn: "Wax half legs", nameAr: "حلاوة نص الرجل", price: 3 },
        { nameEn: "Wax full hand", nameAr: "حلاوة كامل اليدين", price: 5 },
        { nameEn: "Wax full legs", nameAr: "حلاوة كامل الرجل", price: 5 },
        { nameEn: "Wax neck", nameAr: "حلاوة رقبه", price: 2 },
        { nameEn: "Wax underarm", nameAr: "حلاوة ابط", price: 1 },
        { nameEn: "Wax full body", nameAr: "حلاوة كامل الجسم", price: 15 },
      ],
    },
    {
      id: "hair-colour",
      nameEn: "Hair Colour",
      nameAr: "صبغه للشعر",
      items: [
        { nameEn: "Colour Short hair", nameAr: "صبغه الشعر القصير لون واحد", price: 10 },
        { nameEn: "Colour medium hair", nameAr: "صبغه الشعر متوسط", price: 15 },
        { nameEn: "Colour large hair", nameAr: "صبغه الشعر الطويل", price: 25 },
      ],
    },
    {
      id: "hair-protein",
      nameEn: "Hair Protein Treatment",
      nameAr: "علاج بروتين الشعر",
      items: [
        { nameEn: "Short hair protein", nameAr: "شعر قصير خفيف", price: 25 },
        { nameEn: "Medium hair protein", nameAr: "شعر متوسط", price: 30 },
        { nameEn: "Large hair protein", nameAr: "شعر الطويل", price: 40 },
        { nameEn: "Colour with protein", nameAr: "صبغه الشعر مع بروتين", price: 50 },
      ],
    },
    {
      id: "blow-dry",
      nameEn: "Blow Dry",
      nameAr: "اسعار استشوار",
      items: [
        { nameEn: "Blow Dry Short Hair", nameAr: "استشوار الشعر قصير", price: 5 },
        { nameEn: "Blow Dry Medium Hair", nameAr: "استشوار الشعر متوسط", price: 7 },
        { nameEn: "Blow Dry Long Hair", nameAr: "استشوار الشعر الطويل", price: 10 },
      ],
    },
    {
      id: "threading",
      nameEn: "Threading",
      nameAr: "حف",
      items: [
        { nameEn: "Threading full", nameAr: "حف الوجه", price: 4 },
        { nameEn: "Thread eyebrow", nameAr: "حف الحواجب", price: 2 },
        { nameEn: "Thread upper lip", nameAr: "حف شارب", price: 2 },
        { nameEn: "Thread neck", nameAr: "حف رقبه", price: 1 },
        { nameEn: "Thread full with steam, face mask", nameAr: "حف كامل وجه مع بخار. ماسك", price: 5 },
      ],
    },
    {
      id: "bleach",
      nameEn: "Bleach",
      nameAr: "تشقير",
      items: [
        { nameEn: "Bleach full face", nameAr: "تشقير كامل وجه", price: 3 },
        { nameEn: "Bleach eyebrow", nameAr: "تشقير الحواجب", price: 2 },
        { nameEn: "Bleach half hand", nameAr: "تشقير نص اليدين", price: 3 },
        { nameEn: "Bleach half leg", nameAr: "تشقير نص الرجل", price: 3 },
      ],
    },
    {
      id: "facial",
      nameEn: "Facial",
      nameAr: "فيشال",
      items: [
        { nameEn: "Facial Normal", nameAr: "فيشال عادي", price: 4 },
        { nameEn: "Facial Whitening", nameAr: "فيشال تبييض", price: 7 },
        { nameEn: "Facial Gold", nameAr: "فيشال الذهب", price: 7 },
        { nameEn: "Facial Whitening VIP", nameAr: "فيشال تبييض VIP خاص", price: 10 },
        { nameEn: "Facial Vitamins C", nameAr: "فيشال وفيتامين سي", price: 8 },
        { nameEn: "Facial Whitening Full Body", nameAr: "فيشال تبييض كامل الجسم", price: 18 },
      ],
    },
    {
      id: "pedicure",
      nameEn: "Pedicure",
      nameAr: "بديكير",
      items: [
        { nameEn: "Pedicure whitening with steam", nameAr: "بديكير تنظيف مع بخار", price: 7 },
        { nameEn: "Pedicure whitening vip with steam", nameAr: "بديكير تبييض VIP مع بخار", price: 10 },
      ],
    },
    {
      id: "manicure",
      nameEn: "Manicure",
      nameAr: "منكير",
      items: [
        { nameEn: "Manicure with steam", nameAr: "منكير مع بخار", price: 6 },
        { nameEn: "Pedicure whitening vip with steam", nameAr: "منكير تبييض VIP مع بخار", price: 8 },
      ],
    },
];

export function getPremiumServices() {
  // For each category, pick the item with the highest price
  const premiumPerCategory = servicesCategories.map((category) => {
    const highestItem = category.items.reduce((max, item) =>
      item.price > max.price ? item : max
    );

    return {
      ...highestItem,
      categoryId: category.id,
      categoryEn: category.nameEn,
      categoryAr: category.nameAr,
    };
  });
 const sorted = premiumPerCategory.sort((a, b) => b.price - a.price);

//   // Return the top 4
  return sorted.slice(0, 7);
 // return premiumPerCategory; // returns the highest service from every category
}

export function getOffers(){

}