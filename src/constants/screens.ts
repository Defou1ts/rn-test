import { AuthScreen } from '@screens/auth';
import { HomeScreen } from '@screens/home';
import { MoreScreen } from '@screens/more';
import { PaymentsScreen } from '@screens/payments';
import { ProfileScreen } from '@screens/profile';
import { ServicesScreen } from '@screens/services';
import { SupportScreen } from '@screens/support';

import { SCREEN_NAMES } from './screenNames';

import type { Screen } from '@interfaces/screen';

const { AUTH, HOME, MORE, PAYMENTS, PROFILE, SERVICES, SUPPORT } = SCREEN_NAMES;

export const unAuthorizedScreens: Screen[] = [
	{
		name: AUTH,
		component: AuthScreen,
	},
];

export const authorizedScreens: Screen[] = [
	{
		name: HOME,
		component: HomeScreen,
	},
	{
		name: PAYMENTS,
		component: PaymentsScreen,
	},
	{
		name: SERVICES,
		component: ServicesScreen,
	},
	{
		name: SUPPORT,
		component: SupportScreen,
	},
	{
		name: MORE,
		component: MoreScreen,
	},
	{
		name: PROFILE,
		component: ProfileScreen,
	},
];
