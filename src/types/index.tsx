// src/types/index.ts

import { LucideIcon } from "lucide-react";

/**
 * Define a estrutura de um item de navegação.
 */
export interface NavLink {
    name: string;
    href: string;
}

/**
 * Define a estrutura de uma área de atuação.
 */
export interface Area {
    icon: LucideIcon;
    title: string;
    description: string;
}

/**
 * Define a estrutura de um membro da equipe.
 */
export interface TeamMember {
    name: string;
    role: string;
    photo: string; // URL placeholder
}

/**
 * Define a estrutura de um valor fundamental do escritório.
 */
export interface ValueProp {
    icon: LucideIcon;
    title: string;
    desc: string;
}

/**
 * Define a estrutura de um post do blog.
 */
export interface BlogPost {
    title: string;
    summary: string;
    date: string;
}

/**
 * Define a estrutura de um depoimento de cliente.
 */
export interface Testimonial {
    quote: string;
    client: string;
}
