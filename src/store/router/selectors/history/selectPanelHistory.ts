import { PanelIds } from 'enums/router';

import { Store } from 'store/Store';

export const selectPanelHistory = (state: Store): PanelIds[] => state.router.panelHistory;
