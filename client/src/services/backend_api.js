import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLessonRequests: builder.query({
      query: () => '/activityrequest/available',
    }),
    getBookedLessonRequests: builder.query({
      query: ({ role, id }) => `/activityrequest/booked/${role}:${id}`,
    }),
    getSocialMediaPosts: builder.query({
      query: () => '/socialmediapost',
    }),
    getEmployers: builder.query({
      query: () => '/employer',
    }),
  }),
});

export const { useGetLessonRequestsQuery, useGetBookedLessonRequestsQuery } = backendApi;
