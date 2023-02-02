import { FC } from "react";

interface TagListProps {}

export const TagList: FC<TagListProps> = () => {
    return (
        <ul className="flex">
            <li className="leading-none font-light text-date border border-conduit-lightenGray text-conduit-lightenGray text-conduit-tagColor mr-1 mb-0.2 px-tagPx pt-1 pb-1.5 rounded-tagRadius">qwe</li>
            <li className="leading-none font-light text-date border border-conduit-lightenGray text-conduit-lightenGray text-conduit-tagColor mr-1 mb-0.2 px-tagPx pt-1 pb-1.5 rounded-tagRadius">qwe</li>
            <li className="leading-none font-light text-date border border-conduit-lightenGray text-conduit-lightenGray text-conduit-tagColor mr-1 mb-0.2 px-tagPx pt-1 pb-1.5 rounded-tagRadius">qwe</li>
            <li className="leading-none font-light text-date border border-conduit-lightenGray text-conduit-lightenGray text-conduit-tagColor mr-1 mb-0.2 px-tagPx pt-1 pb-1.5 rounded-tagRadius">qwe</li>
        </ul>
    )
}
