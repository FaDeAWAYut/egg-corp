import { adminDb } from "@/lib/firebase-admin";
import { Product } from "@/types/product";
import ProductDetailContent from "./ProductDetailContent";

const PRODUCT_COLLECTIONS = [
  "product_bag",
  "product_cuplid",
  "product_compostable",
  "product_service",
];

export default async function ProductDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: { collection?: string };
}) {
  const { id } = await params;
  const { collection } = await searchParams;

  let product: Product | null = null;
  let collectionName = "";
  let similarProducts: Product[] = [];

  if (collection && PRODUCT_COLLECTIONS.includes(collection)) {
    // Known collection — single fetch, fast path
    const docSnap = await adminDb.doc(`${collection}/${id}`).get();
    if (docSnap.exists) {
      product = { id: docSnap.id, ...(docSnap.data() as any) } as Product;
      collectionName = collection;
    }
  }

  if (!product) {
    // Fetch ALL collections simultaneously instead of one by one
    const results = await Promise.all(
      PRODUCT_COLLECTIONS.map(async (col) => {
        const docSnap = await adminDb.doc(`${col}/${id}`).get();
        return docSnap.exists
          ? {
              product: {
                id: docSnap.id,
                ...(docSnap.data() as any),
              } as Product,
              col,
            }
          : null;
      }),
    );

    const found = results.find(Boolean);
    if (found) {
      product = found.product;
      collectionName = found.col;
    }
  }

  // Fetch similar products concurrently with nothing (already have product)
  if (product) {
    const qSnap = await adminDb
      .collection(collectionName)
      .orderBy("order")
      .limit(6)
      .get();

    similarProducts = qSnap.docs
      .map((d) => ({ id: d.id, ...(d.data() as any) }) as Product)
      .filter((p) => p.id !== product?.id)
      .slice(0, 5);
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-kanit text-2xl">ไม่พบสินค้า</p>
      </div>
    );
  }

  return (
    <ProductDetailContent
      product={product}
      sim_products={similarProducts}
      collectionName={collectionName}
    />
  );
}
