import { PanelIds } from 'enums/router';

import { Action } from 'store/Action';

export const PANEL_HISTORY_SET = 'panelHistory/set';

export const setPanelHistory: Action<typeof PANEL_HISTORY_SET, PanelIds[]> = (panelHistory) => ({
  type: PANEL_HISTORY_SET,
  data: panelHistory,
});

