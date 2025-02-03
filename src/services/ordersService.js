import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: ({ localId, order }) => ({
        url: `orders/${localId}.json`,
        method: "POST",
        body: order,
      }),
    }),
    getOrders: builder.query({
      query: (localId) => `orders/${localId}.json`,
      transformResponse: (response) => {
        const orders = Object.values(response);

        return orders;
      },
    }),
  }),
});

export const { usePostOrderMutation, useGetOrdersQuery } = ordersApi;
