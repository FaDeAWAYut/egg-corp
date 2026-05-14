import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { News } from "../types/news";

export const getNews = async (): Promise<News[]> => {
    const q = query(collection(db, "news"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })) as News[];
}