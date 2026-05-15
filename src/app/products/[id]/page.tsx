import {
  getDoc,
  doc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";
import ProductDetailContent from "./ProductDetailContent";

// List all your product collections
const PRODUCT_COLLECTIONS = [
  "product_bag",
  "product_cuplid",
  "product_compostable",
  "product_service",
];

export default async function ProductDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  let product: Product | null = null;
  let collectionName = "";
  let similarProducts: Product[] = [];

  for (const collection of PRODUCT_COLLECTIONS) {
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      product = {
        id: docSnap.id,
        ...docSnap.data(),
      } as Product;
      collectionName = collection;
      break;
    }
  }

  // Fetch similar products if product found
  if (product) {
    const productsRef = collection(db, collectionName);
    const q = query(
      productsRef,
      orderBy("order"),
      limit(6), // Get one extra in case current product is in the first 5
    );

    const querySnapshot = await getDocs(q);
    similarProducts = querySnapshot.docs
      .map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as Product,
      )
      .filter((p) => p.id !== product?.id) // Exclude current product
      .slice(0, 5); // Take first 5 after filtering
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-kanit text-2xl">ไม่พบสินค้า</p>
      </div>
    );
  }

  return (
    <>
      <ProductDetailContent product={product} sim_products={similarProducts} />
    </>
  );
}
