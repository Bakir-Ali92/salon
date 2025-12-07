import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { getPremiumServices } from "@/lib/services"

export default function Services({ language = "en" }) {
  const services = getPremiumServices()
  const isAr = language === "ar"

  // 1. Translations
  const content = {
    title: isAr ? "خدماتنا" : "Our",
    titleHighlight: isAr ? "المميزة" : "Premium",
    titleSuffix: isAr ? "" : "Services",
    description: isAr 
      ? "اكتشفي مجموعتنا المختارة من خدمات التجميل والعناية الفاخرة"
      : "Discover our curated collection of luxury beauty and wellness services",
    // Changed Arabic from Saudi (ر.س) to Omani (ر.ع.) to match R.O
    currency: isAr ? "ر.ع." : "R.O" 
  }

  return (
    <section 
      id="services" 
      dir={isAr ? "rtl" : "ltr"} 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto ">
        
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            {content.title} <span className="text-accent">{content.titleHighlight}</span> {content.titleSuffix}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        <ScrollArea 
          className="w-full whitespace-nowrap rounded-md border border-accent/20" 
          type="always"
          dir={isAr ? "rtl" : "ltr"}
        >
          
          {/* Changed 'space-x-6' to 'gap-6'. 'gap' works automatically for both LTR and RTL. */}
          <div className="flex w-max gap-6 p-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`w-[300px] shrink-0 bg-card border border-accent/20 rounded-xl p-8 whitespace-normal ${isAr ? "text-right" : "text-left"}`}
              >
                {/* Updated Logic: Currency is always AFTER the price now (50 R.O / 50 ر.ع.) */}
                <div className="text-accent font-bold text-xl mb-3">
                  {service.price} {content.currency}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {isAr ? service.nameAr : service.nameEn}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {isAr ? service.categoryAr : service.categoryEn}
                </p>
              </div>
            ))}
          </div>

          <ScrollBar 
            orientation="horizontal" 
            className="h-3 bg-black p-[1px] [&>div]:bg-accent" 
          />
          
        </ScrollArea>

      </div>
    </section>
  )
}