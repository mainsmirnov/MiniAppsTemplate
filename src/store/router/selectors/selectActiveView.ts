import { Store } from 'store/Store';
import { ViewIds } from 'enums/router';

export const selectActiveView = (state: Store): ViewIds => state.router.activeView;
