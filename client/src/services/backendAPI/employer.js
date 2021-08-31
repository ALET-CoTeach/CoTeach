import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employerAPI = createApi({
  reducerPath: 'employerAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}/employer`,
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
    registerEmployer: builder.query({
      query: () => '/register',
      method: 'POST',
    }),
    signInEmployer: builder.mutation({
      query: ({ ...values }) => ({
        url: '/signin',
        method: 'POST',
        body: values,
      }),
    }),
    deleteEmployer: builder.query({
      query: ({ employerId }) => `/${employerId}`,
      method: 'DELETE',
    }),
    updateEmployer: builder.query({
      query: ({ employerId }) => `/${employerId}`,
      method: 'PUT',
    }),
  }),
});

export const {
  useRegisterEmployerQuery,
  useSignInEmployerMutation,
  useDeleteEmployerQuery,
  useUpdateEmployerQuery,
} = employerAPI;
