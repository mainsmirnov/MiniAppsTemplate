import { RouterStore, routerStore } from './routerStore';

import { ACTIVE_PANEL_SET, setActivePanel } from './sets/setActivePanel';
import { actionSetActivePanel } from './actions/actionSetActivePanel';
import { ACTIVE_MODAL_SET, setActiveModal } from './sets/setActiveModal';
import { actionSetActiveModal } from './actions/actionSetActiveModal';
import { ACTIVE_VIEW_SET, setActiveView } from './sets/setActiveView';
import { actionSetActiveView } from './actions/actionSetActiveView';
import { MODAL_HISTORY_SET, setModalHistory } from './sets/history/setModalHistory';
import { PANEL_HISTORY_SET, setPanelHistory } from './sets/history/setPanelHistory';
import { VIEW_HISTORY_SET, setViewHistory } from './sets/history/setViewHistory';
import { actionSetModalHistory } from './actions/history/actionSetModalHistory';
import { actionSetPanelHistory } from './actions/history/actionSetPanelHistory';
import { actionSetViewHistory } from './actions/history/actionSetViewHistory';

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
