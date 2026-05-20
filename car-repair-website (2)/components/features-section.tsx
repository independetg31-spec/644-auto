"use client";

import { motion } from "framer-motion";
import { 
  Car, 
  Droplets, 
  Wrench, 
  Coffee, 
  CheckCircle, 
  UserCheck, 
  Cog,
  MapPin
} from "lucide-react";

const quickServices = [
  {
    icon: Car,
    title: "Сход-развал автомобиля",
    time: "от 30 минут"
  },
  {
    icon: Droplets,
    title: "Заправка автокондиционера",
    time: "от 35 минут"
  },
  {
    icon: Wrench,
    title: "Шиномонтаж",
    time: "от 25 минут"
  }
];

const benefits = [
  {
    icon: Coffee,
    title: "Комфортная комната отдыха"
  },
  {
    icon: CheckCircle,
    title: "Гарантия на все работы"
  },
  {
    icon: UserCheck,
    title: "Квалифицированные мастера"
  },
  {
    icon: Cog,
    title: "Оригинальные запчасти"
  }
];

const serviceAreas = [
  ["Балашиха", "Железнодорожный", "Северный", "Новый свет", "Салтыковка", "Щитниково"],
  ["Заря", "Авиаторов", "Гагарина", "Дзержинского", "Полтево", "Ольгино", "Лесной"],
  ["Центр", "Центр-2", "Никольско-Архангельский", "Дятловка", "Павлино", "Соболиха", "Чёрное"]
];

export function FeaturesSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Работаем быстро */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Работаем быстро
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-primary font-medium">{service.time}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Вас приятно удивит */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-6 lg:p-8 border-2 border-primary/20"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-6">
            Вас приятно удивит
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-medium text-foreground text-sm lg:text-base">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Районы обслуживания */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-6 lg:p-8 border-2 border-primary/20"
        >
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <p className="text-foreground">
              Адрес нашего автосервиса вы легко найдете{" "}
              <a href="#contacts" className="text-primary font-medium hover:underline">
                на карте
              </a>
              . Мы работаем во всех районах области, расположенных поблизости:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {serviceAreas.map((column, colIndex) => (
              <ul key={colIndex} className="space-y-2">
                {column.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-primary" />
                    {area}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
