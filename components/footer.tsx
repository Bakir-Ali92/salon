import Link from "next/link"

interface FooterProps {
  language?: "en" | "ar" // Make it optional
}

export default function Footer({ language = "en" }: FooterProps) {
  // Arabic translations
  const translations = {
    slogan: language === "ar" ? "الجمال والرفاهية في أرقى صورها" : "Luxury beauty and wellness at its finest.",
    services: language === "ar" ? "الخدمات" : "Services",
    
    // Services List
    hairStyle: language === "ar" ? "تسريحة الشعر" : "Hair Style",
    collagenTreatment: language === "ar" ? "علاج الكولاجين للشعر" : "Collagen Hair Treatment",
    hina: language === "ar" ? "الحناء" : "Hina",
    wax: language === "ar" ? "الشمع" : "Wax",
    hairColour: language === "ar" ? "صبغة الشعر" : "Hair Colour",
    hairProtein: language === "ar" ? "علاج البروتين للشعر" : "Hair Protein Treatment",
    blowDry: language === "ar" ? "تجفيف الشعر بالهواء (سشوار)" : "Blow Dry",
    threading: language === "ar" ? "الخيط (الفتلة)" : "Threading",
    bleach: language === "ar" ? "تفتيح البشرة (بليتش)" : "Bleach",
    facial: language === "ar" ? "العناية بالبشرة (فيشال)" : "Facial",
    pedicure: language === "ar" ? "باديكير" : "Pedicure",
    manicure: language === "ar" ? "مانيكير" : "Manicure",

    company: language === "ar" ? "الشركة" : "Company",
    contact: language === "ar" ? "اتصل بنا" : "Contact",

    // New Follow Us translations
    followUs: language === "ar" ? "تابعونا" : "Follow Us",
    instagram: language === "ar" ? "إنستغرام" : "Instagram",
    facebook: language === "ar" ? "فيسبوك" : "Facebook",

    copyright: language === "ar" 
      ? "© ٢٠٢٥ أنجل جلو صالون التجميل. جميع الحقوق محفوظة." 
      : "© 2025 Angel Glow Beauty Salon. All rights reserved."
  }

  return (
    <footer 
      className="bg-card border-t border-accent/20 py-16 px-4 sm:px-6 lg:px-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Changed grid layout to 4 columns to fit the new section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* 1. Logo/Slogan Section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-accent mb-4">
              {language === "ar" ? "أنجل جلو" : "Angel Glow"}
            </h3>
            <p className="text-muted-foreground text-sm">{translations.slogan}</p>
          </div>

          {/* 2. Services Section */}
          <div>
            <Link href="/services" className="hover:text-accent transition">
              <h4 className="font-semibold text-foreground mb-4">{translations.services}</h4>
            </Link>
            <ul className="grid grid-cols-2 gap-x-4 space-y-2 text-sm text-muted-foreground">
              <li>{translations.hairStyle}</li>
              <li>{translations.collagenTreatment}</li>
              <li>{translations.hina}</li>
              <li>{translations.wax}</li>
              <li>{translations.hairColour}</li>
              <li>{translations.hairProtein}</li>
              <li>{translations.blowDry}</li>
              <li>{translations.threading}</li>
              <li>{translations.bleach}</li>
              <li>{translations.facial}</li>
              <li>{translations.pedicure}</li>
              <li>{translations.manicure}</li>
            </ul>
          </div>

          {/* 3. Company Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{translations.company}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  {translations.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. New Follow Us Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{translations.followUs}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                {/* Replace '#' with your actual Instagram URL */}
                <a href="https://www.instagram.com/angel_glow_saloon?igsh=MWV3Z2N4aGZjenB1dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition">
                  {translations.instagram}
                </a>
              </li>
             
            </ul>
          </div>

        </div>

        <div className="border-t border-accent/20 pt-8 flex flex-col sm:flex-row justify-center sm:justify-end items-center text-sm text-muted-foreground">
          <p>{translations.copyright}</p>
        </div>
      </div>
    </footer>
  )
}