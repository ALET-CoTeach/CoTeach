import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminAPI = createApi({
  reducerPath: 'AdminAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}/admin`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    postAdmin: builder.query({
      query: () => '/register',
      method: 'POST',
    }),
    signinAdmin: builder.query({
      query: '/signin',
    }),
  }),
});

export const {
  usePostAdminQuery,
  useSigninAdminQuery,
} = adminAPI;
