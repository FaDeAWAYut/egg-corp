'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Header from '@/components/Header';
import { getProducts } from '@/lib/products';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

    // Fetch products
    useEffect(() => {
      const fetchProducts = async () => {
        const productsData = await getProducts();
        setProducts(productsData);
      };
      fetchProducts();
    }, []);

  return (
    <ParallaxProvider>

      <title>Products | Egg Corporation</title>
      
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

        <div className="w-full bg-[#F9F6F1] shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px] px-10 py-6 text-center relative z-10">
          <div className="font-kanit text-[48px] text-black">PLACEHOLDER</div>
        </div>


        <div className="grid grid-cols-1 2xl:grid-cols-2 mx-auto max-w-[80%] 2xl:pl-10 2xl:pr-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>



        
      </main>


    </ParallaxProvider>
  );
}