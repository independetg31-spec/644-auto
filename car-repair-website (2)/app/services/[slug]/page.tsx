"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
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
  ArrowLeft,
  Phone,
  CheckCircle2,
  AlertCircle,
  Clock,
  Shield
} from "lucide-react";
import { services, companyInfo } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

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

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const service = services.find(s => s.id === slug);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Услуга не найдена</h1>
          <Link href="/" className="text-primary hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Circle;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              href="/#services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {service.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-background rounded-xl px-4 py-3 border border-border/50">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">{service.time}</span>
                </div>
                <div className="flex items-center gap-2 bg-background rounded-xl px-4 py-3 border border-border/50">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-medium">Гарантия</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-xl" asChild>
                  <a href={`tel:${companyInfo.phones[0].replace(/\s/g, "")}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Записаться
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl" asChild>
                  <a href={companyInfo.telegram} target="_blank" rel="noopener noreferrer">
                    Написать в Telegram
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src={`/services/${service.id}.jpg`}
                  alt={service.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Price Badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <div className="text-sm opacity-90">Стоимость от</div>
                <div className="text-3xl font-bold">{service.priceFrom.toLocaleString("ru-RU")} ₽</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Full Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                О услуге
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                {service.fullDescription?.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Что включено
              </h2>
              <div className="space-y-4">
                {service.features?.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 bg-muted/50 rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When Needed Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Когда нужна эта услуга
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Признаки того, что пора обратиться к специалистам
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.whenNeeded?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-background rounded-xl p-5 border border-border/50"
              >
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Стоимость услуг
            </h2>
            <p className="text-muted-foreground">
              Точную стоимость уточняйте по телефону
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl border border-border/50 overflow-hidden"
          >
            <div className="divide-y divide-border/50">
              {service.prices?.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-5 hover:bg-muted/30 transition-colors"
                >
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Нужна консультация?
              </h3>
              <p className="text-muted-foreground mb-6">
                Позвоните нам, и мы ответим на все ваши вопросы
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-xl" asChild>
                  <a href={`tel:${companyInfo.phones[0].replace(/\s/g, "")}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {companyInfo.phones[0]}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl" asChild>
                  <a href={`tel:${companyInfo.phones[1].replace(/\s/g, "")}`}>
                    {companyInfo.phones[1]}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Другие услуги
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 4)
              .map((otherService, index) => {
                const OtherIcon = iconMap[otherService.icon] || Circle;
                return (
                  <motion.div
                    key={otherService.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={otherService.href}
                      className="block h-full bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <OtherIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {otherService.shortName}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {otherService.description}
                      </p>
                      <div className="text-primary font-bold">
                        от {otherService.priceFrom.toLocaleString("ru-RU")} ₽
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
