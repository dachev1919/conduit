import { FC } from "react";
import {Article} from "../article/Article";

interface ArticleListProps {}

export const ArticleList: FC<ArticleListProps> = () => {
    return (
        <>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
        </>
    )
}
