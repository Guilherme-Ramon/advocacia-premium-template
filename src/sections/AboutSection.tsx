"use client";

import React from "react";
import { Landmark, Handshake, Gavel } from "lucide-react";

interface ValueProp {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
}

const AboutSection: React.FC = () => {
    const values: ValueProp[] = [
        {
            icon: Landmark,
            title: "Experiência",
            desc: "Anos de atuação sólida e resultados comprovados.",
        },
        {
            icon: Handshake,
            title: "Confiança",
            desc: "Atendimento transparente e dedicação total ao seu caso.",
        },
        {
            icon: Gavel,
            title: "Ética",
            desc: "Compromisso inabalável com a moral e a legislação.",
        },
    ];

    const ACCENT_GOLD = "#C8A97E";
    const PRIMARY_DARK = "#0A1931";

    return (
        <section id="sobre" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Texto */}
                    <div className="text-center lg:text-left animate-fade-in">
                        <h2
                            className="text-4xl font-[Garamond] font-bold mb-6 border-b-2 inline-block pb-2"
                            style={{
                                color: PRIMARY_DARK,
                                borderBottomColor: ACCENT_GOLD,
                            }}
                        >
                            Nossa Missão e Valores
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Fundado pelo Dr. Guilherme Ramon, nosso escritório
                            nasceu com o propósito de oferecer soluções
                            jurídicas inovadoras e altamente éticas. Acreditamos
                            que o direito é uma ferramenta poderosa para a
                            transformação, e nossa missão é defender os
                            interesses de nossos clientes com a máxima
                            dedicação.
                        </p>
                        <p className="text-lg text-gray-700">
                            Valorizamos o relacionamento próximo e a estratégia
                            personalizada, garantindo que cada cliente se sinta
                            seguro e bem representado em todas as etapas do
                            processo.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((item, index) => (
                            <div
                                key={item.title}
                                className={`p-6 bg-[#F8F9FA] rounded-xl shadow-lg border-t-4 text-center cursor-pointer
                                           transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-xl animate-fade-in-delay`}
                                style={{
                                    borderTopColor: ACCENT_GOLD,
                                    animationDelay: `${index * 150}ms`,
                                }}
                            >
                                <item.icon
                                    className="mx-auto text-4xl mb-3"
                                    style={{ color: ACCENT_GOLD }}
                                />
                                <h3
                                    className="text-xl font-semibold mb-2"
                                    style={{ color: PRIMARY_DARK }}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
