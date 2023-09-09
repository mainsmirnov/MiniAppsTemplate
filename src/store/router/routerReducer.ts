import { actionSetActiveModal } from './actions/actionSetActiveModal';
import { actionSetActivePanel } from './actions/actionSetActivePanel';
import { actionSetActiveView } from './actions/actionSetActiveView';
import { actionSetModalHistory } from './actions/history/actionSetModalHistory';
import { actionSetPanelHistory } from './actions/history/actionSetPanelHistory';
import { actionSetViewHistory } from './actions/history/actionSetViewHistory';
import { MODAL_HISTORY_SET, setModalHistory } from './sets/history/setModalHistory';
import { PANEL_HISTORY_SET, setPanelHistory } from './sets/history/setPanelHistory';
import { setViewHistory, VIEW_HISTORY_SET } from './sets/history/setViewHistory';
import { ACTIVE_MODAL_SET, setActiveModal } from './sets/setActiveModal';
import { ACTIVE_PANEL_SET, setActivePanel } from './sets/setActivePanel';
import { ACTIVE_VIEW_SET, setActiveView } from './sets/setActiveView';
import { RouterStore, routerStore } from './routerStore';

export type RouterActions = ReturnType<
| typeof setModalHistory
| typeof setPanelHistory
| typeof setViewHistory
| typeof setActiveModal
| typeof setActivePanel
| typeof setActiveView
>;

export const routerReducer = (
  state = routerStore,
  action: RouterActions,
): RouterStore => {
  switch (action.type) {
    case MODAL_HISTORY_SET:
      return actionSetModalHistory(state, action.data);

    case PANEL_HISTORY_SET:
      return actionSetPanelHistory(state, action.data);

    case VIEW_HISTORY_SET:
      return actionSetViewHistory(state, action.data);

    case ACTIVE_PANEL_SET:
      return actionSetActivePanel(state, action.data);

    case ACTIVE_MODAL_SET:
      return actionSetActiveModal(state, action.data);

    case ACTIVE_VIEW_SET:
      return actionSetActiveView(state, action.data);

    default:
      return state;
  }
};
