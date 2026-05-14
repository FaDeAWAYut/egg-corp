"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategorySelector from "@/components/CategorySelector";
import CategoryBanner from "@/components/CategoryBanner";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // อย่าลืมขอ logo svg

  return (
    <ParallaxProvider>
      <title>Egg Corporation</title>

      <main className="min-h-screen relative overflow-hidden">
        <Parallax speed={-50} className="absolute inset-0 z-[-10]">
          <div
            className="bg-[url('/EggBG.png')] bg-repeat bg-cover w-full h-full"
            style={{
              backgroundSize: "180%",
              backgroundPosition: "left -65%",
            }}
          />
        </Parallax>
        <Header />
        {/* Top banner with title and background image */}
        <TopBanner title="ผลิตภัณฑ์" />
        {/* //category selector here */}
        <div className="h-[30vh]" /> {/* Spacer */}
        <CategorySelector selectedCategory={selectedCategory} />
        {/* Product category banners */}
        <CategoryBanner />
        <Footer />
      </main>
    </ParallaxProvider>
  );
}
