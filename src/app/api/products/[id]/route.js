import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

const COLLECTION_MAP = {
  bag: "product_bag",
  cuplid: "product_cuplid",
  compostable: "product_compostable",
  service: "product_service",
};

export async function PATCH(request, { params }) {
  const { id } = params;
  const body = await request.json();
  const { category } = body;

  try {
    if (!category || !COLLECTION_MAP[category]) {
      return Response.json(
        { error: "Invalid or missing category" },
        { status: 400 },
      );
    }

    const collectionName = COLLECTION_MAP[category];
    const productRef = doc(db, collectionName, id);

    // Remove category from the data before updating
    const productData = { ...body };
    delete productData.category;

    await updateDoc(productRef, productData);

    return Response.json(
      { message: "Product updated successfully", id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return Response.json(
      { error: error.message || "Failed to update product" },
      { status: 500 },
    );
  }
}
