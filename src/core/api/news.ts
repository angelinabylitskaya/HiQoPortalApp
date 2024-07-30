import { collection, CollectionReference, doc, getDoc, getDocs } from 'firebase/firestore';
import firestore from './database';

export const getNews = async () => {
  if (process.env.EXPO_PUBLIC_FIREBASE_MOCK) {
    return [{ id: 1, title: 'HiQo Party', description: 'hiqo hey' }];
  }
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
  if (process.env.EXPO_PUBLIC_FIREBASE_MOCK) {
    return { id: 1, title: 'HiQo Party', description: 'hiqo hey' };
  }
  const snapshot = await getDoc(doc(firestore, `news/${id}`));
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};
