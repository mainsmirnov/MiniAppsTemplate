import { PanelIds } from 'enums/router';

import { Action } from 'store/Action';

export const ACTIVE_PANEL_SET = 'activePanel/set';

export const setActivePanel: Action<typeof ACTIVE_PANEL_SET, PanelIds> = (activePanel) => ({
  type: ACTIVE_PANEL_SET,
  data: activePanel,
});

