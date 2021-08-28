import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { activityAPI } from '../services/backendAPI/activity_request';

import allReducers from './reducers';

const store = configureStore({
  reducer: {
    [activityAPI.reducerPath]: activityAPI.reducer,
    ...allReducers,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(activityAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
