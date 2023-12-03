import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store-reducer';
import { createAPI } from './components/api';
import { redirect } from './components/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
