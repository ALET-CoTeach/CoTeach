import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { lessonRequestApi } from '../services/lesson_request';

import allReducers from './reducers';

const store = configureStore({
  reducer: {
    [lessonRequestApi.reducerPath]: lessonRequestApi.reducer,
    ...allReducers,
  },
  devTools: true,
  middlware: (getDefaultMiddleware) => getDefaultMiddleware().concat(lessonRequestApi.middleware),
});

setupListeners(store.dispatch);

export default store;
