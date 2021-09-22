import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    registerEmployer: builder.query({
      query: () => '/employer/register',
      method: 'POST',
    }),
    signInEmployer: builder.mutation({
      query: ({ ...values }) => ({
        url: '/employer/signin',
        method: 'POST',
        body: values,
      }),
    }),
    deleteEmployer: builder.query({
      query: ({ employerId }) => `/employer/${employerId}`,
      method: 'DELETE',
    }),
    updateEmployer: builder.query({
      query: ({ employerId }) => `/employer/${employerId}`,
      method: 'PUT',
    }),
  }),
});
