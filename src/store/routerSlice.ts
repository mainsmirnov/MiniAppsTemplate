import { createSlice } from '@reduxjs/toolkit';

import { ModalIds, PanelIds, ViewIds } from '../enums/router';

export type RouterState = {
  activeView: ViewIds;
  viewHistory: ViewIds[];
  activePanel: Record<ViewIds, PanelIds>;
  panelHistory: Record<ViewIds, PanelIds[]>;
  activeModal: ModalIds | null;
  modalHistory: ModalIds[];
  routerParams: Record<string, string | number>;
};

const initialState: RouterState = {
  activeView: ViewIds.Main,
  viewHistory: [ViewIds.Main],
  activePanel: { [ViewIds.Main]: PanelIds.Main, [ViewIds.Shop]: PanelIds.Shop },
  panelHistory: { [ViewIds.Main]: [PanelIds.Main], [ViewIds.Shop]: [PanelIds.Shop] },
  activeModal: null,
  modalHistory: [],
  routerParams: {},
};

const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    // actions
    setActiveView(state, { payload }) {
      const viewId: ViewIds = payload;
      state.activeView = viewId;
    },
    setActivePanel(state, { payload }) {
      const panelId: PanelIds = payload;
      state.activePanel[state.activeView] = panelId;
    },
    setActiveModal(state, { payload }) {
      const modalId: ModalIds = payload;
      state.activeModal = modalId;
    },
    setViewHistory(state, { payload }) {
      const newViewHistory: ViewIds[] = payload;
      state.viewHistory = newViewHistory;
    },
    setPanelHistory(state, { payload }) {
      const newPanelHistory: PanelIds[] = payload;
      state.panelHistory[state.activeView] = newPanelHistory;
    },
    setModalHistory(state, { payload }) {
      const newModalHistory: ModalIds[] = payload;
      state.modalHistory = newModalHistory;
    },
  },
});

// reducer
export const routerReducer = routerSlice.reducer;

// actions
export const {
  setActiveView,
  setActivePanel,
  setActiveModal,
  setViewHistory,
  setPanelHistory,
  setModalHistory,
} = routerSlice.actions;
