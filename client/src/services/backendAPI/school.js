import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const schoolAPI = createApi({
  reducerPath: 'schoolAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}/school`,
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
    postSchool: builder.query({
      query: () => '/',
      method: 'POST',
    }),
    getSchool: builder.query({
      query: '/',
    }),
    deleteSchool: builder.query({
      query: ({ schoolId }) => `/:${schoolId}`,
      method: 'DELETE',
    }),
    updateSchool: builder.query({
      query: ({ schoolId }) => `/:${schoolId}`,
      method: 'PUT',
    }),
  }),
});

export const {
  usePostSchoolQuery,
  useGetSchoolQuery,
  useDeleteSchoolQuery,
  useUpdateSchoolQuery,
} = schoolAPI;
