import type { ReactNode } from 'react';

import type { User } from 'firebase/auth';

export interface IAuthContext {
	user: User | null;
	isLoading: boolean;
	handleRegister: (email: string, password: string) => Promise<void>;
	handleLogin: (email: string, password: string) => Promise<void>;
	handleLogout: () => Promise<void>;
}

export interface AuthProviderProps {
	children: ReactNode;
}
