import { FC } from "react";
import {NavLink, useSearchParams} from "react-router-dom";
import clsx from "clsx";

interface IFeedToggleItemBase {
    id: number;
    text: string;
    link: string;
}

interface FeedToggleProps {
    defaultText?: string;
    defaultLink?: string;
    items?: IFeedToggleItemBase[];
}

export const FeedToggle: FC<FeedToggleProps> = ({defaultText = "Global Feed", defaultLink = "/conduit", items = []}) => {
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");
    const globalFeedClasses = ({isActive}: {isActive: boolean}) => clsx("leading-none px-2 py-4 border-b-2 border-conduit-green bg-white transition-none transition-colors", {
        "border-none text-black/30 hover:text-black/60": tag || !isActive
    })

    return (
        <div>
            <ul className="flex gap-5">
                <li className="flex">
                    <NavLink className={globalFeedClasses} to={defaultLink} end>{defaultText}</NavLink>
                </li>
                {items.map(item => (
                    <li key={item.id} className="flex">
                        <NavLink className={globalFeedClasses} to={item.link}>{item.text}</NavLink>
                    </li>
                ))}
                {tag && (
                    <li className="flex">
                        <span className="leading-none px-2 py-4 border-b-2 text-conduit-green border-conduit-green bg-white">#{tag}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
