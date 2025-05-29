'use client';

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Header from '@/components/Header';

export default function Home() {

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

      <title>Updates | Egg Corporation</title>
      
      <main className="min-h-screen relative overflow-hidden">

        <Parallax speed={-50} className="absolute inset-0 z-0">
          <div
            className="bg-[url('/EggBG.png')] bg-repeat bg-cover w-full h-full"
            style={{
              backgroundSize: '180%',
              backgroundPosition: 'left -65%',
            }}
          />
        </Parallax>

        <div className="relative z-10">

            <Header />

          <section className="min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] border-blue-600 border-[5px]">
            <a>Updates</a>
          </section>

          <section className="min-h-screen max-h-screen border-red-600 border-[5px]">

          </section>
          
        </div>
      </main>


    </ParallaxProvider>
  );
}