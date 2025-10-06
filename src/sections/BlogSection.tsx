// src/sections/BlogSection.tsx
"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";


const BlogSection: React.FC = () => {
    const posts: BlogPost[] = [
        {
            title: "Novas Regras do Home Office: O que o Empregador Precisa Saber",
            summary:
                "Análise das atualizações na legislação trabalhista brasileira e seus impactos.",
            date: "25 SET 2025",
        },
        {
            title: "A Importância da LGPD para Pequenas Empresas",
            summary:
                "Como a Lei Geral de Proteção de Dados afeta seu negócio e como se adequar de forma simples.",
            date: "10 AGO 2025",
        },
        {
            title: "Inventário Judicial vs. Extrajudicial: Qual a Melhor Opção?",
            summary:
                "Um guia completo sobre as vias de regularização de bens após o falecimento.",
            date: "01 JUL 2025",
        },
    ];

    return (
        <section id="blog" className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-[Garamond] font-bold text-[#0A1931] mb-4">
                    Blog e Artigos
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Fique por dentro das últimas novidades do mundo jurídico.
                </p>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {posts.map((post) => (
                        <div
                            key={post.title}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform-gpu hover:-translate-y-1"
                        >
                            <div className="h-48 bg-[#0A1931] flex items-center justify-center">
                                <p className="text-xl font-bold text-[#C8A97E]">
                                    {post.date}
                                </p>
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-[Garamond] font-semibold text-[#0A1931] mb-3 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    {post.summary}
                                </p>
                                <a
                                    href="#"
                                    className="text-[#C8A97E] font-semibold flex items-center hover:text-yellow-700 transition-colors"
                                >
                                    Ler Mais{" "}
                                    <ArrowRight className="ml-1 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
