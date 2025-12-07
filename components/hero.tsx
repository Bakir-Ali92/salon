import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";

  return (
    <section className={`relative pt-28 px-0 flex flex-col border-amber-300 items-center ${isAr ? "rtl" : "ltr"}`}>
      
      {/* Header Section */}
      <div className="w-[95%] mx-auto bg-black text-white py-8 px-4 flex flex-col sm:flex-row 
                      items-center justify-evenly mb-8 border-2 border-amber-600 rounded-xl">

        {/* LEFT — LOGO */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 sm:mb-0">
          <Image src="/logo.jpg" alt="Angel Glow Logo" fill className="object-cover rounded-full" />
        </div>

        {/* CENTER — TEXT */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-[#d4b27f]">
            {isAr ? "أنجل جلو" : "Angel Glow"}
          </h1>

          <h2 className="text-lg sm:text-xl tracking-wide mt-2 text-[#d4b27f]">
            {isAr ? "صالون تجميل" : "BEAUTY SALON"}
          </h2>
        </div>

        {/* RIGHT — ARABIC OR ENGLISH DESCRIPTION */}
        <div className={`text-center sm:text-right mt-6 sm:mt-0`}>
          {isAr ? (
            <>
              <p className="text-lg sm:text-xl text-[#d4b27f]">جمالك... لمسة فخامة</p>
              <p className="mt-2 text-sm text-gray-300">بسمة الأمل المتطورة</p>
            </>
          ) : (
            <>
              <p className="text-lg sm:text-xl text-[#d4b27f]">Angel Glow</p>
              <p className="mt-2 text-sm text-gray-300">Modern Beauty & Elegance</p>
            </>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full text-center py-1 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          {isAr ? "أضيئي داخلك" : "Embrace Your "}
          <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            {isAr ? "الجمال الداخلي" : "Inner Glow"}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {isAr
            ? "اختبري الفخامة في عالم الجمال. من العناية بالبشرة إلى العلاجات المميزة، أنجل جلو يبرز جمالك الطبيعي."
            : "Experience the pinnacle of luxury beauty. From premium skincare to exclusive treatments, Angel Glow brings out your natural radiance."
          }
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/services">
            <button className="text-white bg-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/90">
              {isAr ? "الخدمات" : "View Services"}
            </button>
          </Link>

          <Link href="/products">
            <button className="border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10">
              {isAr ? "المنتجات" : "Explore Products"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
