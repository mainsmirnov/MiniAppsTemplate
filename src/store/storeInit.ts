import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';
import { isDevelop } from 'config';

import { rootReducer } from './reducers';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: isDevelop,
});

sagaMiddleware.run(rootSaga);
