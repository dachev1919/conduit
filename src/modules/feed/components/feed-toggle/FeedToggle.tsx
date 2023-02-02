import { FC } from "react";
import {NavLink} from "react-router-dom";

interface FeedToggleProps {}

export const FeedToggle: FC<FeedToggleProps> = () => {
    return (
        <div>
            <ul>
                <li className="flex">
                    <NavLink className="leading-none px-2 py-4 border-b-2 border-conduit-green bg-white" to="/conduit">Global Feed</NavLink>
                </li>
            </ul>
        </div>
    )
}
