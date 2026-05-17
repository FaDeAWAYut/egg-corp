// app/products/[id]/ProductDetailContent.tsx
"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function ProductDetailContent({
  product,
  sim_products,
  collectionName,
}: {
  product: Product;
  sim_products: Product[];
  collectionName: string;
}) {
  const router = useRouter();
  return (
    <main className="min-h-screen relative overflow-hidden">
      <title>Egg Corporation</title>

      <div
        className="bg-[url('/EggBG.png')] bg-repeat bg-cover w-full h-full absolute inset-0 z-[-10]"
        style={{
          backgroundSize: "180%",
          backgroundPosition: "left -65%",
        }}
      />

      <img
        src="/Pic_2.svg"
        alt="Top Left Decoration"
        className="absolute -top-20 left-20 w-1/6 h-auto rotate-[160deg]"
      />

      <Header />

      <div className="max-w-7xl mx-auto p-8">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="font-kanit flex items-center gap-2 text-[#005844] hover:opacity-70 transition-opacity mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          ย้อนกลับ
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative h-96 md:h-[500px] bg-[#E1DDD5] bg-opacity-80 rounded-2xl overflow-hidden">
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
              <p className="font-kanit whitespace-pre-line text-gray-800">
                {product.briefDescription}
              </p>
            </div>

            <div className="prose max-w-none">
              <h3 className="font-kanit text-2xl font-semibold text-[#005844]">
                รายละเอียด
              </h3>
              <p className="font-kanit whitespace-pre-line text-gray-800">
                {product.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="font-kanit text-2xl font-semibold text-[#005844]">
                ขนาดที่ผลิต
              </h3>
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

      {sim_products.length > 0 && (
        <div className="max-w-7xl mx-auto p-8">
          <h2 className="font-kanit text-2xl md:text-3xl font-semibold text-[#005844] mb-8">
            สินค้าที่คล้ายกัน
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sim_products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}?collection=${collectionName}`}
                className="group"
              >
                <div className="bg-[#E1DDD5] bg-opacity-30 rounded-xl p-4 h-full flex flex-col shadow-md">
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-kanit text-center text-black font-medium mt-auto">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-20" />
      <Footer />
    </main>
  );
}
