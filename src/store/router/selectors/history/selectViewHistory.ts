import { ViewIds } from 'enums/router';

import { Store } from 'store/Store';

export const selectViewHistory = (state: Store): ViewIds[] => state.router.viewHistory;
