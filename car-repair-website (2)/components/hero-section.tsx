"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calculator, Shield, Clock, Camera, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              <Shield className="w-4 h-4" />
              Гарантия на все работы до 2 лет
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Ремонт и обслуживание автомобилей{" "}
              <span className="text-primary">без навязанных работ</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              Честная диагностика. Фотоотчет по каждому этапу. Гарантия на работы.
              <br />
              <span className="font-medium text-foreground">
                Железнодорожный • Балашиха • Жулебино
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 text-base px-6" asChild>
                <a href={`tel:${companyInfo.phones[0].replace(/\D/g, "")}`}>
                  <Phone className="w-5 h-5" />
                  Записаться онлайн
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base px-6" asChild>
                <a href="#calculator">
                  <Calculator className="w-5 h-5" />
                  Рассчитать стоимость
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Clock, label: "12 лет", sublabel: "опыта работы" },
                { icon: Shield, label: "Гарантия", sublabel: "до 2 лет" },
                { icon: Camera, label: "Фотоотчет", sublabel: "по каждому этапу" },
                { icon: Clock, label: "Работаем", sublabel: "ежедневно" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image/Card Area */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 aspect-[4/3] lg:aspect-square">
              {/* Building Image */}
              <Image
                src="/building.webp"
                alt="Автосервис 644 АВТО - здание сервиса в Железнодорожном"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Stats Card */}
              <motion.a
                href="https://yandex.ru/profile/68807406263?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4 glass-card rounded-2xl p-4 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold">{companyInfo.rating}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Рейтинг на Яндекс</div>
                      <div className="text-xs text-muted-foreground">на основе 768 отзывов</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                        >
                          <Users className="w-4 h-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-foreground">{companyInfo.happyClients}</span>
                      <div className="text-xs text-muted-foreground">клиентов</div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
