import { createSlice } from '@reduxjs/toolkit';

import { Store } from './store';

export type UserInterfaceState = {
  snackbarMessage: string | undefined;
  isTabbarVisible: boolean;
  // e.g. mode: 'light' | 'dark';
};

const initialState: UserInterfaceState = {
  snackbarMessage: undefined,
  isTabbarVisible: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // actions
    setSnackbarMessage(state, { payload }) {
      const message: string = payload;
      state.snackbarMessage = message;
    },
    setTabbarVisibility(state, { payload }) {
      const isVisible: boolean = payload;
      state.isTabbarVisible = isVisible;
    },
  },
});

// reducer
export const uiReducer = uiSlice.reducer;

// actions
export const { setSnackbarMessage, setTabbarVisibility } = uiSlice.actions;

// selectors
export const selectSnackbarMessage = (state: Store) => state.ui.snackbarMessage;
export const selectTabbarVisibility = (state: Store) => state.ui.isTabbarVisible;
