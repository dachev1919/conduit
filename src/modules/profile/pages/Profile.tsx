import { FC } from "react";
import {ProfileBanner} from "../components/prpofile-banner/ProfileBanner";

interface ProfileProps {
}

export const Profile: FC<ProfileProps> = () => {
    return (
        <>
            <ProfileBanner/>
        </>
    )
}
