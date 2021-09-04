import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const activityAPI = createApi({
  reducerPath: 'activityRequestAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}/activityrequest`,
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
    postActivityRequest: builder.query({
      query: () => '/',
      method: 'POST',
    }),
    getActivityRequests: builder.query({
      query: () => '/',
      transformResponse: (response) => response.activityRequests,
    }),
    getUserActivityRequests: builder.query({
      query: ({ role, id }) => `/${role}:${id}`,
    }),
    deleteActivityRequest: builder.query({
      query: ({ activityRequestId }) => `/${activityRequestId}`,
      method: 'DELETE',
    }),
    updateActivityRequest: builder.query({
      query: ({ activityRequestId }) => `/${activityRequestId}`,
      method: 'PUT',
    }),
  }),
});

export const {
  usePostActivityRequestQuery,
  useGetActivityRequestsQuery,
  useGetBookedActivityRequestsQuery,
  useDeleteActivityRequestQuery,
  useUpdateActivityRequestQuery,
  usePrefetch,
} = activityAPI;
