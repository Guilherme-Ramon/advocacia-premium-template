// src/sections/TeamSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/types";

/**
 * Seção de apresentação da equipe.
 * (Client Component devido ao uso do motion)
 */
const TeamSection: React.FC = () => {
    const team: TeamMember[] = [
        {
            name: "Dr. Guilherme Ramon",
            role: "Sócio Fundador | Direito Civil",
            photo: "https://placehold.co/100x100/C8A97E/0A1931?text=FL",
        },
        {
            name: "Dra. Isabela Mendes",
            role: "Advogada Sênior | Direito Empresarial",
            photo: "https://placehold.co/100x100/C8A97E/0A1931?text=IM",
        },
        {
            name: "Dr. Roberto Cruz",
            role: "Advogado Associado | Direito do Trabalho",
            photo: "https://placehold.co/100x100/C8A97E/0A1931?text=RC",
        },
    ];

    return (
        <section id="equipe" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-[Garamond] font-bold text-[#0A1931] mb-4">
                    Nossa Equipe
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Profissionais dedicados e altamente qualificados.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-xl shadow-lg bg-[#F8F9FA] transition-all duration-300 group overflow-hidden relative"
                        >
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-[#C8A97E]"
                                onError={(
                                    e: React.SyntheticEvent<
                                        HTMLImageElement,
                                        Event
                                    >
                                ) =>
                                    (e.currentTarget.src =
                                        "https://placehold.co/100x100/C8A97E/0A1931?text=USER")
                                } // Fallback
                            />
                            <h3 className="text-2xl font-[Garamond] font-semibold text-[#0A1931]">
                                {member.name}
                            </h3>
                            <p className="text-[#C8A97E] text-sm italic mb-4">
                                {member.role}
                            </p>

                            {/* Mini Biografia no Hover */}
                            <div className="absolute inset-0 bg-[#0A1931]/90 flex items-center justify-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl">
                                <p className="text-[#F8F9FA] text-sm text-center">
                                    {member.name} é especialista em{" "}
                                    {member.role.split("|")[1]?.trim() ||
                                        "Direito"}
                                    , com foco em litígios complexos.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
