import { RouterStore } from '../../routerStore';
import { setPanelHistory } from '../../sets/history/setPanelHistory';

export const actionSetPanelHistory = (
  state: RouterStore,
  panelHistory: ReturnType<typeof setPanelHistory>['data'],
): RouterStore => ({
  ...state,
  panelHistory,
});
