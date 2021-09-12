import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    registerTeacher: builder.query({
      query: () => '/teacher/register',
      method: 'POST',
    }),
    signInTeacher: builder.mutation({
      query: ({ ...values }) => ({
        url: '/teacher/signin',
        method: 'POST',
        body: values,
      }),
    }),
    deleteTeacher: builder.query({
      query: ({ teacherId }) => `/teacher/${teacherId}`,
      method: 'DELETE',
    }),
    updateTeacher: builder.query({
      query: ({ teacherId }) => `/teacher/${teacherId}`,
      method: 'PUT',
    }),
  }),
});
