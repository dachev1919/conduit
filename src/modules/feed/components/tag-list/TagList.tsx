import { FC } from "react";

interface TagListProps {
    list: string[]
}

export const TagList: FC<TagListProps> = ({list}) => {
    return (
        <ul className="flex">
            {list.map(tag => (
                <li key={tag} className="leading-none font-light text-date border border-conduit-lightenGray text-conduit-lightenGray text-conduit-tagColor mr-1 mb-0.2 px-tagPx pt-1 pb-1.5 rounded-tagRadius">{tag}</li>
            ))}
        </ul>
    )
}
