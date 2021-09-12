import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    registerAdmin: builder.query({
      query: () => '/admin/register',
      method: 'POST',
    }),
    signInAdmin: builder.mutation({
      query: ({ ...values }) => ({
        url: '/admin/signin',
        method: 'POST',
        body: values,
      }),
    }),
  }),
});
