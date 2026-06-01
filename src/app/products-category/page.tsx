"use client";

import React, { Suspense, useEffect } from "react";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategorySelector from "@/components/CategorySelector";
import CategoryBanner from "@/components/CategoryBanner";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
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
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-10">
              <p className="font-kanit text-xl">Loading categories...</p>
            </div>
          }
        >
          <CategorySelector />
        </Suspense>
        {/* Product category banners */}
        <CategoryBanner />
        <Footer />
      </main>
    </ParallaxProvider>
  );
}
