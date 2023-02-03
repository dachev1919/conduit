import {FC} from "react";
import {Container} from "../../../../common/components/container/Container";
import {FollowButton} from "../follow-button/FollowButton";
import {IProfile} from "../../api/dto/get-profile.in";

interface ProfileBannerProps {
    profile: IProfile;
}

export const ProfileBanner: FC<ProfileBannerProps> = ({profile}) => {
    return (
        <div className="bg-conduit-gray-100 pt-8 pb-4 mb-8">
            <Container>
                <div>
                    <img className="w-25 h-25 rounded-full mx-auto mb-4" src={profile.image} alt={`${profile.username}`}/>
                    <h2 className="text-center font-bold text-2xl ">{profile.username}</h2>
                </div>
                <div className="flex justify-end">
                    <FollowButton name={profile.username}/>
                </div>
            </Container>
        </div>
    )
}
