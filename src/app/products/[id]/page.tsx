import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/types/product';
import ProductDetailContent from './ProductDetailContent';

// List all your product collections
const PRODUCT_COLLECTIONS = [
  'product_bag',
  'product_cuplid', 
  'product_compostable',
  'product_service'
];

export default async function ProductDetail({ params }: { params: { id: string } }) {
  let product: Product | null = null;
  let collectionName = '';

  // Try each collection until we find the product
  for (const collection of PRODUCT_COLLECTIONS) {
    const docRef = doc(db, collection, params.id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      product = {
        id: docSnap.id,
        ...docSnap.data()
      } as Product;
      collectionName = collection;
      break;
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-kanit text-2xl">ไม่พบสินค้า</p>
      </div>
    );
  }

  return <ProductDetailContent product={product} />;
}