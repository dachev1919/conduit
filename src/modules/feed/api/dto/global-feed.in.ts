export interface IGlobalFeedIn {
    articles: IFeedArticle[];
    articlesCount: number;
}

export interface IFeedArticle {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: IFeedAuthor;
}

export interface IFeedAuthor {
    username: string;
    bio?: any;
    image: string;
    following: boolean;
}