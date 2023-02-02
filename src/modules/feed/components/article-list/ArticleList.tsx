import { FC } from "react";
import {Article} from "../article/Article";
import {IFeedArticle} from "../../api/dto/global-feed.in";

interface ArticleListProps {
    list: IFeedArticle[];
}

export const ArticleList: FC<ArticleListProps> = ({ list }) => {
    return (
        <>
            {list.map(article => <Article key={article.slug} {...article} />)}
        </>
    )
}
