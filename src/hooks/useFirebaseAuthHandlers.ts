import { useState } from 'react';

import { register, fireStoreDataBase, login, logout } from '@utils/firebase';
import { addDoc, collection } from '@firebase/firestore';

import { Alert } from 'react-native';

export const useFirebaseAuthHandlers = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleRegister = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const { user } = await register(email, password);

			await addDoc(collection(fireStoreDataBase, 'users'), {
				_id: user.uid,
				displayName: 'No name',
			});
		} catch (error: any) {
			Alert.alert('Error registration', error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleLogin = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			await login(email, password);
		} catch (error: any) {
			Alert.alert('Error login', error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleLogout = async () => {
		setIsLoading(true);
		try {
			await logout();
		} catch (error: any) {
			Alert.alert('Error logout', error);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		handleLogin,
		handleRegister,
		handleLogout,
	};
};
