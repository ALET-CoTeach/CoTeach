import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lessonRequestApi = createApi({
  reducerPath: 'lessonRequestApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: (builder) => ({
    getLessonRequest: builder.query({
      query: () => '/lessonrequest',
    }),
  }),
});

export const { useGetLessonRequestQuery } = lessonRequestApi;
