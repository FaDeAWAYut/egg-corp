'use client';

import Image from "next/image";
import React, { use, useEffect } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Header from '@/components/Header';
import { getNews } from '@/lib/news';
import { News } from '@/types/news';
import Footer from "@/components/Footer";
import NewsCard from '@/components/NewsCard';

export default function Home() {
  const [newsList, setNewsList] = React.useState<News[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const newsData = await getNews();
        setNewsList(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
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
              backgroundSize: '180%',
              backgroundPosition: 'left -65%',
            }}
          />
        </Parallax>

        <div className="absolute top-0 left-0 w-full h-[50vh] z-[-6] bg-[#fafeff]" />

        <div
          className="absolute top-0 left-0 w-full h-[50vh] z-[-5] bg-[url('/Pic_1.jpg')] bg-cover bg-no-repeat opacity-30 blur-sm"
          style={{
            backgroundPosition: 'center -100px' // moves image up
          }}
        />

        <div className="absolute top-0 left-0 w-full h-[50vh] flex items-center justify-center">
          <h1 className="font-kanit font-semibold text-[86px] text-[#005844]">ข่าวสาร</h1>
        </div>

        <img
          src="/Pic_2.svg"
          alt="Top Left Decoration"
          className="absolute -top-20 left-20 w-1/6 h-auto rotate-[160deg]"
        />

        <Header />

        <div className="h-[30vh]" />

        <div className="w-full bg-[#F9F6F1] shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px] px-10 py-6 text-center relative z-10">
          <div className="font-kanit text-[48px] text-black">ข่าวสารและรายละเอียด</div>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-[300px]">
            <p className="font-kanit text-4xl text-[#000000]">กำลังโหลดข้อมูล...</p>
          </div>
        )}

        {!isLoading && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {newsList.map((news) => (
              <NewsCard key={news.id} newsItem={news} />
            ))}
          </div>
        )}

        <Footer />
      </main>


    </ParallaxProvider>
  );
}