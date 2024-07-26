import { createSlice } from '@reduxjs/toolkit';

import { Store } from './store';

export type UserInterfaceState = {
  snackbarMessage: string | undefined;
  // e.g. mode: 'light' | 'dark';
};

const initialState: UserInterfaceState = {
  snackbarMessage: undefined,
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
  },
});

// reducer
export const uiReducer = uiSlice.reducer;

// actions
export const { setSnackbarMessage } = uiSlice.actions;

// selectors
export const selectSnackbarMessage = (state: Store) => state.ui.snackbarMessage;
