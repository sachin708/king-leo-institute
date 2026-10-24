"use client";

import React, { useState } from "react";
import { WhatsAppIcon, ChatBubbleIcon } from "@/components/ui/Icons";
import ChatBotModal from "@/components/chat/ChatBotModal";

/**
 * FloatingActions Component
 * Positioned in the bottom-right corner:
 * 1. WhatsApp Button: opens WhatsApp directly
 * 2. Chatbot Button: opens the interactive Kingleo Institute chatbot modal
 */
export default function FloatingActions({
  whatsappNumber = "919584228615",
  whatsappMessage = "Hi Kingleo Institute, I would like to inquire about tattoo services and courses.",
  instituteName = "Kingleo Institute",
  chatbotLogo = "/icons/Kinglio-back.jpg",
  className = "",
}) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <div
        className={`fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-center gap-3 select-none ${className}`.trim()}
      >
        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" color="#ffffff" />
          {/* Tooltip on hover */}
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Chatbot Toggle Floating Button */}
        <button
          type="button"
          onClick={() => setIsChatOpen((prev) => !prev)}
          aria-label="Open Kingleo AI Chatbot"
          aria-expanded={isChatOpen}
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-zinc-900/90 hover:bg-black text-white flex items-center justify-center border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.9)] hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <ChatBubbleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-100" />
          {/* Tooltip on hover */}
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 shadow-md">
            {isChatOpen ? "Close Assistant" : "Ask Kingleo Assistant"}
          </span>
        </button>
      </div>

      {/* Interactive ChatBot Modal */}
      <ChatBotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        instituteName={instituteName}
        logoSrc={chatbotLogo}
        whatsappNumber={whatsappNumber}
      />
    </>
  );
}
