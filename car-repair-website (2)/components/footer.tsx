"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Send, Clock } from "lucide-react";
import { companyInfo, services } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-dark.png"
                alt="644 АВТО - Автосервис"
                width={140}
                height={52}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-background/70">
              Профессиональный ремонт и обслуживание автомобилей в Железнодорожном, Балашихе и Жулебино.
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`#services`}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { href: "#services", label: "Услуги" },
                { href: "#prices", label: "Цены" },
                { href: "#process", label: "Как работаем" },
                { href: "#reviews", label: "Отзывы" },
                { href: "#contacts", label: "Контакты" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  {companyInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\D/g, "")}`}
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm text-background/70">
                  {companyInfo.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm text-background/70">
                  {companyInfo.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            &copy; {currentYear} {companyInfo.name}. Все права защищены.
          </p>
          <p className="text-sm text-background/50">
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
}
