import {FC} from "react";
import {ArticleMeta} from "../article-meta/ArticleMeta";
import {IFeedAuthor} from "../../api/dto/global-feed.in";

interface CommentItemProps {
    body: string;
    author: IFeedAuthor;
    publishedAt: string;
}

export const CommentItem: FC<CommentItemProps> = ({body, author, publishedAt}) => {

    return (
        <div className="border border-conduit-gray-250 rounded-buttonSm">
            <div className="p-5">
                <p>
                    {body}
                </p>
            </div>
            <div className="px-5 py-3 border-t border-conduit-gray-250 bg-conduit-gray-150">
                <ArticleMeta
                    authorDirection="ROW"
                    authorNameSize="SM"
                    showActionButtons={false}
                    publishedAt={publishedAt}
                    authorNameStyle="GREEN"
                    author={author}
                />
            </div>
        </div>
    )
}
