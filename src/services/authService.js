import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_auth_url, api_key } from "../firebase/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signInWithPassword?key=${api_key}`,
        method: "POST",
        body: auth,
      }),
    }),
    signup: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${api_key}`,
        method: "POST",
        body: auth,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
