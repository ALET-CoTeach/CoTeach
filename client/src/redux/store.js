import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { activityAPI } from '@services/backendAPI/activity_request';
import { adminAPI } from '@services/backendAPI/admin';
import { companyAPI } from '@services/backendAPI/company';
import { employerAPI } from '@services/backendAPI/employer';
import { schoolAPI } from '@services/backendAPI/school';
import { sltAPI } from '@services/backendAPI/slt';
import { socialMediaPostAPI } from '@services/backendAPI/social_media_post';
import { teacherAPI } from '@services/backendAPI/teacher';

import allReducers from './reducers';

const store = configureStore({
  reducer: {
    ...allReducers,
    [activityAPI.reducerPath]: activityAPI.reducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
    [companyAPI.reducerPath]: companyAPI.reducer,
    [employerAPI.reducerPath]: employerAPI.reducer,
    [schoolAPI.reducerPath]: schoolAPI.reducer,
    [sltAPI.reducerPath]: sltAPI.reducer,
    [socialMediaPostAPI.reducerPath]: socialMediaPostAPI.reducer,
    [teacherAPI.reducerPath]: teacherAPI.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(activityAPI.middleware)
    .concat(adminAPI.middleware)
    .concat(companyAPI.middleware)
    .concat(employerAPI.middleware)
    .concat(schoolAPI.middleware)
    .concat(sltAPI.middleware)
    .concat(socialMediaPostAPI.middleware)
    .concat(teacherAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
