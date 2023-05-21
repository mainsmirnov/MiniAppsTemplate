import { RouterStore } from '../../routerStore';
import { setModalHistory } from '../../sets/history/setModalHistory';

export const actionSetModalHistory = (
  state: RouterStore,
  modalHistory: ReturnType<typeof setModalHistory>['data'],
): RouterStore => ({
  ...state,
  modalHistory,
});
