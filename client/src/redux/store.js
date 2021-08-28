import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { activityAPI } from '../services/backendAPI/activity_request';
import { adminAPI } from '../services/backendAPI/admin';
import { companyAPI } from '../services/backendAPI/company';

import allReducers from './reducers';

const store = configureStore({
  reducer: {
    [activityAPI.reducerPath]: activityAPI.reducer,
    ...allReducers,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(activityAPI.middleware)
    .concat(adminAPI.middleware)
    .concat(companyAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
