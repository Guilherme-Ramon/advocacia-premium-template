// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

// Metadados OTIMIZADOS para SEO e o navegador (Foco no Portfolio de Guilherme Ramon)
export const metadata: Metadata = {
    title: "Advocacia Premium | Guilherme Ramon",
    description:
        "Template de Landing Page de Advocacia elegante e responsiva, desenvolvido por Guilherme Ramon com Next.js, Tailwind CSS e Framer Motion. Foco em UI/UX e performance para portfólio profissional.",

    authors: [
        { name: "Guilherme Ramon", url: "https://guilhermeramon.vercel.app/" },
    ],
    keywords: [
        "Guilherme Ramon",
        "Desenvolvedor Frontend",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Template Advocacia",
        "UI/UX",
        "Portfolio",
    ],

    openGraph: {
        title: "Advocacia Premium | Guilherme Ramon",
        description:
            "Confira este template de escritório de advocacia elegante e responsivo, um projeto de alta performance desenvolvido por Guilherme Ramon.",
        url: "https://guilhermeramon.vercel.app",
        siteName: "Portfolio de Guilherme Ramon",
        images: [
            {
                url: "https://placehold.co/1200x630/0A1931/C8A97E?text=Advocacia+Template+by+GR",
                width: 1200,
                height: 630,
                alt: "Template de Advocacia Moderno por Guilherme Ramon",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Advocacia | Guilherme Ramon",
        description:
            "Template elegante de escritório de advocacia, desenvolvido por Guilherme Ramon com foco em UI/UX e performance.",
        creator: "@guilhermeramon",
        images: [
            "https://placehold.co/1200x630/0A1931/C8A97E?text=Advocacia+Template+by+GR",
        ],
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    viewport: {
        width: "device-width",
        initialScale: 1,
    },

    themeColor: "#0A1931", // Azul marinho
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={`scroll-smooth`}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
                />
                <script src="https://cdn.tailwindcss.com"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            tailwind.config = {
                                theme: {
                                    extend: {
                                        fontFamily: {
                                            // Atualizado para Cormorant Garamond (mais elegante) e Roboto
                                            'garamond': ['Cormorant Garamond', 'serif'], 
                                            'roboto': ['Roboto', 'sans-serif'],
                                        },
                                        colors: {
                                            'primary-dark': '#0A1931', // Azul Marinho Profundo
                                            'accent-gold': '#C8A97E', // Dourado Clássico
                                            'light-bg': '#F8F9FA', // Fundo Claro
                                        }
                                    },
                                },
                                // Configuração de plugins (necessário para Tailwind completo)
                                plugins: [], 
                            };
                        `,
                    }}
                />

                {/* Meta tag para garantir a correta escala em todos os dispositivos */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            {/* Classe base para todo o corpo, usando a fonte Roboto e o tema de cores Light. */}
            <body className="font-roboto bg-light-bg text-primary-dark antialiased">
                {children}
            </body>
        </html>
    );
}
