import {FC} from "react";

interface FollowButtonProps {
    name?: string;
}

export const FollowButton: FC<FollowButtonProps> = ({name = "Name Name"}) => {
    return (
        <button className="flex items-center gap-2 transition-all py-1 px-2 text-sm text-conduit-gray-700 border align-middle cursor-pointer select-none border-conduit-gray-700 hover:bg-conduit-gray-700 hover:text-white rounded-buttonSm">
            <i className="ion-plus-round"/>
            Follow {name}
        </button>
    )
}
