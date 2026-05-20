"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/data";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-8 lg:py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нам доверяют более 750 автовладельцев
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-background rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                  {review.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {review.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{review.car}</div>
                  </div>
                </div>

                {/* Date */}
                <div className="text-xs text-muted-foreground mt-3">
                  {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Смотреть все отзывы
          </a>
        </motion.div>
      </div>
    </section>
  );
}
