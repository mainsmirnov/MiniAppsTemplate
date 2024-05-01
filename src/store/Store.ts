import { configureStore } from '@reduxjs/toolkit';
import { isDevelop } from 'config';

import { routerReducer, RouterState } from './routerSlice';

export type Store = {
  router: RouterState;
};

const store = configureStore({
  reducer: {
    router: routerReducer,
  },
  devTools: isDevelop,
});

export default store;
