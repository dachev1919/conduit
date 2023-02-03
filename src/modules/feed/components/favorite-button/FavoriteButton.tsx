import { FC } from "react";

interface FavoriteButtonProps {
    count: number;
    customText?: string;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({count, customText = undefined}) => {
    return (
        <button
            className="hover:text-white hover:bg-conduit-green focus:text-white focus:bg-conduit-darkGreen transition-all rounded-buttonSm flex gap-1 items-center py-1 px-2 text-sm text-conduit-green border align-middle cursor-pointer select-none border-conduit-green">
            <i className="ion-heart"/>

            <span className="font-medium text-base leading-none">
                {customText ? `${customText} (${count})` : count}
            </span>
        </button>
    )
}
