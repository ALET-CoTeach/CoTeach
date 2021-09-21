import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export default createApi({
  reducerPath: 'backendAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['ActivityRequest'],
  endpoints: () => ({}),
});
