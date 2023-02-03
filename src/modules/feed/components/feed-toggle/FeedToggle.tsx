import { FC } from "react";
import {NavLink, useSearchParams} from "react-router-dom";
import clsx from "clsx";

interface FeedToggleProps {}

export const FeedToggle: FC<FeedToggleProps> = () => {
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");
    const globalFeedClasses = clsx("leading-none px-2 py-4 border-b-2 border-conduit-green bg-white transition-none transition-colors", {
        "border-none text-black/30": tag
    })

    return (
        <div>
            <ul className="flex gap-5">
                <li className="flex">
                    <NavLink className={globalFeedClasses} to="/">Global Feed</NavLink>
                </li>
                {tag && (
                    <li className="flex">
                        <span className="leading-none px-2 py-4 border-b-2 text-conduit-green border-conduit-green bg-white">#{tag}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
