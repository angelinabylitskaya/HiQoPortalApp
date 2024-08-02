import { collection, CollectionReference, doc, getDoc, getDocs } from 'firebase/firestore';
import firestore from './database';

export const getNews = async () => {
  if (process.env.EXPO_PUBLIC_FIREBASE_MOCK) {
    return [
        { id: 1, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 2, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 3, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 4, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 5, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 6, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 7, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 8, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 9, title: 'HiQo Party', description: 'hiqo hey' },
        { id: 10, title: 'HiQo Party', description: 'hiqo hey' },
    ];
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
