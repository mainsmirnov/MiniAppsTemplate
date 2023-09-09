import { ViewIds } from 'enums/router';

import { Action } from 'store/Action';

export const ACTIVE_VIEW_SET = 'activeView/set';

export const setActiveView: Action<typeof ACTIVE_VIEW_SET, ViewIds> = (activeView) => ({
  type: ACTIVE_VIEW_SET,
  data: activeView,
});

