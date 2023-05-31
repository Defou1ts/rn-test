import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '@hooks/useAuth';
import { authorizedScreens, unAuthorizedScreens } from '@constants/screens';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
	const { user } = useAuth();
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{user !== null
					? authorizedScreens.map(({ name, component }) => (
							<Stack.Screen
								key={name}
								name={name}
								component={component}
							/>
					  ))
					: unAuthorizedScreens.map(({ name, component }) => (
							<Stack.Screen
								key={name}
								name={name}
								component={component}
							/>
					  ))}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
