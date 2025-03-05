import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://quotes-api12.p.rapidapi.com" }),
  endpoints: (build) => ({
    getRandomQuote: build.query({
      query: () => ({
        url: "/quotes", // Endpoint URL
        headers: {
          "x-rapidapi-key":
            "8111293951msh987c082a1d77e2cp1ad6d9jsn1730d6d7895f",
        },
      }),
    }),
  }),
});

export const { useGetRandomQuoteQuery, useLazyGetRandomQuoteQuery } = quotesApi;
