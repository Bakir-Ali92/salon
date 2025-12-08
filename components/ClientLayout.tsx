"use client"

import type React from "react"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import ChatBubble from "@/components/ChatBubble" // ← Corrected import path

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { language } = useLanguage()

  // This effect updates the <html> tag's dir and lang attributes
  // whenever the language changes (e.g., switching to Arabic)
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  return (
    <>
      {children}
      {/* The ChatBubble is placed here, available on every page */}
      <ChatBubble language={language} />
    </>
  )
}