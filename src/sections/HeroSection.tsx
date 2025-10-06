// src/sections/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Scale, ArrowRight, Briefcase } from "lucide-react";

const HeroSection: React.FC = () => {
    const TEXT_SIDE_IMAGE_URL = "/images/escritorio-moderno.jpg";

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#0A1931] transform-gpu"
        >
            <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:min-h-[calc(100vh-6rem)] py-12 lg:py-0">
                    {/* Texto */}
                    <div className="order-2 lg:order-first text-[#0A1931] text-center lg:text-left animate-fade-in">
                        <div className="mb-4 flex items-center justify-center lg:justify-start">
                            <Scale className="hidden lg:block w-8 h-8 mr-3 text-[#C8A97E]" />
                            <h2 className="text-lg font-medium tracking-widest uppercase text-[#C8A97E]/90">
                                G. Ramon | Advocacia Estratégica
                            </h2>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-garamond font-extrabold leading-tight mb-8 drop-shadow-lg animate-fade-in-delay text-white">
                            Excelência Jurídica
                            <br />
                            para Decisões{" "}
                            <span className="text-[#C8A97E]">Cruciais</span>.
                        </h1>

                        <p className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-12 font-extralight text-gray-300 animate-fade-in-delay">
                            Com profundo conhecimento em Direito Cível e
                            Empresarial, transformamos complexidades legais em
                            soluções claras e resultados tangíveis.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay">
                            <a
                                href="#contato"
                                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-[#C8A97E] text-[#0A1931] rounded-xl shadow-2xl transition-all duration-300 hover:bg-yellow-700 transform hover:scale-[1.03] active:scale-95 border-2 border-accent-gold w-full sm:w-auto"
                            >
                                Consulta Estratégica
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>

                            <a
                                href="#areas"
                                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold border-2 border-gray-600 text-gray-300 rounded-xl transition-all duration-300 hover:border-[#C8A97E] hover:text-[#C8A97E] hover:bg-gray-800 w-full sm:w-auto"
                            >
                                <Briefcase className="w-5 h-5 mr-2" />
                                Nossas Áreas
                            </a>
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="order-1 lg:order-last relative w-full h-80 sm:h-96 lg:h-full overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/50 animate-fade-in-delay">
                        <Image
                            src={TEXT_SIDE_IMAGE_URL}
                            alt="Interior moderno de um escritório de advocacia"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 hover:scale-105 transform-gpu"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-gray-900/20 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
