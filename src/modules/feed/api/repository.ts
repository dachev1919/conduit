import {createApi} from "@reduxjs/toolkit/query/react";
import {axiosBaseQuery} from "../../../core/axios-base-quary";
import {IGlobalFeedIn} from "./dto/global-feed.in";
import {FEED_PAGE_SIZE} from "../consts/consts";

interface IGlobalFeedParams {
    page: number;
}

export const feedApi = createApi({
    reducerPath: "feedApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://api.realworld.io/api",
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<IGlobalFeedIn, IGlobalFeedParams>({
            query: ({page}) => ({
                method: "get",
                url: "/articles",
                params: {
                    limit: FEED_PAGE_SIZE,
                    offset: page * FEED_PAGE_SIZE
                }
            }),
        }),
    }),
});

export const { useGetGlobalFeedQuery } = feedApi;