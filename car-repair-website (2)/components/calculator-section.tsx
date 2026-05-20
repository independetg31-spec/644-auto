"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, carBrands, priceList } from "@/lib/data";

export function CalculatorSection() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");

  const issues = [
    "Стук в подвеске",
    "Двигатель троит",
    "Увод в сторону",
    "Повышенный расход",
    "Горит Check Engine",
    "Не работает кондиционер",
    "Скрип тормозов",
    "Другое"
  ];

  return (
    <section id="calculator" className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Рассчитайте стоимость ремонта
              </h2>
              <p className="text-muted-foreground">
                Узнайте примерную стоимость работ за 1 минуту
              </p>
            </div>

            <div className="bg-background rounded-2xl border border-border/50 p-6 lg:p-8 space-y-6">
              {/* Brand Select */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Марка авто
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Выберите марку</option>
                  {carBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Услуга
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Выберите услугу</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Issue Select */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Проблема / симптом
                </label>
                <select
                  value={selectedIssue}
                  onChange={(e) => setSelectedIssue(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Выберите симптом</option>
                  {issues.map((issue) => (
                    <option key={issue} value={issue}>
                      {issue}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <Button size="lg" className="w-full gap-2">
                <Calculator className="w-5 h-5" />
                Рассчитать
                <ArrowRight className="w-4 h-4" />
              </Button>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                {[
                  { icon: Clock, text: "Быстрый расчет за 1 минуту" },
                  { icon: Check, text: "Точная стоимость без скрытых платежей" },
                  { icon: Calculator, text: "Запись онлайн в удобное время" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            id="prices"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Популярные услуги
              </h3>
              <p className="text-muted-foreground">
                Актуальные цены на основные виды работ
              </p>
            </div>

            <div className="space-y-3">
              {priceList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {item.service}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.category}
                    </div>
                  </div>
                  <div className="font-bold text-primary whitespace-nowrap">
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Точная стоимость определяется после диагностики
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
