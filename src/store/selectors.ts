import { Store } from './store';

// router slice
export const selectActiveView = (state: Store) => state.router.activeView;
export const selectActivePanel = (state: Store) =>
  state.router.activePanel[state.router.activeView];
export const selectActiveModal = (state: Store) => state.router.activeModal;
export const selectViewHistory = (state: Store) => state.router.viewHistory;
export const selectPanelHistory = (state: Store) =>
  state.router.panelHistory[state.router.activeView];
export const selectModalHistory = (state: Store) => state.router.modalHistory;

// ui slice
export const selectSnackbarMessage = (state: Store) => state.ui.snackbarMessage;
