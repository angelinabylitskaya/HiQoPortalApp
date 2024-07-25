import { collection, CollectionReference, doc, getDoc, getDocs } from 'firebase/firestore';
import firestore from './database';

export const getNews = async () => {
  const querySnapshot = await getDocs(collection(firestore, 'news'));
  const news = [];
  querySnapshot.forEach((doc) =>
    news.push({
      id: doc.id,
      ...doc.data(),
    })
  );
  return news;
};

export const getNewsById = async (id: string) => {
  const snapshot = await getDoc(doc(firestore, `news/${id}`));
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};
