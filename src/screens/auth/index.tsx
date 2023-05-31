import React, { useState } from 'react';

import { globalStyles } from '@theme/globalStyles';
import { useAuth } from '@hooks/useAuth';
import { Spinner } from '@components/ui/Spinner';
import { Field } from '@components/ui/Field';

import { Text, View } from 'react-native';

import { styles } from './styles';

interface AuthData {
	email: string;
	password: string;
}

const initialAuthData: AuthData = {
	email: '',
	password: '',
};

export const AuthScreen = () => {
	const [authData, setAuthData] = useState<AuthData>(initialAuthData);
	const { isLoading } = useAuth();
	const [isReg, setIsReg] = useState(false);

	return (
		<View style={globalStyles.wrapper}>
			<View style={styles.wrapper}>
				<View style={styles.formWrapper}>
					<Text style={styles.text}>
						{isReg ? 'Sign Up' : 'Log in'}
					</Text>
					{isLoading && <Spinner />}
					<Field
						value={authData.email}
						placeholder='Enter email'
						onChangeText={(email) => {
							setAuthData({ ...authData, email });
						}}
					/>
					<Field
						value={authData.password}
						secureTextEntry
						placeholder='Enter Password'
						onChangeText={(password) => {
							setAuthData({ ...authData, password });
						}}
					/>
				</View>
			</View>
		</View>
	);
};
