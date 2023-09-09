import { ViewIds } from 'enums/router';

import { Store } from 'store/Store';

export const selectActiveView = (state: Store): ViewIds => state.router.activeView;
