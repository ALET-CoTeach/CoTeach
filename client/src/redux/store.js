import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import backendAPI from '@services/backendAPI/';

import allReducers from './reducers';

const reducers = combineReducers({
  ...allReducers,
  [backendAPI.reducerPath]: backendAPI.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(backendAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
