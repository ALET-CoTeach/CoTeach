import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { backendApi } from '../services/backend_api';

import allReducers from './reducers';

const store = configureStore({
  reducer: {
    [backendApi.reducerPath]: backendApi.reducer,
    ...allReducers,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendApi.middleware),
});

setupListeners(store.dispatch);

export default store;
