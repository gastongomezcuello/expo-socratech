import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["addProduct", "removeProduct"],
  endpoints: (builder) => ({
    postCart: builder.mutation({
      query: ({ localId, cart }) => ({
        url: `carts/${localId}.json`,
        method: "PUT",
        body: cart,
      }),
      invalidatesTags: ["addProduct"],
    }),
    getCart: builder.query({
      query: (localId) => `carts/${localId}.json`,
      transformResponse: (response) => {
        const cart = Object.values(response);
        return cart;
      },
      providesTags: ["addProduct", "removeProduct"],
    }),
    deleteCart: builder.mutation({
      query: ({ localId }) => ({
        url: `carts/${localId}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["removeProduct"],
    }),
  }),
});

export const { usePostCartMutation, useDeleteCartMutation, useGetCartQuery } =
  cartApi;
