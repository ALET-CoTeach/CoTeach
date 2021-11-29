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
      query: (values) => `/activityrequest/${values?.role}:${values?.id}`,
      providesTags: ['ActivityRequest'],
      transformResponse: (response) => response.activityRequests,
    }),
    deleteActivityRequest: builder.query({
      query: ({ activityRequestId }) => `/activityrequest/${activityRequestId}`,
      method: 'DELETE',
    }),
    activityRequestStartNegotiation: builder.mutation({
      query: (values) => ({
        url: '/activityrequest/negotiate',
        method: 'PUT',
        body: {
          ...values,
          status: 'negotiating',
        },
      }),
      invalidatesTags: ['ActivityRequest'],
      transformResponse: (response) => response.activityRequest,
    }),
    activityRequestCancelNegotiation: builder.mutation({
      query: (values) => ({
        url: `/activityrequest/negotiate/${values._id}`,
        body: {
          ...values,
          status: 'pending',
        },
        method: 'PUT',
      }),
      invalidatesTags: ['ActivityRequest'],
      transformResponse: (response) => response.activityRequest,
    }),
    bookActivityRequest: builder.mutation({
      query: (values) => ({
        url: `/activityrequest/negotiate/${values._id}`,
        body: {
          ...values,
          status: 'booked',
        },
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
