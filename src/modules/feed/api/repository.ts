import {createApi} from "@reduxjs/toolkit/query/react";
import {axiosBaseQuery} from "../../../core/axios-base-quary";
import {IFeedArticle, IGlobalFeedInDTO} from "./dto/global-feed.in";
import {FEED_PAGE_SIZE} from "../consts/consts";
import {IPopularTagsInDTO} from "./dto/popular-tags.in";

interface IGlobalFeedParams {
    page: number;
    tag: string | null;
}

export interface IFeedData {
    articles: IFeedArticle[];
    articlesCount: number;
}

export const feedApi = createApi({
    reducerPath: "feedApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://api.realworld.io/api",
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<IFeedData, IGlobalFeedParams>({
            query: ({page, tag}) => ({
                url: "/articles",
                params: {
                    limit: FEED_PAGE_SIZE,
                    offset: page * FEED_PAGE_SIZE,
                    tag
                }
            }),
            transformResponse: (response: IGlobalFeedInDTO ) => {
                return {
                    articles: response.articles || [],
                    articlesCount: response.articlesCount || 0,
                };
            },
        }),
        getPopularTags: builder.query<IPopularTagsInDTO, string>({
            query: () => ({
                url: "/tags",
            })
        }),
    }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;