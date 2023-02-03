import {FC} from "react";
import {Link} from "react-router-dom";
import {DateTime} from "luxon";
import {IFeedAuthor} from "../../api/dto/global-feed.in";
import clsx from "clsx";

export enum MetaDirectionsEnum {
    ROW = "ROW",
    COL = "COL",
}

export enum NameStyleEnum {
    LIGHT = "LIGHT",
    GREEN = "GREEN",
}

enum NameSizeEnum {
    BASE = "BASE",
    SM = "SM"
}

interface ArticleAuthorProps {
    author: IFeedAuthor;
    publishedAt: string;
    nameStyle?: keyof typeof NameStyleEnum;
    direction?: keyof typeof MetaDirectionsEnum;
    nameSize?: keyof typeof NameSizeEnum;
}

export const ArticleAuthor: FC<ArticleAuthorProps> = ({author, publishedAt, nameStyle = NameStyleEnum.GREEN, direction = MetaDirectionsEnum.COL, nameSize = NameSizeEnum.BASE }) => {
    const userNameClasses = clsx("font-medium", {
        "text-white hover:text-conduit-gray-300": nameStyle === NameStyleEnum.LIGHT,
        "text-date": nameSize === NameSizeEnum.SM,
    });

    return (
        <div className="flex gap-2">
            <Link to={`/conduit/${author.username}`}>
                <img className={`inline-block ${nameSize === NameSizeEnum.BASE ? "h-8 w-8" : "h-5 w-5"} rounded-full`}
                     src={author.image} alt={author.username}/>
            </Link>
            <div className={`mr-6 ml-0.3 inline-flex ${direction === "COL" ? "flex-col" : "flex-row gap-2 items-center"} leading-4`}>
                <Link className={userNameClasses} to={`/conduit/${author.username}`}>
                    {author.username}
                </Link>
                <span className="text-conduit-gray-500 text-date">{DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_FULL)}</span>
            </div>
        </div>
    )
}
