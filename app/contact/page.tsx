"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext" // Import context

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  
  // Remove local language state and use context instead
  const { language } = useLanguage()
  
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Update Header - remove language props */}
      <Header cartCount={0} onCartClick={() => {}} />
      <div className="bg-background pt-28 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Get in Touch" : "تواصل معنا"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === "en"
              ? "Have questions? We'd love to hear from you. Contact us today!"
              : "هل لديك أسئلة؟ نحن نود أن نسمع منك. تواصل معنا اليوم!"}
          </p>
        </section>

        {/* Contact Information Cards */}
         
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Location */}
            <a
                  href="https://maps.app.goo.gl/wYGDZquVXsghSVef8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition font-semibold"
                >
            <div className="bg-card border border-accent/20 rounded-xl p-8 text-center hover:border-accent/50 transition">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              
              <h3 className="font-semibold text-foreground mb-2">{language === "en" ? "Location" : "الموقع"}</h3>
              
              <p className="text-muted-foreground text-sm">{language === "en" ? "Salalah, Oman" : "صلالة، عمان"}</p>
            </div>
            </a>

            {/* Phone */}
            <a href="tel:+96891274704" className="hover:text-accent transition font-semibold">
            <div className="bg-card border border-accent/20 rounded-xl p-8 text-center hover:border-accent/50 transition">
              <Phone className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{language === "en" ? "Phone" : "الهاتف"}</h3>
              <p className="text-muted-foreground text-sm">
                                  +968 9127 4704
               
              </p>
            </div>
             </a>

            {/* WhatsApp */}
            <a
                  href="https://wa.me/96891274704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition font-semibold"
                >
            <div className="bg-card border border-accent/20 rounded-xl p-8 text-center hover:border-accent/50 transition">
              <MessageCircle className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">
                
                  {language === "en" ? "Chat with us" : "تحدث معنا"}
                
              </p>
            </div>
            </a>
            {/* Hours */}
            <div className="bg-card border border-accent/20 rounded-xl p-8 text-center hover:border-accent/50 transition">
  <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
  <h3 className="font-semibold text-foreground mb-2">
    {language === "en" ? "Hours" : "الساعات"}
  </h3>
  <p className="text-muted-foreground text-sm">
    {language === "en"
      ? "Sat - thurs: 11AM - 11PM\nFri: 4PM - 10PM"
      : `السبت - الخميس: 11 صباحاً - 11 مساءاً
الجمعة: 4 مساءاً - 10 مساءاً`}
  </p>
</div>
          </div>
        </section>


        {/* Contact Form Section */}
      
      </div>

      <Footer language={language} />
    </main>
  )
}
