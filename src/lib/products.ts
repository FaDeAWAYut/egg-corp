import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Product[];
};