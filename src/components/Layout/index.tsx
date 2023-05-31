import React from 'react';

import { globalStyles } from '@theme/globalStyles';

import { View, ScrollView } from 'react-native';

import type { LayoutProps } from './interfaces';

export const Layout = ({ children, isScrollView = true }: LayoutProps) => {
	return (
		<View style={globalStyles.wrapper}>
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</View>
	);
};
