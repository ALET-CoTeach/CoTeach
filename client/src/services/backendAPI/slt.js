import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sltAPI = createApi({
  reducerPath: 'sltAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}/slt`,
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
    registerSlt: builder.query({
      query: () => '/register',
      method: 'POST',
    }),
    signInSlt: builder.mutation({
      query: ({ ...values }) => ({
        url: '/signin',
        method: 'POST',
        body: values,
      }),
    }),
    deleteSlt: builder.query({
      query: ({ sltId }) => `/${sltId}`,
      method: 'DELETE',
    }),
    updateSlt: builder.query({
      query: ({ sltId }) => `/${sltId}`,
      method: 'PUT',
    }),
  }),
});

export const {
  useRegisterSltQuery,
  useSignInSltMutation,
  useDeleteSltQuery,
  useUpdateSltQuery,
} = sltAPI;
