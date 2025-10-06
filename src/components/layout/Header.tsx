// src/components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

// Interface para links do menu
interface SectionLink {
  name: string;
  href: string;
}

// Seções do site
const SECTIONS: SectionLink[] = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#sobre" },
  { name: "Áreas", href: "#areas" },
  { name: "Equipe", href: "#equipe" },
  { name: "Blog", href: "#blog" },
  { name: "Contato", href: "#contato" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Detecta rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 80);

      // Atualiza a seção ativa
      SECTIONS.forEach((section) => {
        const el = document.getElementById(section.href.substring(1));
        if (!el) return;

        const top = el.offsetTop - 150;
        const bottom = top + el.offsetHeight;
        if (offset >= top && offset < bottom) {
          setActiveSection(`#${el.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia scroll do body quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Fecha menu e define seção ativa ao clicar
  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    setActiveSection(href);
  };

  // Classes dinâmicas
  const textPrimary = isScrolled ? "text-primary-dark" : "text-light-bg";
  const logoPrimary = isScrolled ? "text-primary-dark" : "text-light-bg";
  const navBg = isScrolled ? "bg-white shadow-xl py-3" : "bg-transparent py-4 lg:py-6";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}
      aria-label="Menu Principal de Navegação"
    >
      {/* Container principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-gold font-black tracking-widest">
          <a
            href="#home"
            className={`transition-colors ${logoPrimary} hover:text-accent-gold`}
          >
            ADV.<span className="text-4xl">G.R</span>
            <span className="text-accent-gold">AMON</span>
          </a>
        </h1>

        {/* Menu Desktop */}
        <div className="hidden lg:flex space-x-8 items-center">
          {SECTIONS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`text-lg font-medium transition-all duration-300 relative group ${textPrimary} hover:text-accent-gold ${
                activeSection === link.href ? "text-accent-gold font-bold" : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold transform origin-left transition-transform duration-300 ${
                  activeSection === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          ))}
          <a
            href="#contato"
            className="ml-4 px-6 py-2 bg-accent-gold text-primary-dark font-bold rounded-full shadow-md hover:bg-yellow-700 transition-all transform hover:scale-105"
          >
            Consulta
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${textPrimary}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile com SCROLL habilitado */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col p-6 transform transition-transform duration-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botão de fechar */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-end mb-6 p-2 rounded-lg hover:bg-gray-200 transition"
          aria-label="Fechar menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Links do menu */}
        <nav className="flex flex-col items-center space-y-6 pb-10">
          {SECTIONS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`w-full text-center py-2 text-2xl font-semibold transition-colors rounded-md ${
                activeSection === link.href
                  ? "text-accent-gold bg-gray-100"
                  : "text-gray-800 hover:text-accent-gold hover:bg-gray-100"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => handleLinkClick("#contato")}
            className="mt-6 px-6 py-3 bg-accent-gold text-primary-dark font-bold rounded-full shadow-md text-center hover:bg-yellow-700 transition-all flex items-center justify-center gap-1"
          >
            Solicitar Consulta <ArrowRight className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
