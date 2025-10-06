// src/sections/ContactSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

const ContactSection: React.FC = () => {
    return (
        <section id="contato" className="py-20 bg-[#0A1931] text-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-x-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-garamond font-bold text-[#C8A97E] mb-6">
                                Agende sua consulta hoje!
                            </h2>
                            <p className="text-xl mb-8">
                                Entre em contato de forma rápida e segura para
                                discutir seu caso e obter o melhor suporte
                                jurídico.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="https://wa.me/5511999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors text-lg shadow-xl"
                                >
                                    <FaWhatsapp className="mr-3 w-6 h-6" />{" "}
                                    WhatsApp: (11) 99999-9999
                                </a>
                                <a
                                    href="mailto:contato@escritorio.com"
                                    className="flex items-center justify-center p-4 bg-[#C8A97E] hover:bg-yellow-700 text-[#0A1931] font-bold rounded-lg transition-colors text-lg shadow-xl"
                                >
                                    <Mail className="mr-3 text-2xl" /> Enviar
                                    Email
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="p-8 bg-white rounded-xl shadow-2xl"
                        >
                            <h3 className="text-2xl font-garamond font-semibold text-[#0A1931] mb-4">
                                Formulário de Contato
                            </h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Seu Nome"
                                    className="w-full p-3 border border-gray-300 rounded focus:ring-accent-gold focus:border-accent-gold text-[#0A1931]"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Seu Email"
                                    className="w-full p-3 border border-gray-300 rounded focus:ring-accent-gold focus:border-accent-gold text-[#0A1931]"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Seu Telefone"
                                    className="w-full p-3 border border-gray-300 rounded focus:ring-accent-gold focus:border-accent-gold text-[#0A1931]"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Sua Mensagem / Breve Descrição do Caso"
                                    className="w-full p-3 border border-gray-300 rounded focus:ring-accent-gold focus:border-accent-gold text-[#0A1931]"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full p-3 bg-[#C8A97E] text-[#0A1931] font-bold rounded hover:bg-yellow-700 transition-colors"
                                >
                                    Enviar Mensagem
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-center text-2xl font-garamond font-semibold mb-4 text-[#C8A97E]">
                        Nosso Endereço
                    </h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.068213812836!2d-46.6395577!3d-23.5501865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a9c5b6b1071%3A0xc6c4c5a9b7e77d85!2zUHJhY2EgZGEgUuk7IFPDo28gUGF1bG8gLSBTUA!5e0!3m2!1spt-BR!2sbr!4v1625866012345!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização do Escritório"
                        className="rounded-lg shadow-xl"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
