// src/components/layout/Footer.tsx
import React from "react";
import {
    Linkedin,
    MessageCircle,
    Twitter,
    MapPin,
    Clock,
    Phone,
} from "lucide-react";

interface SectionLink {
    name: string;
    href: string;
}

const SECTIONS: SectionLink[] = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Áreas", href: "#areas" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contato" },
];

const Footer: React.FC = () => {
    const whatsappUrl = "https://wa.me/5511999999999";

    return (
        <footer
            className="bg-[#0A1931] py-12 border-t-8 border-[#C8A97E]"
            role="contentinfo"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#F8F9FA]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 mb-8 border-b border-[#C8A97E]/30">
                    {/* Coluna 1: Branding e Redes Sociais */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-3xl font-garamond font-bold text-[#C8A97E] mb-4">
                            G. RAMON | Site Conceitual
                        </h4>
                        <p className="text-sm mb-4">
                            Este é um projeto fictício criado por Guilherme
                            Ramon para fins de portfólio e demonstração de
                            design.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#F8F9FA] transition-colors"
                                aria-label="Siga no LinkedIn"
                            >
                                <Linkedin />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#F8F9FA] transition-colors"
                                aria-label="Siga no Twitter/X"
                            >
                                <Twitter />
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#C8A97E] transition-colors"
                                aria-label="Contato via WhatsApp"
                            >
                                <MessageCircle />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Menu Rápido */}
                    <div>
                        <h4 className="text-xl font-garamond font-bold text-[#C8A97E] mb-4">
                            Menu Rápido
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {SECTIONS.filter((s) => s.name !== "Início").map(
                                (s) => (
                                    <li key={s.name}>
                                        <a
                                            href={s.href}
                                            className="hover:text-[#C8A97E] transition-colors"
                                        >
                                            {s.name}
                                        </a>
                                    </li>
                                )
                            )}
                            <li>
                                <a
                                    href="#contato"
                                    className="hover:text-[#C8A97E] transition-colors"
                                >
                                    Agendar Demonstração
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Legal */}
                    <div>
                        <h4 className="text-xl font-garamond font-bold text-[#C8A97E] mb-4">
                            Informações
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#C8A97E] transition-colors"
                                >
                                    Política de Privacidade
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#C8A97E] transition-colors"
                                >
                                    Termos de Uso
                                </a>
                            </li>
                            <li>
                                <p className="text-xs text-gray-400 mt-2 italic">
                                    *Projeto fictício criado apenas para
                                    portfólio de desenvolvedor.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Localização */}
                    <div>
                        <h4 className="text-xl font-garamond font-bold text-[#C8A97E] mb-4">
                            Localização (Exemplo)
                        </h4>
                        <div className="space-y-2 text-sm">
                            <p className="flex items-start">
                                <MapPin
                                    className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-[#C8A97E]"
                                    aria-hidden="true"
                                />
                                Av. Exemplo Legal, 1234 - Sala 101, Bairro da
                                Justiça - São Paulo/SP
                            </p>
                            <p className="flex items-center">
                                <Clock
                                    className="w-4 h-4 mr-2 flex-shrink-0 text-[#C8A97E]"
                                    aria-hidden="true"
                                />
                                Segunda a Sexta: 9h às 18h
                            </p>
                            <a
                                href="tel:+551155555555"
                                className="text-[#C8A97E] font-semibold hover:underline transition-colors mt-2 flex items-center"
                            >
                                <Phone
                                    className="w-4 h-4 mr-2 flex-shrink-0 text-[#C8A97E]"
                                    aria-hidden="true"
                                />
                                (11) 5555-5555
                            </a>
                        </div>
                    </div>
                </div>

                {/* Rodapé Inferior */}
                <div className="text-center text-sm pt-4">
                    <p>
                        &copy; {new Date().getFullYear()} Guilherme Ramon |
                        Projeto de Portfólio. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
