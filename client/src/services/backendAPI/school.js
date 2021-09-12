import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    postSchool: builder.query({
      query: () => '/school',
      method: 'POST',
    }),
    getSchool: builder.query({
      query: '/school',
    }),
    deleteSchool: builder.query({
      query: ({ schoolId }) => `/school/${schoolId}`,
      method: 'DELETE',
    }),
    updateSchool: builder.query({
      query: ({ schoolId }) => `/school/${schoolId}`,
      method: 'PUT',
    }),
  }),
});
