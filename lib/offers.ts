  export interface Offer{
    nameEn:string;
    nameAr: string;
    priceEn:string;
    priceAr:string;
  }

  export interface serviceList{
    nameEn:string;
    nameAr: string;
    servicesConsumed:string;
  }
  

  export const specialOffers: Offer[] = [
    { nameEn: "5 services", nameAr: "٥ خدمات", priceEn: "10 R.O Only",priceAr:"١٠ ريال فقط" }
  ];
  export const serviceslist: serviceList[] = [
    { nameEn: "Half Hand Halawa", nameAr: "حلاقة نصف ابدي", servicesConsumed: "1" },
    { nameEn: "Half Legs Halawa", nameAr: "حلاقة نصف الرجل", servicesConsumed: "1" },
    { nameEn: "Half Hand Daika Massage", nameAr: "دلكه نصف ابدي", servicesConsumed: "1" },
    { nameEn: "Half Leg Daika Massage", nameAr: "دلكه نصف الرجل", servicesConsumed: "1" },
    { nameEn: "Steam Bath", nameAr: "حمام بخار", servicesConsumed: "2" },
    { nameEn: "Halawa Or Daika Massage For Neck", nameAr: "حلاقة او دلكة رقبه", servicesConsumed: "1" },
    { nameEn: "Halawa Or Daika Massage For Arms", nameAr: "حلاقة او دلكة اللابط", servicesConsumed: "1" },
    { nameEn: "Facial Cleaning", nameAr: "تنظيف فيمقرر", servicesConsumed: "1" },
    { nameEn: "Deep Facial", nameAr: "فيمقرر عميق", servicesConsumed: "2" },
    { nameEn: "Hydro Facial", nameAr: "صبغ و فيمقرر", servicesConsumed: "3" },
    { nameEn: "Pedicure", nameAr: "بديكير", servicesConsumed: "2" },
    { nameEn: "Manicure", nameAr: "ماديكير", servicesConsumed: "1" },
    { nameEn: "Cleaning & Steam Legs", nameAr: "تنظيف وبخار الرجل", servicesConsumed: "2" },
    { nameEn: "Cleaning & Steam Hands", nameAr: "تنظيف وبخار ابدي", servicesConsumed: "1" },
    { nameEn: "Nail Fixing", nameAr: "تركيب الطافر", servicesConsumed: "2" },
    { nameEn: "Heena half hand", nameAr: "حناء نص البدين", servicesConsumed: "3" },
    { nameEn: "Face Treading With Eyebrows", nameAr: "حف الوجه مع الحواجب", servicesConsumed: "2" },
    { nameEn: "Face Treading Without Eyebrows", nameAr: "حف الوجه بدون الحواجب", servicesConsumed: "1" },
    { nameEn: "Eyebrow Treading", nameAr: "حف حواجب", servicesConsumed: "1" },
    { nameEn: "Up Lips Treading", nameAr: "حف شارب", servicesConsumed: "1" },
    { nameEn: "Eyebrow Bleach", nameAr: "تنظيفير حواجب", servicesConsumed: "1" },
    { nameEn: "Eyebrow Colour", nameAr: "صبغ حواجب", servicesConsumed: "1" },
    { nameEn: "Face Bleach", nameAr: "تنظيفير الوجه", servicesConsumed: "1" },
    { nameEn: "Hair Oil Bath", nameAr: "حمام زيت شعر", servicesConsumed: "1" },
    { nameEn: "Hair Bowdry", nameAr: "استطفوار", servicesConsumed: "2" },
    { nameEn: "Wifi Or Curly", nameAr: "وبغي او كبيرني", servicesConsumed: "1" },
  ]

  export function getOffers() {
    return specialOffers;
  }

  export function getServicesList() {
    return serviceslist;
  }