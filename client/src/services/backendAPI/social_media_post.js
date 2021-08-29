import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const socialMediaPostAPI = createApi({
  reducerPath: 'socialMediaPostAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_API_URL}/socialmediapost`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // creates a hook
    // previxes with "use" capitalises first letter, sufexies with "Query".
    postSocialMedia: builder.query({
      query: () => '/',
      method: 'POST',
    }),
    getSocialMediaPosts: builder.query({
      query: '/',
    }),
    deleteSocialMediaPost: builder.query({
      query: ({ socialMediaPostId }) => `/${socialMediaPostId}`,
      method: 'DELETE',
    }),
    updateSocialMediaPost: builder.query({
      query: ({ socialMediaPostId }) => `/${socialMediaPostId}`,
      method: 'PUT',
    }),
  }),
});

export const {
  usePostSocialMediaQuery,
  useGetSocialMediaPostsQuery,
  useDeleteSocialMediaPostQuery,
  useUpdateSocialMediaPostQuery,
} = socialMediaPostAPI;
