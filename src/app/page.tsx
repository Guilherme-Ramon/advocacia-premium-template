"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import AreasAtuacao from "@/sections/AreasAtuacao";
import TeamSection from "@/sections/TeamSection";
import DepoimentosSection from "@/sections/DepoimentosSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import DemoAlert from "@/components/ui/DemoAlert";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <AreasAtuacao />
        <TeamSection />
        <DepoimentosSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <DemoAlert />
    </div>
  );
};

export default Home;
