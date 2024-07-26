import { createSlice } from '@reduxjs/toolkit';

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
