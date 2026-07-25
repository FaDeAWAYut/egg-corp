import { Suspense } from "react";
import ProductsListClient from "./ProductsListClient";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-kanit text-2xl">Loading products...</p>
        </div>
      }
    >
      <ProductsListClient />
      <ScrollToTopButton />
    </Suspense>
  );
}
