import {ComponentProps, FC} from "react";
import {ArticleAuthor, NameStyleEnum} from "../article-author/ArticleAuthor";
import {FollowButton} from "../../../profile/components/follow-button/FollowButton";
import {FavoriteButton} from "../favorite-button/FavoriteButton";
import {IFeedAuthor} from "../../api/dto/global-feed.in";

interface ArticleMetaProps {
    author: IFeedAuthor;
    publishedAt: string;
    authorNameStyle?: ComponentProps<typeof ArticleAuthor>['nameStyle'];
    authorDirection?: ComponentProps<typeof ArticleAuthor>['direction'];
    authorNameSize?: ComponentProps<typeof ArticleAuthor>['nameSize'];
    likes?: number;
    showActionButtons?: boolean;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({
                                                      authorNameStyle = NameStyleEnum.LIGHT,
                                                      author,
                                                      likes,
                                                      publishedAt,
                                                      showActionButtons = true,
                                                      authorDirection,
                                                      authorNameSize
                                                  }) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <ArticleAuthor nameSize={authorNameSize} direction={authorDirection} author={author}
                               publishedAt={publishedAt} nameStyle={authorNameStyle}/>
                {showActionButtons && (
                    <>
                        <FollowButton btnStyle="DARK" name={author.username}/>
                        <FavoriteButton count={likes || 0} customText="Favorite Article"/>
                    </>
                )}
            </div>
        </>
    )
}
