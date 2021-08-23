import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: (builder) => ({
    getLessonRequest: builder.query({
      query: () => '/lessonrequest',
    }),
  }),
});

export const { useGetLessonRequestQuery } = backendApi;
