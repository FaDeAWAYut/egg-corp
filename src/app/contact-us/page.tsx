'use client';

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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

      <title>Contact us | Egg Corporation</title>
      
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
          <header className="h-[120px] bg-transparent">
            <nav className="flex justify-center items-center h-full px-5">
              <div className="relative flex items-center justify-center space-x-20">
                <a href="/" className="tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 group-hover:after:w-0 group-hover:after:left-1/2 duration-300 hover:scale-110">
                  About us
                </a>
                <a href="/products" className="tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 group-hover:after:w-0 group-hover:after:left-1/2 duration-300 hover:scale-110">
                  Products
                </a>
                <div>
                  <Image src="/main_logo.png" width={80} height={80} alt="Logo" />
                </div>
                <a href="/updates" className="tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 group-hover:after:w-0 group-hover:after:left-1/2 duration-300 hover:scale-110">
                  Updates
                </a>
                <a href="/contact-us" className="tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-0 group-hover:after:left-1/2 duration-300 hover:scale-110">
                  Contact us
                </a>
              </div>
              <div className="absolute right-5 flex space-x-5">
                <div className="w-[47px] h-[47px] overflow-hidden transform translate-y-0">
                  <Link href="https://www.facebook.com/EGGbiopak" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/facebook_svg.svg"
                      layout="intrinsic"
                      width={100}
                      height={100}
                      objectFit="contain"
                      alt="Facebook Icon"
                    />
                  </Link>
                </div>
                <Image src="/line_svg.svg" width={40} height={40} alt="Line Icon" />
              </div>
            </nav>
          </header>


          <section className="min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] border-blue-600 border-[5px]">
            <a>Contact us</a>
          </section>

          <section className="min-h-screen max-h-screen border-red-600 border-[5px]">

          </section>
          
        </div>
      </main>


    </ParallaxProvider>
  );
}