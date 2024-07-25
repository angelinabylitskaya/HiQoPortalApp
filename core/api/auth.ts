import './database';

import {
  User,
  getAuth,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const auth = getAuth();

export { User };

export const signInWithEmailAndPassword = (email: string, password: string) =>
  firebaseSignInWithEmailAndPassword(auth, email, password);

export const subscribeOnAuthStateChanged = (cb) => onAuthStateChanged(auth, cb);
