import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    postCompany: builder.query({
      query: () => '/company',
      method: 'POST',
    }),
    getCompanies: builder.query({
      query: () => '/company',
    }),
    deleteCompany: builder.query({
      query: ({ companyId }) => `/company/${companyId}`,
      method: 'DELETE',
    }),
    updateCompany: builder.query({
      query: ({ companyId }) => `/company/${companyId}`,
      method: 'PUT',
    }),
  }),
});
