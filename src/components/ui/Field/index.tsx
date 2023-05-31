import { TextInput } from 'react-native';

import { styles } from './style';

import type { FieldProps } from './interfaces';

export const Field = ({ style, ...props }: FieldProps) => {
	return (
		<TextInput
			showSoftInputOnFocus={false}
			autoCapitalize='none'
			{...props}
			style={[styles.input, style]}
		/>
	);
};
