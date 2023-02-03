import { FC } from "react";
import clsx from "clsx";
import {Link} from "react-router-dom";

enum TagListStyle {
    DARK = "DARK",
    LIGHT = "LIGHT"
}

interface TagListProps {
    list: string[];
    itemStyle?: keyof typeof TagListStyle;
    itemAs?: "li" | "a";
}

export const TagList: FC<TagListProps> = ({list, itemStyle = TagListStyle.LIGHT, itemAs = "li"}) => {
    console.log(TagListStyle.LIGHT)
    const itemClasses = clsx("font-light text-date border mr-1 mb-1.5 px-tagPx pt-1 pb-1.5 rounded-tagRadius leading-none transition-all", {
        "border-conduit-lightenGray text-conduit-lightenGray text-conduit-tagColor": itemStyle === TagListStyle.LIGHT,
        "bg-conduit-tagDarkBg border-conduit-tagDarkBg text-white": itemStyle === TagListStyle.DARK,
        "hover:text-white hover:bg-conduit-tagHoverDarkBg": itemStyle === TagListStyle.DARK && itemAs === "a"
    });

    return (
        <ul className="flex flex-wrap">
            {list.map(tag => {
                return itemAs === "li"
                    ? <li key={tag} className={itemClasses}>{tag}</li>
                    : <Link to={`/?tag=${tag}`} key={tag} className={itemClasses}>{tag}</Link>
            })}
        </ul>
    )
}
