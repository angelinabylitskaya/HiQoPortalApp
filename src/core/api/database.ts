import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { firebaseConfig } from '../config/firebase';
import { getFirestore } from 'firebase/firestore';

try {
  const app = initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch {
  console.log('Failed to initialize or already initialized');
}

export default getFirestore();
