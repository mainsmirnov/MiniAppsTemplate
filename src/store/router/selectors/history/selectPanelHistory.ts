import { Store } from 'store/Store';
import { PanelIds } from 'enums/router';

export const selectPanelHistory = (state: Store): PanelIds[] => state.router.panelHistory;
