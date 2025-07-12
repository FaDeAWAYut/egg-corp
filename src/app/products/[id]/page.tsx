// app/products/[id]/page.tsx
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Image from 'next/image';
import { Product } from '@/types/product';
import ProductDetailContent from './ProductDetailContent';

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const productSnapshot = await getDoc(doc(db, 'product_bag', params.id));
  
  if (!productSnapshot.exists()) {
    return <div>Product not found</div>;
  }

  const product = {
    id: productSnapshot.id,
    ...productSnapshot.data()
  } as Product;

  return <ProductDetailContent product={product} />;
}