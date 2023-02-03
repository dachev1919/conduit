import {IGlobalFeedInDTO} from "../dto/global-feed.in";

export const transformResponse = (response: IGlobalFeedInDTO ) => {
    return {
        articles: response.articles || [],
        articlesCount: response.articlesCount || 0,
    };
}