import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

export const auth = getAuth();

export const register = async (email: string, password: string) => {
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email: string, password: string) => {
	return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
	await signOut(auth);
};

export const fireStoreDataBase = getFirestore();
