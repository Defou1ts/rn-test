import type { FC } from 'react';

import type { SCREEN_NAMES } from '@constants/screenNames';

export interface Screen {
	name: SCREEN_NAMES;
	component: FC;
}
