'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Header from '@/components/Header';
import { getProductBags, getProductCups, getProductCompostable, getProductService } from '@/lib/products';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import Footer from "@/components/Footer";
export default function Home() {

  const [productBags, setProductBags] = useState<Product[]>([]);
  const [productCups, setProductCups] = useState<Product[]>([]);
  const [productCompostable, setProductCompostable] = useState<Product[]>([]);
  const [productService, setProductService] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

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
        const [bagsData, cupsData, compostableData, serviceData] = await Promise.all([
          getProductBags(),
          getProductCups(),
          getProductCompostable(),
          getProductService()
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
          <h1 className="font-kanit font-semibold text-[86px] text-[#005844]">ผลิตภัณฑ์</h1>
        </div>

        <img
          src="/Pic_2.svg"
          alt="Top Left Decoration"
          className="absolute -top-20 left-20 w-1/6 h-auto rotate-[160deg]"
        />

        <Header /> 

        <div className="h-[30vh]" />

        <div className="w-full bg-[#F9F6F1] shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px] px-10 py-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* Plastic Bags */}
            <div className="flex flex-col items-center w-[150px]"> {/* Fixed width container */}
              <button 
                onClick={() => document.getElementById('bags-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex flex-col items-center group w-full"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                  <Image
                    src="/plastic-bag-icon.png"
                    alt="ถุงพลาสติก"
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <p className="font-kanit text-l md:text-xl mt-2 text-black text-center w-full">ถุงพลาสติก</p>
              </button>
            </div>

            {/* Cups & Lids */}
            <div className="flex flex-col items-center w-[150px]">
              <button 
                onClick={() => document.getElementById('cups-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex flex-col items-center group w-full"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                  <Image
                    src="/coffee-cup-icon.png"
                    alt="แก้วและฝา"
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <p className="font-kanit text-l md:text-xl mt-2 text-black text-center w-full">แก้วและฝา</p>
              </button>
            </div>

            {/* Compostable */}
            <div className="flex flex-col items-center w-[150px]">
              <button 
                onClick={() => document.getElementById('compostable-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex flex-col items-center group w-full"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                  <Image
                    src="/dish-icon.png"
                    alt="ผลิตภัณฑ์ EGG"
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <p className="font-kanit text-l md:text-xl mt-2 text-black text-center w-full leading-tight">ผลิตภัณฑ์ EGG</p>
              </button>
            </div>

            {/* OEM Service */}
            <div className="flex flex-col items-center w-[150px]">
              <button 
                onClick={() => document.getElementById('service-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex flex-col items-center group w-full"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                  <Image
                    src="/leaves-icon.png"
                    alt="บริการ OEM"
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <p className="font-kanit text-l md:text-xl mt-2 text-black text-center w-full">บริการ OEM</p>
              </button>
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center items-center h-[300px]">
            <p className="font-kanit text-4xl text-[#000000]">กำลังโหลดข้อมูล...</p>
          </div>
        )}

        {/* Conditionally render content */}
        {!isLoading && (
          <>
            {/* Plastic Bag Section */}
            <div id="bags-section" className="font-kanit text-[50px] sm:text-[60px] text-[#005844] font-semibold mx-auto max-w-[80%] mt-20 text-center md:text-left 2xl:pl-20 md:pl-10 2xl:pr-20 md:pr-10">
              ถุงพลาสติก
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 mx-auto max-w-[80%] mt-5 2xl:pl-10 2xl:pr-10">
              {productBags.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Cups & Lids Section */}
            <div id="cups-section" className="font-kanit text-[50px] sm:text-[60px] text-[#005844] font-semibold mx-auto max-w-[80%] mt-20 text-center md:text-left 2xl:pl-20 md:pl-10 2xl:pr-20 md:pr-10">
              แก้วและฝา
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 mx-auto max-w-[80%] mt-5 2xl:pl-10 2xl:pr-10 mb-20">
              {productCups.map((product) => (
                <ProductCard key={`cup-${product.id}`} product={product} />
              ))}
            </div>

            {/* Compostable Section */}
            <div id="compostable-section" className="font-kanit text-[50px] sm:text-[60px] text-[#005844] font-semibold mx-auto max-w-[80%] mt-20 text-center md:text-left 2xl:pl-20 md:pl-10 2xl:pr-20 md:pr-10">
              ผลิตภัณฑ์ย่อยสลายได้
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 mx-auto max-w-[80%] mt-5 2xl:pl-10 2xl:pr-10 mb-20">
              {productCompostable.map((product) => (
                <ProductCard key={`cup-${product.id}`} product={product} />
              ))}
            </div>

            {/* OEM Service Section */}
            <div id="service-section" className="font-kanit text-[50px] sm:text-[60px] text-[#005844] font-semibold mx-auto max-w-[80%] mt-20 text-center md:text-left 2xl:pl-20 md:pl-10 2xl:pr-20 md:pr-10">
              บริการ OEM
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 mx-auto max-w-[80%] mt-5 2xl:pl-10 2xl:pr-10 mb-20">
              {productService.map((product) => (
                <ProductCard key={`cup-${product.id}`} product={product} />
              ))}
            </div>
          </>

          
        )}


      <Footer/>
        
      </main>


    </ParallaxProvider>
  );
}