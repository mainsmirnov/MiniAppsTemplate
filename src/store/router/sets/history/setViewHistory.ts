import { ViewIds } from 'enums/router';

import { Action } from 'store/Action';

export const VIEW_HISTORY_SET = 'viewHistory/set';

export const setViewHistory: Action<typeof VIEW_HISTORY_SET, ViewIds[]> = (viewHistory) => ({
  type: VIEW_HISTORY_SET,
  data: viewHistory,
});

