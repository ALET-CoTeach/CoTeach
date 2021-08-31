import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companyAPI = createApi({
  reducerPath: 'companyAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}/company`,
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
    postCompany: builder.query({
      query: () => '/',
      method: 'POST',
    }),
    getCompanies: builder.query({
      query: '/',
    }),
    deleteCompany: builder.query({
      query: ({ companyId }) => `/${companyId}`,
      method: 'DELETE',
    }),
    updateCompany: builder.query({
      query: ({ companyId }) => `/${companyId}`,
      method: 'PUT',
    }),
  }),
});

export const {
  usePostCompanyQuery,
  useGetCompaniesQuery,
  useDeleteCompanyQuery,
  useUpdateCompanyQuery,
} = companyAPI;
