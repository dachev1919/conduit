import {createApi} from "@reduxjs/toolkit/query/react";
import {axiosBaseQuery} from "../../../core/axios-base-quary";
import {IGlobalFeedIn} from "./dto/global-feed.in";

export const feedApi = createApi({
    reducerPath: "feedApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://api.realworld.io/api",
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<IGlobalFeedIn, string>({
            query: () => ({
                method: "get",
                url: "/articles"
            }),
        }),
    }),
});

export const { useGetGlobalFeedQuery } = feedApi;