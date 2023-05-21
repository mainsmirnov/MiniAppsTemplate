import { Store } from 'store/Store';
import { ViewIds } from 'enums/router';

export const selectViewHistory = (state: Store): ViewIds[] => state.router.viewHistory;
