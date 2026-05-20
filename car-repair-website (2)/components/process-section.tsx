"use client";

import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Search, 
  MessageSquare, 
  Camera, 
  Wrench, 
  Car 
} from "lucide-react";
import { processSteps } from "@/lib/data";

const stepIcons = [ClipboardList, Search, MessageSquare, Camera, Wrench, Car];

export function ProcessSection() {
  return (
    <section id="process" className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Как проходит ремонт
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачный процесс от записи до выдачи автомобиля
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    {/* Step Number & Icon */}
                    <div className="relative inline-flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-background border-2 border-border flex items-center justify-center mb-4 relative z-10">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-20">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-muted-foreground mb-4">
            Готовы начать? Запишитесь на диагностику прямо сейчас
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Записаться на ремонт
          </a>
        </motion.div>
      </div>
    </section>
  );
}
