"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "@/components/Header";
import { getNewsArticles } from "@/lib/news";
import { NewsArticle } from "@/types/news";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Updates() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Fetch news articles
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const articlesData = await getNewsArticles();
        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
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
            ข่าวสาร
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
            ข่าวสารและรายละเอียด
          </div>
        </div>

        {/* News Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <p className="font-kanit text-4xl text-[#000000]">
                กำลังโหลดข่าวสาร...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/updates/${article.id}`}
                  className="group h-full"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                      <Image
                        src={article.imageUrl}
                        alt={article.name}
                        width={600}
                        height={340}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="font-kanit text-xl font-semibold text-[#005844] line-clamp-3 flex-grow">
                        {article.name}
                      </h3>

                      <p className="font-kanit text-gray-500 mt-2 text-sm">
                        {new Date(article.timestamp).toLocaleDateString(
                          "th-TH",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mt-20" />
        <Footer />
        <ScrollToTopButton />
      </main>
    </ParallaxProvider>
  );
}
