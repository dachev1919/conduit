import {FC} from "react";
import {ArticleAuthor, NameStyleEnum} from "../article-author/ArticleAuthor";
import {FollowButton} from "../../../profile/components/follow-button/FollowButton";
import {FavoriteButton} from "../favorite-button/FavoriteButton";

interface ArticleMetaProps {
    authorNameStyle?: keyof typeof NameStyleEnum
}

export const ArticleMeta: FC<ArticleMetaProps> = ({authorNameStyle = NameStyleEnum.LIGHT}) => {

    return (
        <>
            <div className="flex items-center gap-2">
                <ArticleAuthor author={{username: "Oleh Dachev", image:"", following: false}} createdAt={new Date().toISOString()} nameStyle={authorNameStyle}/>
                <FollowButton name={"Oleh Dachev"} />
                <FavoriteButton count={84} customText="Favorite Article" />
            </div>
        </>
    )
}
