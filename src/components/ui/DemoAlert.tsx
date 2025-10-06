"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AlertTriangle, ExternalLink } from "lucide-react";

const DemoAlert: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContentCorrupted, setIsContentCorrupted] = useState(false);

  const corruptContent = useCallback(() => {
    const body = document.body;
    while (body.firstChild) body.removeChild(body.firstChild);

    const container = document.createElement("div");
    container.style.cssText =
      "position:fixed;inset:0;background:#111827;color:#fefefe;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;text-align:center;padding:1rem;z-index:99999";

    container.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#ef4444;margin-bottom:1rem">
        <path d="M19.08 9.55c.37-.35.9-.62 1.4-.72V5l-9-4-7.85 3.52M4.24 7.21l-2.11 1.05C2.11 8.35 2 8.5 2 9v6c0 2.2 1.8 4 4 4h7l-1-1-2.07-2.07"></path>
        <path d="m2 2 20 20"></path>
        <path d="M22 10c0 1.5-1.5 3-2 3s-2-1.5-2-3c0-2.1-1.8-4-4-4H7l-1.74-.78"></path>
        <path d="M22 22 2 2"></path>
      </svg>
      <h1 style="font-size:2rem;font-weight:bold;margin-bottom:1rem">Acesso Negado</h1>
      <p style="font-size:1rem;color:#d1d5db;margin-bottom:1rem">Interaja com o aviso inicial para continuar.</p>
      <button id="reload-btn" style="background:#eab308;color:#1f2937;padding:0.75rem 1.5rem;border-radius:0.5rem;font-weight:bold;cursor:pointer;border:none">Recarregar Página</button>
    `;

    body.appendChild(container);
    setIsContentCorrupted(true);

    document.getElementById("reload-btn")?.addEventListener("click", () => {
      window.location.reload();
    });

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("demo_alert_accepted");
    if (!hasAccepted && !isContentCorrupted) setIsOpen(true);

    const checkInterval = setInterval(() => {
      if (isOpen && document.querySelector(".demo-alert-modal") === null) {
        console.warn("Alerta removido! Corrompendo conteúdo...");
        corruptContent();
      }
    }, 1000);

    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      clearInterval(checkInterval);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen, isContentCorrupted, corruptContent]);

  const handleAccept = () => {
    localStorage.setItem("demo_alert_accepted", "true");
    setIsOpen(false);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  const handleDecline = () => (window.location.href = "about:blank");

  if (isContentCorrupted) return null;

  return isOpen ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 demo-alert-modal">
      <div className="bg-gray-900 text-white rounded-xl p-6 max-w-md w-full text-center flex flex-col gap-4">
        <AlertTriangle className="text-yellow-400 w-12 h-12 mx-auto" />
        <h2 className="text-xl font-bold text-yellow-400">
          ⚖️ Aviso: Projeto de Portfólio
        </h2>
        <p className="text-gray-300 text-sm">
          Este site é um{" "}
          <span className="font-semibold text-white">projeto demonstrativo</span>{" "}
          de{" "}
          <a
            href="https://guilhermeramon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Guilherme Ramon
          </a>
          . Nenhuma informação aqui representa serviço jurídico real.
        </p>
        <p className="text-white text-sm font-semibold">
          Ao clicar em {"\"Estou de Acordo\""}, você aceita esta condição. Caso não
          concorde, será redirecionado.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded w-full sm:w-auto"
          >
            Estou de Acordo
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto flex items-center justify-center gap-1"
          >
            Sair da Página <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default DemoAlert;
