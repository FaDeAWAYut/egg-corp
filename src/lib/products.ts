import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { Product } from "../types/product";

export const getProductBags = async (): Promise<Product[]> => {
  const q = query(collection(db, "product_bag"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Product[];
};

export const getProductCups = async (): Promise<Product[]> => {
  const q = query(collection(db, "product_cuplid"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Product[];
};

export const getProductCompostable = async (): Promise<Product[]> => {
  const q = query(collection(db, "product_compostable"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Product[];
};

export const getProductService = async (): Promise<Product[]> => {
  const q = query(collection(db, "product_service"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Product[];
};