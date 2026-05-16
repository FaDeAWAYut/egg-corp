"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

        <div className="absolute top-0 left-0 w-full h-[50vh] z-[-6] bg-[#fafeff]" />

        <div
          className="absolute top-0 left-0 w-full h-[50vh] z-[-5] bg-[url('/Pic_1.jpg')] bg-cover bg-no-repeat opacity-30 blur-sm"
          style={{
            backgroundPosition: "center -100px", // moves image up
          }}
        />

        <div className="absolute top-0 left-0 w-full h-[50vh] flex items-center justify-center">
          <h1 className="font-kanit font-semibold text-[86px] text-[#005844]">
            ติดต่อเรา
          </h1>
        </div>

        <Image
          src="/Pic_2.svg"
          alt="Top Left Decoration"
          width={256}
          height={256}
          className="absolute -top-20 left-20 w-1/6 h-auto rotate-[160deg]"
        />

        <Header />

        <div className="h-[30vh]" />

        <div className="w-full bg-[#F9F6F1] shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px] px-10 py-6 text-center relative z-10">
          <div className="font-kanit text-[48px] text-black">
            รายละเอียดการติดต่อ
          </div>
        </div>

        <div
          className="w-2/3 mx-auto mt-20 relative z-10"
          style={{ aspectRatio: "16 / 8" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.4701602423384!2d100.28374353598622!3d13.638094201527538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bf517f6f7989%3A0xdfbc1f18e9f22f7c!2zRUdHIENvcnBvcmF0aW9uIC0g4Lit4Li14LiI4Li14LiI4Li1IOC4hOC4reC4o-C5jOC5gOC4m-C4reC5gOC4o-C4iuC4seC5iOC4mQ!5e0!3m2!1sen!2sth!4v1748578575624!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Egg Corporation Location"
          />
        </div>

        <div className="mx-auto mt-10 font-extralight text-center text-2xl font-kanit text-black">
          99, 2 ต.คลองมะเดื่อ อ.กระทุ่มแบน จ.สมุทรสาคร 74110
          <div className="mt-4" />
          <span className="font-semibold text-black">เบอร์ติดต่อ : </span>
          <span className="font-extralight text-[#005844]">000-000-0000</span>
          <span className="ml-8 font-semibold text-black">อีเมล : </span>
          <span className="font-extralight text-[#005844]">
            example@gmail.com
          </span>
          <div className="mt-4" />
          <span className="font-semibold text-black">LineID : </span>
          <span className="font-extralight text-[#005844]">place@holder</span>
          <div className="mt-4" />
          <span className="font-semibold text-black">Facebook : </span>
          <a
            href="https://www.facebook.com/EGGbiopak"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight text-[#005844] hover:text-[#004433]"
          >
            EGG Biopak
          </a>
        </div>

        <div className="mt-20" />
        <Footer />
      </main>
    </ParallaxProvider>
  );
}
