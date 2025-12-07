import Link from "next/link"

interface FooterProps {
  language?: "en" | "ar" // Make it optional
}

export default function Footer({ language = "en" }: FooterProps) {
  // Arabic translations
  const translations = {
    slogan: language === "ar" ? "الجمال والرفاهية في أرقى صورها" : "Luxury beauty and wellness at its finest.",
    services: language === "ar" ? "الخدمات" : "Services",
    facials: language === "ar" ? "العناية بالبشرة" : "Facials",
    hairStyles: language === "ar" ? "تسريحات الشعر والمزيد" : "Hair styles, and many more",
    company: language === "ar" ? "الشركة" : "Company",
    aboutUs: language === "ar" ? "من نحن" : "About Us",
    contact: language === "ar" ? "اتصل بنا" : "Contact",
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
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-xl font-bold text-accent mb-4">
              {language === "ar" ? "أنجل جلو" : "Angel Glow"}
            </h3>
            <p className="text-muted-foreground text-sm">{translations.slogan}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{translations.services}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  {translations.facials}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  {translations.hairStyles}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{translations.company}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  {translations.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  {translations.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{translations.followUs}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition">
                  {translations.instagram}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  {translations.facebook}
                </Link>
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