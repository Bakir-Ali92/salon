'use client'

import Link from "next/link"
import React from "react"
// Make sure you have react-icons installed, or switch back to the SVG if not.
// npm install react-icons
import { FaWhatsapp } from "react-icons/fa"

interface ChatBubbleProps {
  language?: "en" | "ar";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ language = "en" }) => {
  const WHATSAPP_URL = "https://wa.me/96891274704"; 
  const chatText = language === "ar" ? "تحدث معنا" : "Chat with us";
  const isRTL = language === "ar";

  return (
    <Link 
      href={WHATSAPP_URL} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`
        fixed bottom-6 right-6 z-[100]
        flex items-center justify-center
        bg-[#25D366] text-white 
        rounded-full shadow-xl 
        hover:bg-[#128C7E] 
        transition-all duration-500 ease-in-out
        group cursor-pointer
        h-14 min-w-[3.5rem] /* Fixed height, minimum width ensures circle shape */
        overflow-hidden
      `}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Icon container */}
      <div className="flex items-center justify-center shrink-0 w-14 h-full">
        <FaWhatsapp className="text-3xl" /> {/* Increased icon size slightly */}
      </div>

      {/* Text with Smooth Slide Animation */}
      {/* We apply margin/padding here only on hover to prevent spacing issues when closed */}
      <span className={`
        max-w-0 opacity-0 
        group-hover:max-w-[200px] group-hover:opacity-100 
        group-hover:pr-6 /* Add padding to the right (end) when open */
        transition-all duration-500 ease-in-out 
        whitespace-nowrap font-medium
      `}>
        {chatText}
      </span>
    </Link>
  );
};

export default ChatBubble;