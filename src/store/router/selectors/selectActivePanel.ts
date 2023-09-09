import { PanelIds } from 'enums/router';

import { Store } from 'store/Store';

export const selectActivePanel = (state: Store): PanelIds => state.router.activePanel;
