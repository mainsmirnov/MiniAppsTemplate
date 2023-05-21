import { RouterStore } from '../routerStore';
import { setActiveView } from '../sets/setActiveView';

export const actionSetActiveView = (
  state: RouterStore,
  activeView: ReturnType<typeof setActiveView>['data'],
): RouterStore => ({
  ...state,
  activeView,
});

