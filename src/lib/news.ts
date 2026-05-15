import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';

export interface NewsArticle {
  id: string;
  name: string;
  Description: string;
  imageUrl: string;
  timestamp: string; // Still a string for the UI, but now we'll convert to string ourselves
}

export const getNewsArticles = async (): Promise<NewsArticle[]> => {
  const q = query(collection(db, 'news'), orderBy('timestamp', 'desc'));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      Description: data.Description,
      imageUrl: data.imageUrl,
      timestamp: data.timestamp.toDate().toISOString(), // 👈 convert Firestore Timestamp to ISO string
    };
  });
};
