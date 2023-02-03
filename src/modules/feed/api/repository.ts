import {createApi} from "@reduxjs/toolkit/query/react";
import {IFeedArticle} from "./dto/global-feed.in";
import {FEED_PAGE_SIZE} from "../consts/consts";
import {IPopularTagsInDTO} from "./dto/popular-tags.in";
import {transformResponse} from "./utils/utils";
import {realWorldBaseQuery} from "../../../core/api/realworld-base-query";
import {ISingleArticleInDTO} from "./dto/single-article.in";
import {IArticleCommentsInDTO} from "./dto/article-comments.in";

interface IBaseFeedParams {
    page: number;
}

interface IGlobalFeedParams extends IBaseFeedParams{
    tag: string | null;
}

interface IProfileFeedParams extends IBaseFeedParams{
    author: string;
    isFavorite: boolean;
}

export interface IFeedData {
    articles: IFeedArticle[];
    articlesCount: number;
}

interface SingleArticleParams {
    slug: string;
}

export const feedApi = createApi({
    reducerPath: "feedApi",
    baseQuery: realWorldBaseQuery,
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
            transformResponse,
        }),
        getProfileFeed: builder.query<IFeedData, IProfileFeedParams>({
            query: ({page, author, isFavorite = false}) => ({
                url: "/articles",
                params: {
                    limit: FEED_PAGE_SIZE,
                    offset: page * FEED_PAGE_SIZE,
                    author: isFavorite ? undefined : author,
                    favorited: !isFavorite ? undefined : author,
                }
            }),
            transformResponse,
        }),
        getPopularTags: builder.query<IPopularTagsInDTO, string>({
            query: () => ({
                url: "/tags",
            })
        }),
        getSingleArticle: builder.query<ISingleArticleInDTO, SingleArticleParams>({
            query: ({slug}) => ({
                url: `/articles/${slug}`
            })
        }),
        getArticleComments: builder.query<IArticleCommentsInDTO, SingleArticleParams>({
            query: ({slug}) => ({
                url: `/articles/${slug}/comments`
            })
        })
    }),
});

export const {
    useGetGlobalFeedQuery,
    useGetPopularTagsQuery,
    useGetProfileFeedQuery,
    useGetSingleArticleQuery,
    useGetArticleCommentsQuery
} = feedApi;