import {FC} from "react";
import {Link} from "react-router-dom";
import {DateTime} from "luxon";
import {IFeedAuthor} from "../../api/dto/global-feed.in";
import clsx from "clsx";

export enum NameStyleEnum {
    LIGHT = "LIGHT",
    GREEN = "GREEN",
}

interface ArticleAuthorProps {
    author: IFeedAuthor;
    createdAt: string;
    nameStyle?: keyof typeof NameStyleEnum;
}

export const ArticleAuthor: FC<ArticleAuthorProps> = ({author, createdAt, nameStyle = NameStyleEnum.GREEN }) => {
    const userNameClasses = clsx("font-medium", {
        "text-white hover:text-conduit-gray-300": nameStyle === NameStyleEnum.LIGHT,
    })

    return (
        <div className="flex gap-2">
            <Link to={`/conduit/${author.username}`}>
                <img className="inline-block h-8 w-8 rounded-full"
                     src={author.image} alt={author.username}/>
            </Link>
            <div className="mr-6 ml-0.3 inline-flex flex-col leading-4">
                <Link className={userNameClasses} to={`/conduit/${author.username}`}>
                    {author.username}
                </Link>
                <span className="text-conduit-gray-500 text-date">{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
            </div>
        </div>
    )
}
