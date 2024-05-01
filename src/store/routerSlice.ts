import { createSlice } from '@reduxjs/toolkit';

import { ModalIds, PanelIds, ViewIds } from '../enums/router';
import { Store } from './store';

export type RouterState = {
  activePanel: PanelIds;
  panelHistory: PanelIds[];
  activeView: ViewIds;
  viewHistory: ViewIds[];
  activeModal: ModalIds | null;
  modalHistory: ModalIds[];
  routerParams: Record<string, string | number>;
};

const initialState: RouterState = {
  activePanel: PanelIds.Panel1,
  panelHistory: [PanelIds.Panel1],
  activeView: ViewIds.Home,
  viewHistory: [ViewIds.Home],
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
      state.activePanel = panelId;
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
      state.panelHistory = newPanelHistory;
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

// selectors
export const selectActiveView = (state: Store) => state.router.activeView;
export const selectActivePanel = (state: Store) => state.router.activePanel;
export const selectActiveModal = (state: Store) => state.router.activeModal;
export const selectViewHistory = (state: Store) => state.router.viewHistory;
export const selectPanelHistory = (state: Store) => state.router.panelHistory;
export const selectModalHistory = (state: Store) => state.router.modalHistory;
