import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addressApi = createApi({
    reducerPath: "addressApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API }),
    endpoints: (builder) => ({
        getProvinces: builder.query({
            query: () => "/address/provinces",
            keepUnusedDataFor: 5,
            transformResponse: (response) => response.data,
        }),
    }),
    // refetchOnFocus: true,
    refetchOnReconnect: true,
});

export const { useGetProvincesQuery } = addressApi;
