import backendAPI from './index';

export default backendAPI.injectEndpoints({
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    postSocialMedia: builder.query({
      query: () => '/socialmediapost',
      method: 'POST',
    }),
    getSocialMediaPosts: builder.query({
      query: '/socialmediapost',
    }),
    deleteSocialMediaPost: builder.query({
      query: ({ socialMediaPostId }) => `/socialmediapost/${socialMediaPostId}`,
      method: 'DELETE',
    }),
    updateSocialMediaPost: builder.query({
      query: ({ socialMediaPostId }) => `/socialmediapost/${socialMediaPostId}`,
      method: 'PUT',
    }),
  }),
});
