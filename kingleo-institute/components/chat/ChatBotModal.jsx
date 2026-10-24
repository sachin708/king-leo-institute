"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CloseIcon, SendIcon, WhatsAppIcon, PhoneIcon } from "@/components/ui/Icons";

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: "Welcome to Kingleo Institute! 🎨 How can we help you today? Explore our certified tattoo courses, book a studio consultation, or talk to our master artists.",
    time: "Just now",
  },
];

const QUICK_CHIPS = [
  { label: "🎓 Tattoo Courses", query: "Tell me about tattoo training courses" },
  { label: "📅 Free Consultation", query: "I want to book a free consultation" },
  { label: "💳 Course Fees & EMI", query: "What are the course fees and EMI options?" },
  { label: "📍 Studio Location", query: "Where is Kingleo Tattooz located?" },
  { label: "💬 Connect WhatsApp", query: "Can I talk to someone on WhatsApp?" },
];

/**
 * Interactive ChatBotModal Component
 * Includes Kingleo Institute branding with /icons/Kinglio-back.jpg, verified badge,
 * instant smart automated replies, quick chips, and WhatsApp handoff.
 */
export default function ChatBotModal({
  isOpen = false,
  onClose,
  instituteName = "Kingleo Institute",
  logoSrc = "/icons/Kinglio-back.jpg",
  whatsappNumber = "919584228615",
  phoneNumber = "+91 95842 28615",
}) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // Smart response logic
    setTimeout(() => {
      let botReply = "";
      const lower = text.toLowerCase();

      if (lower.includes("course") || lower.includes("train") || lower.includes("learn")) {
        botReply =
          "We offer comprehensive 360° Tattoo Art & Piercing certification programs, from foundation drawing to advanced real-skin practice, hygiene protocols, and machine mechanics. Would you like a brochure or to speak with a mentor?";
      } else if (lower.includes("consult") || lower.includes("book") || lower.includes("appointment")) {
        botReply =
          "Great! We offer 100% Free Consultations. You can visit our studio in Indore or discuss your tattoo idea online. Would you like us to schedule a call?";
      } else if (lower.includes("fee") || lower.includes("emi") || lower.includes("price") || lower.includes("cost")) {
        botReply =
          "We offer flexible easy monthly EMI options with 0% interest support for all our professional diploma and advanced tattoo courses. Reach out on WhatsApp for fee breakdown!";
      } else if (lower.includes("locat") || lower.includes("address") || lower.includes("indore") || lower.includes("where")) {
        botReply =
          "We are located in Indore, Madhya Pradesh! Known as the premier tattoo studio and institute in Central India.";
      } else if (lower.includes("whatsapp") || lower.includes("chat") || lower.includes("talk")) {
        botReply =
          `You can chat directly with our master artists and admission team on WhatsApp at +${whatsappNumber}. Click below to start!`;
      } else {
        botReply =
          "Thank you for reaching out! Our team is ready to help you with your tattoo aspirations. Feel free to connect directly via WhatsApp or call us anytime.";
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Kingleo Institute Chatbot"
      className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] md:w-[400px] h-[520px] max-h-[80vh] flex flex-col rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] animate-in fade-in slide-in-from-bottom-5 duration-200"
    >
      {/* Chatbot Top Navbar / Header */}
      <div className="flex items-center justify-between px-4 py-3.5 bg-zinc-950/90 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {/* Kingleo Black Image Logo / Avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-black shrink-0">
            <Image
              src={logoSrc}
              alt="Kingleo Institute"
              fill
              className="object-contain p-0.5"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm sm:text-base text-white tracking-wide">
                {instituteName}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-[11px] text-zinc-400 font-medium">
              Tattoo Academy & Studio • Online
            </span>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chatbot"
          className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gradient-to-b from-black/80 to-zinc-950/90">
        <div className="text-center my-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">
            Kingleo Support Assistant
          </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col max-w-[85%] ${
              msg.sender === "user" ? "self-end items-end" : "self-start items-start"
            }`}
          >
            <div
              className={`p-3 sm:p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-emerald-600 text-white rounded-br-xs"
                  : "bg-white/10 border border-white/15 text-zinc-100 rounded-bl-xs backdrop-blur-md"
              }`}
            >
              {msg.text}
            </div>
            <span className="text-[10px] text-zinc-500 mt-1 px-1">{msg.time}</span>
          </div>
        ))}

        {isTyping && (
          <div className="self-start flex items-center gap-1.5 p-3 rounded-2xl bg-white/10 border border-white/10 text-zinc-400 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-bounce [animation-delay:0.4s]" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestion Chips */}
      <div className="px-3 py-2 bg-black/60 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
        {QUICK_CHIPS.map((chip, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(chip.query)}
            className="shrink-0 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] text-zinc-200 transition-colors"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Input Field & Direct Action Row */}
      <div className="p-3 bg-zinc-950/95 border-t border-white/10 flex items-center gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Kingleo Institute..."
          className="flex-1 bg-white/5 border border-white/15 rounded-full px-4 py-2 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
        />
        <button
          type="button"
          onClick={() => handleSend()}
          disabled={!inputVal.trim()}
          aria-label="Send message"
          className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:hover:bg-emerald-600 text-white flex items-center justify-center transition-all shrink-0"
        >
          <SendIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Direct WhatsApp Callout at bottom */}
      <div className="px-3 py-1.5 bg-emerald-950/60 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-300">
        <span className="truncate">Need immediate human help?</span>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-white flex items-center gap-1 shrink-0"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" color="#25D366" />
          WhatsApp Live
        </a>
      </div>
    </div>
  );
}
