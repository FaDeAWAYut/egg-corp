// app/products/[id]/ProductDetailContent.tsx
'use client';

import { Product } from '@/types/product';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Image from 'next/image';
import Header from '@/components/Header';

export default function ProductDetailContent({ product }: { product: Product }) {
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

        <img
          src="/Pic_2.svg"
          alt="Top Left Decoration"
          className="absolute -top-20 left-20 w-1/6 h-auto rotate-[160deg]"
        />

        <Header /> 

        <div className="max-w-6xl mx-auto p-8 border-2 border-red-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="relative h-96 md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain"
                />
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                <h1 className="font-kanit text-3xl font-bold text-[#005844]">
                    {product.name}
                </h1>
                
                <div className="prose max-w-none">
                    <h3 className="font-kanit text-xl text-gray-800">รายละเอียดโดยย่อ</h3>
                    <p className="font-kanit whitespace-pre-line">
                    {product.briefDescription}
                    </p>
                </div>

                <div className="prose max-w-none">
                    <h3 className="font-kanit text-xl text-gray-800">รายละเอียดเต็ม</h3>
                    <p className="font-kanit whitespace-pre-line">
                    {product.fullDescription}
                    </p>
                </div>

                <div>
                    <h3 className="font-kanit text-xl text-gray-800">ขนาดที่มี</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                    {product.sizes.map((size, index) => (
                        <span
                        key={index}
                        className="font-kanit bg-[#005844] text-white px-4 py-2 rounded-full"
                        >
                        {size}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        


          
      </main>
    </ParallaxProvider>
  );
}