import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};


const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`./coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`./coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(
          `/coin/${coinId}/history?timePeriod=${timePeriod}&referenceCurrencyUuid=yhjMzLPhuIDl`
        ),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getExchangeCoins: builder.query({
  query: (exchangeId) =>
    createRequest(`/exchange/${exchangeId}/coins?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc`),
}),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
    useGetExchangeCoinsQuery,
} = cryptoApi;
