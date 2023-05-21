import { RouterStore } from '../../routerStore';
import { setViewHistory } from '../../sets/history/setViewHistory';

export const actionSetViewHistory = (
  state: RouterStore,
  viewHistory: ReturnType<typeof setViewHistory>['data'],
): RouterStore => ({
  ...state,
  viewHistory,
});
