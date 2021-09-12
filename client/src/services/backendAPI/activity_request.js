import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    postActivityRequest: builder.query({
      query: () => '/activityrequest',
      method: 'POST',
    }),
    getActivityRequests: builder.query({
      query: () => '/activityrequest',
      transformResponse: (response) => response.activityRequests,
    }),
    getUserActivityRequests: builder.query({
      query: ({ role, id }) => `/activityrequest/${role}:${id}`,
      transformResponse: (response) => response.activityRequests,
    }),
    deleteActivityRequest: builder.query({
      query: ({ activityRequestId }) => `/activityrequest/${activityRequestId}`,
      method: 'DELETE',
    }),
    updateActivityRequest: builder.query({
      query: ({ activityRequestId }) => `/activityrequest/${activityRequestId}`,
      method: 'PUT',
    }),
  }),
});
