import {FC} from "react";
import {ArticleAuthor, NameStyleEnum} from "../article-author/ArticleAuthor";
import {FollowButton} from "../../../profile/components/follow-button/FollowButton";
import {FavoriteButton} from "../favorite-button/FavoriteButton";
import {IFeedAuthor} from "../../api/dto/global-feed.in";

interface ArticleMetaProps {
    authorNameStyle?: keyof typeof NameStyleEnum;
    author: IFeedAuthor;
    likes: number;
    publishedAt: string;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({authorNameStyle = NameStyleEnum.LIGHT, author, likes, publishedAt}) => {

    return (
        <>
            <div className="flex items-center gap-2">
                <ArticleAuthor author={author} publishedAt={publishedAt} nameStyle={authorNameStyle}/>
                <FollowButton name={author.username} />
                <FavoriteButton count={likes} customText="Favorite Article" />
            </div>
        </>
    )
}
