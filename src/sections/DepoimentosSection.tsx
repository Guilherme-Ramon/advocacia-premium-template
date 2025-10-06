// src/sections/DepoimentosSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  client: string;
}

const DepoimentosSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Fui atendido com excelência e profissionalismo. Resolveram meu problema de família de forma rápida e sensível, demonstrando grande empatia.",
      client: "Carla T.",
    },
    {
      quote: "A consultoria empresarial foi fundamental para a expansão da minha empresa. Estratégia impecável e segurança jurídica que nos permitiu crescer.",
      client: "Empreiteira L.A.",
    },
    {
      quote: "Defesa trabalhista muito bem conduzida. O resultado superou minhas expectativas. Recomendo o escritório G. Ramon pela dedicação e competência!",
      client: "João P.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="depoimentos" className="py-24 bg-gray-950 text-light-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-gold mb-3">
          Confiança e Credibilidade
        </h2>
        <h3 className="text-4xl sm:text-5xl font-garamond font-bold mb-12 text-gray-100">
          O que Nossos Clientes Dizem
        </h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 pt-12 bg-gray-900 rounded-2xl shadow-xl border-t-4 border-accent-gold/50 hover:shadow-accent-gold/10 transition-shadow duration-300 transform hover:scale-[1.01] text-left h-full flex flex-col justify-between"
            >
              <Quote
                className="absolute top-4 left-6 text-accent-gold/40 w-10 h-10"
                aria-hidden="true"
              />
              <p className="text-xl italic mb-6 text-gray-200 leading-relaxed z-10">
                {t.quote}
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-lg text-accent-gold uppercase tracking-wider">
                  {t.client}
                </p>
                <p className="text-xs text-gray-400">Cliente Satisfeito</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <a
            href="#contato"
            className="inline-flex items-center text-lg font-medium text-accent-gold hover:text-yellow-500 transition-colors"
          >
            Solicite uma reunião e comece sua história de sucesso.
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
