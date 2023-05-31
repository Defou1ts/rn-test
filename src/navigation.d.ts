import type { TypeRootStackParamList } from '@types/typeRootStackParamList';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends TypeRootStackParamList {}
	}
}
