import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    registerSlt: builder.query({
      query: () => '/slt/register',
      method: 'POST',
    }),
    signInSlt: builder.mutation({
      query: ({ ...values }) => ({
        url: '/slt/signin',
        method: 'POST',
        body: values,
      }),
    }),
    deleteSlt: builder.query({
      query: ({ sltId }) => `/slt/${sltId}`,
      method: 'DELETE',
    }),
    updateSlt: builder.query({
      query: ({ sltId }) => `/slt/${sltId}`,
      method: 'PUT',
    }),
  }),
});
