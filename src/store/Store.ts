import { configureStore } from '@reduxjs/toolkit';
import { isDevelop } from 'config';

import { routerReducer, RouterState } from './routerSlice';
import { uiReducer, UserInterfaceState } from './uiSlice';

export type Store = {
  ui: UserInterfaceState;
  router: RouterState;

};

const store = configureStore({
  reducer: {
    ui: uiReducer,
    router: routerReducer,
  },
  devTools: isDevelop,
});

export default store;
