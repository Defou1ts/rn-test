import { createContext, useEffect, useMemo, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@utils/firebase';
import { useFirebaseAuthHandlers } from '@hooks/useFirebaseAuthHandlers';

import type { User } from 'firebase/auth';
import type { AuthProviderProps, IAuthContext } from './interfaces';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoadingInitial, setIsLoadingInitial] = useState(true);

	const { isLoading, handleLogin, handleRegister, handleLogout } = useFirebaseAuthHandlers();

	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				setUser(user);
				setIsLoadingInitial(false);
			}),
		[]
	);

	const authData = useMemo(
		() => ({
			user,
			isLoading,
			handleLogin,
			handleRegister,
			handleLogout,
		}),
		[user, isLoading]
	);

	return <AuthContext.Provider value={authData}>{!isLoadingInitial && children}</AuthContext.Provider>;
};
