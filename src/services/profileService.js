import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const profileApi = createApi({
  reducerPath: "profileApi",
  tagTypes: ["ProfileImage"],
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ["ProfileImage"],
    }),
    putProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: { image: image },
      }),
      invalidatesTags: ["ProfileImage"],
    }),
  }),
});

export const { useGetProfileImageQuery, usePutProfileImageMutation } =
  profileApi;
