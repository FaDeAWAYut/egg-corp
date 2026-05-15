"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "@/components/Header";
import {
  getProductBags,
  getProductCups,
  getProductCompostable,
  getProductService,
} from "@/lib/products";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { useSearchParams, useRouter } from "next/navigation";

export default function Home() {
  const [productBags, setProductBags] = useState<Product[]>([]);
  const [productCups, setProductCups] = useState<Product[]>([]);
  const [productCompostable, setProductCompostable] = useState<Product[]>([]);
  const [productService, setProductService] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = Number(searchParams.get("category") ?? "0");

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
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const [bagsData, cupsData, compostableData, serviceData] =
          await Promise.all([
            getProductBags(),
            getProductCups(),
            getProductCompostable(),
            getProductService(),
          ]);
        setProductBags(bagsData);
        setProductCups(cupsData);
        setProductCompostable(compostableData);
        setProductService(serviceData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Define sections data
  const sections = [
    { id: "bags-section", title: "ถุงพลาสติก", products: productBags },
    { id: "cups-section", title: "แก้วและฝา", products: productCups },
    {
      id: "compostable-section",
      title: "ผลิตภัณฑ์ย่อยสลายได้",
      products: productCompostable,
    },
    { id: "service-section", title: "บริการ OEM", products: productService },
  ];

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
            ผลิตภัณฑ์
          </h1>
        </div>

        <img
          src="/Pic_2.svg"
          alt="Top Left Decoration"
          className="absolute -top-20 left-20 w-1/6 h-auto rotate-[160deg]"
        />

        <Header />

        <div className="h-[30vh]" />

        <div className="w-full bg-[#F9F6F1] shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px] px-10 py-4 relative z-10">
          <div className="flex justify-center px-20 gap-14">
            {[
              { icon: "/home-button.png", label: "สินค้าทั้งหมด" },
              { icon: "/plastic-bag-icon.png", label: "ถุงพลาสติก" },
              { icon: "/coffee-cup-icon.png", label: "แก้วและฝา" },
              { icon: "/dish-icon.png", label: "ผลิตภัณฑ์ EGG" },
              { icon: "/leaves-icon.png", label: "บริการ OEM" },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  router.push(`/products-list?category=${index}`, {
                    scroll: false,
                  })
                }
                className="flex flex-col items-center cursor-pointer py-1.5 relative group"
              >
                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 mb-2 transition-transform duration-200 group-hover:scale-110"
                />

                {/* Text */}
                <span className="font-kanit text-md text-black text-center px-2 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.label}
                </span>

                {/* Underline */}
                <div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-black transition-transform duration-300 origin-center ${selectedCategory === index ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center items-center h-[300px]">
            <p className="font-kanit text-4xl text-[#000000]">
              กำลังโหลดข้อมูล...
            </p>
          </div>
        )}

        {/* Conditionally render content */}
        {!isLoading && (
          <>
            {selectedCategory === 0 ? (
              // Show all sections
              <>
                <div className="flex flex-col items-center justify-center my-20 w-fit mx-auto">
                  <span className="font-kanit text-[50px] sm:text-[60px] text-[#005844] font-semibold text-center">
                    All Products
                  </span>
                  <div className="w-full h-1.5 bg-[#005844]"></div>
                </div>

                {sections.map((section, index) => (
                  <React.Fragment key={section.id}>
                    <div
                      id={section.id}
                      className="font-kanit text-[50px] sm:text-[60px] text-[#005844] font-semibold mx-auto max-w-[80%] text-center md:text-left 2xl:pl-20 md:pl-10 2xl:pr-20 md:pr-10"
                    >
                      {section.title}
                    </div>
                    <div className="grid grid-cols-1 2xl:grid-cols-2 mx-auto max-w-[80%] mt-5 2xl:pl-10 2xl:pr-10 mb-20">
                      {section.products.map((product) => (
                        <ProductCard
                          key={`${section.id}-${product.id}`}
                          product={product}
                        />
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </>
            ) : (
              // Show only selected category
              (() => {
                const section = sections[selectedCategory - 1];
                return (
                  <>
                    <div className="font-kanit text-[50px] sm:text-[60px] text-[#005844] font-semibold mx-auto max-w-[80%] mt-20 text-center md:text-left 2xl:pl-20 md:pl-10 2xl:pr-20 md:pr-10">
                      {section.title}
                    </div>
                    <div className="grid grid-cols-1 2xl:grid-cols-2 mx-auto max-w-[80%] mt-5 2xl:pl-10 2xl:pr-10 mb-20">
                      {section.products.map((product) => (
                        <ProductCard
                          key={`${section.id}-${product.id}`}
                          product={product}
                        />
                      ))}
                    </div>
                  </>
                );
              })()
            )}
          </>
        )}

        <Footer />
      </main>
    </ParallaxProvider>
  );
}
