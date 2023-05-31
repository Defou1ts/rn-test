import '@config/firebase';

import { Navigation } from '@components/Navigation';
import { AuthProvider } from '@providers/auth';

export default function App() {
	return (
		<AuthProvider>
			<Navigation />
		</AuthProvider>
	);
}
