import {FC} from "react";
import {Link} from "react-router-dom";
import {FavoriteButton} from "../favorite-button/FavoriteButton";
import {TagList} from "../tag-list/TagList";
import {IFeedArticle} from "../../api/dto/global-feed.in";
import {ArticleAuthor} from "../article-author/ArticleAuthor";

interface ArticleProps extends IFeedArticle {
}

export const Article: FC<ArticleProps> = ({author, createdAt, favoritesCount, body, description, tagList, slug}) => {
    return (
        <article>
            <div className="border-t border-black/10 py-6">
                <div className="mb-4 font-light flex justify-between">
                    <ArticleAuthor author={author} createdAt={createdAt} />
                    <FavoriteButton count={favoritesCount}/>
                </div>
                <Link to={`/conduit/article/${encodeURIComponent(slug)}`} className="text-inherit hover:text-inherit">
                    <h2 className="mb-1 font-semibold text-2xl">{body.replace(/\\n/g, ' ')}</h2>
                    <p className="text-conduit-gray-700 font-light mb-1">
                        {description}
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-conduit-gray-500 text-date font-light hover:text-conduit-darkGreen transition-all">Read more...</span>
                        <TagList list={tagList}/>
                    </div>
                </Link>
            </div>
        </article>
    )
}
