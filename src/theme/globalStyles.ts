import { StatusBar, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.15,
		shadowRadius: 10,
	},
	wrapper: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white',
		paddingTop: StatusBar.currentHeight ?? 0,
	},
});
