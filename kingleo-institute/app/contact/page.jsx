"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MenuModal from "@/components/layout/MenuModal";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/floating/FloatingActions";
import { contactContent } from "@/app/content/contact/contact";
import { heroContent } from "@/app/content/home/hero";
import { subPageFooterContent } from "@/app/content/home/footer";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full text-white flex flex-col overflow-x-clip selection:bg-emerald-500 selection:text-black">
      <Navbar
        logoSrc="/icons/Kinglio-white.png"
        logoAlt="Kingleo Tattooz"
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuItems={heroContent.menuItems}
        phoneNumbers={heroContent.contact.phones}
        email={heroContent.contact.email}
      />

      <ContactSection {...contactContent} />

      <Footer {...subPageFooterContent} />

      <FloatingActions
        whatsappNumber={heroContent.contact.whatsapp}
        instituteName={heroContent.chatbot.instituteName}
        chatbotLogo={heroContent.chatbot.logoSrc}
      />
    </main>
  );
}
