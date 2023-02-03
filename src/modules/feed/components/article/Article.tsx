import {FC} from "react";
import {Link} from "react-router-dom";
import {FavoriteButton} from "../favorite-button/FavoriteButton";
import {TagList} from "../tag-list/TagList";
import {IFeedArticle} from "../../api/dto/global-feed.in";
import {DateTime} from "luxon";

interface ArticleProps extends IFeedArticle {
}

export const Article: FC<ArticleProps> = ({author, createdAt, favoritesCount, body, description, tagList}) => {
    return (
        <article>
            <div className="border-t border-black/10 py-6">
                <div className="mb-4 font-light flex justify-between">
                    <div>
                        <Link to={`/conduit/@${author.username}`}>
                            <img className="inline-block h-8 w-8 rounded-full"
                                 src={author.image} alt={author.username}/>
                        </Link>
                        <div className="mr-6 ml-0.3 inline-flex flex-col leading-4">
                            <Link className="font-medium" to={`/conduit/@${author.username}`}>
                                {author.username}
                            </Link>
                            <span className="text-conduit-gray-500 text-date">{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
                        </div>
                    </div>
                    <FavoriteButton count={favoritesCount}/>
                </div>
                <Link to={`/conduit/@${author.username}`} className="text-inherit hover:text-inherit">
                    <h1 className="mb-1 font-semibold text-2xl">{body.replace(/\\n/g, ' ')}</h1>
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
