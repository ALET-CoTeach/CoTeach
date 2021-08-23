import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: (builder) => ({
    getLessonRequests: builder.query({
      query: () => '/lessonrequest',
    }),
    getSocialMediaPosts: builder.query({
      query: () => '/socialmediapost',
    }),
    getEmployers: builder.query({
      query: () => '/employer',
    }),
  }),
});

export const { useGetLessonRequestQuery } = backendApi;
