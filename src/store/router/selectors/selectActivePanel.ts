import { Store } from 'store/Store';
import { PanelIds } from 'enums/router';

export const selectActivePanel = (state: Store): PanelIds => state.router.activePanel;
