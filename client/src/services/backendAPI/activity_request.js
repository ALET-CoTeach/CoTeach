import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    postActivityRequest: builder.mutation({
      query: (values) => ({
        url: '/activityrequest',
        body: values,
        method: 'POST',
      }),
      invalidatesTags: ['ActivityRequest'],
      transformResponse: (response) => response.activityRequest,
    }),
    getActivityRequests: builder.query({
      query: () => '/activityrequest',
      providesTags: ['ActivityRequest'],
      transformResponse: (response) => response.activityRequests,
    }),
    getUserActivityRequests: builder.query({
      query: ({ role, id }) => `/activityrequest/${role}:${id}`,
      providesTags: ['ActivityRequest'],
      transformResponse: (response) => response.activityRequests,
    }),
    deleteActivityRequest: builder.query({
      query: ({ activityRequestId }) => `/activityrequest/${activityRequestId}`,
      method: 'DELETE',
    }),
    updateActivityRequestNegotiationData: builder.mutation({
      query: (values) => ({
        url: `/activityrequest/negotiate/${values._id}`,
        body: values,
        method: 'PUT',
      }),
      invalidatesTags: ['ActivityRequest'],
      transformResponse: (response) => response.activityRequest,
    }),
    updateActivityRequest: builder.query({
      query: ({ activityRequestId }) => `/activityrequest/${activityRequestId}`,
      method: 'PUT',
    }),
  }),
});
