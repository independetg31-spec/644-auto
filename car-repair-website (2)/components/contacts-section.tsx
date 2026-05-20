"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo, serviceAreas } from "@/lib/data";

export function ContactsSection() {
  return (
    <section id="contacts" className="py-8 lg:py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Приезжайте к нам или свяжитесь любым удобным способом
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Телефоны</h3>
                <div className="space-y-1">
                  {companyInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\D/g, "")}`}
                      className="block text-lg font-medium text-primary hover:underline"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Адрес</h3>
                <p className="text-muted-foreground text-sm">
                  {companyInfo.address}
                </p>
                <a
                  href={`https://yandex.ru/maps/?ll=${companyInfo.mapCoords.lng},${companyInfo.mapCoords.lat}&z=17`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary text-sm hover:underline"
                >
                  Как проехать
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Режим работы</h3>
                <p className="text-muted-foreground">
                  {companyInfo.workingHours}
                </p>
              </div>

              {/* Messenger Card */}
              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <MessageCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Мессенджеры</h3>
                <div className="flex gap-2">
                  <a
                    href={companyInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <Send className="w-4 h-4" />
                      Telegram
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-background rounded-2xl p-6 border border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Мы работаем в районах</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.slice(0, 15).map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary font-medium">
                  +{serviceAreas.length - 15} районов
                </span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border/50"
          >
            <iframe
              src={`https://yandex.ru/map-widget/v1/?um=constructor%3Af3e9cba6e29b58937f07c16642f5999fce4c2e93c0062cac3dd0c20e06ca90cb&source=constructor&ll=${companyInfo.mapCoords.lng},${companyInfo.mapCoords.lat}&z=16`}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title="Карта автосервиса 644 АВТО"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
