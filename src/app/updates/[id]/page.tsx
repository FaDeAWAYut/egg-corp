import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { NewsArticle } from '@/types/news';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const docRef = doc(db, 'news', params.id);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    return <div>Article not found</div>;
  }

const data = docSnap.data();
const article: NewsArticle = {
  id: docSnap.id,
  name: data.name,
  Description: data.Description,
  imageUrl: data.imageUrl,
  timestamp: data.timestamp.toDate().toISOString(),
};
  return (

    <main className="min-h-screen relative overflow-hidden">

        <title>Egg Corporation</title>

        <div
          className="bg-[url('/EggBG.png')] bg-repeat bg-cover w-full h-full absolute inset-0 z-[-10]"
          style={{
            backgroundSize: '180%',
            backgroundPosition: 'left -65%',
          }}
        />


      <img
        src="/Pic_2.svg"
        alt="Top Left Decoration"
        className="absolute -top-20 left-20 w-1/6 h-auto rotate-[160deg]"
      />

      <Header /> 

        <div className="max-w-4xl mx-auto px-4 py-12">
          <article className="prose prose-lg max-w-none">
              <h1 className="font-kanit text-4xl font-semibold text-[#005844] text-center pb-5">
              {article.name}
              </h1>
              <p className="font-kanit text-gray-500 text-center text-xl pb-5">
                {new Date(article.timestamp).toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <div className="relative aspect-video w-full my-8 rounded-xl overflow-hidden">
              <Image
                  src={article.imageUrl}
                  alt={article.name}
                  fill
                  className="object-cover"
              />
              </div>
              <div className="font-kanit text-xl whitespace-pre-line text-gray-800 leading-relaxed">
              {article.Description}
              </div>
          </article>
        </div>

      <div className="mt-20"/>
      <Footer/>
    </main>
  );
}