"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Crosshair, 
  Wrench, 
  Flame, 
  Wind, 
  Zap, 
  Snowflake, 
  Circle, 
  Monitor,
  ArrowRight
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Crosshair,
  Wrench,
  Flame,
  Wind,
  Zap,
  Snowflake,
  Circle,
  Monitor,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-8 lg:py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автомобилей всех марок
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Circle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.href} className="block h-full">
                  <div className="h-full bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.shortName}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Price & Time */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div>
                        <div className="text-lg font-bold text-primary">
                          от {service.priceFrom.toLocaleString("ru-RU")} ₽
                        </div>
                        <div className="text-xs text-muted-foreground">{service.time}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <a
            href="#prices"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Смотреть все услуги
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
