"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#prices", label: "Цены" },
    { href: "#process", label: "Как работаем" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="644 АВТО - Автосервис"
              width={160}
              height={60}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Phone */}
            <div className="hidden md:flex flex-col items-end">
              <a
                href={`tel:${companyInfo.phones[0].replace(/\D/g, "")}`}
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                {companyInfo.phones[0]}
              </a>
              <span className="text-xs text-muted-foreground">Ежедневно 9:00–21:00</span>
            </div>

            {/* CTA Buttons */}
            <a
              href={companyInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">Telegram</span>
              </Button>
            </a>

            <Button size="sm" className="gap-2" asChild>
              <a href={`tel:${companyInfo.phones[0].replace(/\D/g, "")}`}>
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Позвонить</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-background"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <a
                  href={`tel:${companyInfo.phones[0].replace(/\D/g, "")}`}
                  className="block px-4 py-2 font-semibold text-primary"
                >
                  {companyInfo.phones[0]}
                </a>
                <a
                  href={`tel:${companyInfo.phones[1].replace(/\D/g, "")}`}
                  className="block px-4 py-2 font-semibold text-primary"
                >
                  {companyInfo.phones[1]}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
