import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import backendAPI from '@services/backendAPI/';

import allReducers from './reducers';

const store = configureStore({
  reducer: {
    ...allReducers,
    [backendAPI.reducerPath]: backendAPI.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(backendAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
