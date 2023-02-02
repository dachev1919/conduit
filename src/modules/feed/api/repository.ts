import {createApi} from "@reduxjs/toolkit/query/react";
import {axiosBaseQuery} from "../../../core/axios-base-quary";

export const feedApi = createApi({
    reducerPath: "feedApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://api.realworld.io/api/articles",
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query({
            query: () => ({
                method: "get",
                url: "/articles"
            }),
        }),
    }),
});

export const { useGetGlobalFeedQuery } = feedApi;