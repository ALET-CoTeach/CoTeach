import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teacherAPI = createApi({
  reducerPath: 'teacherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}/teacher`,
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
    registerTeacher: builder.query({
      query: () => '/register',
      method: 'POST',
    }),
    signInTeacher: builder.query({
      query: '/signin',
      method: 'POST',
    }),
    deleteTeacher: builder.query({
      query: ({ teacherId }) => `/${teacherId}`,
      method: 'DELETE',
    }),
    updateTeacher: builder.query({
      query: ({ teacherId }) => `/${teacherId}`,
      method: 'PUT',
    }),
  }),
});

export const {
  useRegisterTeacherQuery,
  useSignInTeacherQuery,
  useDeleteTeacherQuery,
  useUpdateTeacherQuery,
} = teacherAPI;
