// src/sections/AreasAtuacao.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Briefcase, Users, Heart } from "lucide-react";
import { Area } from "@/types";

/**
 * Seção detalhando as áreas de especialização.
 * (Client Component devido ao uso do motion)
 */
const AreasAtuacao: React.FC = () => {
    const areas: Area[] = [
        {
            icon: Scale,
            title: "Direito Civil",
            description:
                "Contratos, indenizações, propriedade e responsabilidade civil.",
        },
        {
            icon: Briefcase,
            title: "Direito Empresarial",
            description:
                "Abertura, fusões, aquisições e contencioso societário.",
        },
        {
            icon: Users,
            title: "Direito Trabalhista",
            description:
                "Reclamações, defesas trabalhistas e consultoria preventiva.",
        },
        {
            icon: Heart,
            title: "Direito de Família",
            description: "Divórcio, pensão alimentícia, guarda e inventários.",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="areas" className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-[Garamond] font-bold text-[#0A1931] mb-4">
                    Áreas de Atuação
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Nossa experiência a serviço dos seus desafios.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-t-4 border-[#C8A97E]"
                        >
                            <area.icon className="mx-auto text-[#C8A97E] text-5xl mb-4" />
                            <h3 className="text-2xl font-[Garamond] font-semibold text-[#0A1931] mb-3">
                                {area.title}
                            </h3>
                            <p className="text-gray-600">{area.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AreasAtuacao;
