import { RouterStore } from '../routerStore';
import { setActivePanel } from '../sets/setActivePanel';

export const actionSetActivePanel = (
  state: RouterStore,
  activePanel: ReturnType<typeof setActivePanel>['data'],
): RouterStore => ({
  ...state,
  activePanel,
});

