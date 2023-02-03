import { FC } from "react";
import {ProfileBanner} from "../components/profile-banner/ProfileBanner";
import {Feed} from "../../feed/components/feed/Feed";
import {useGetProfileFeedQuery} from "../../feed/api/repository";
import {useLocation, useParams} from "react-router-dom";
import {usePageParam} from "../../feed/hooks/usePageParam";
import {Container} from "../../../common/components/container/Container";
import {FeedToggle} from "../../feed/components/feed-toggle/FeedToggle";
import {useGetProfileQuery} from "../api/repository";

interface ProfileProps {
}

export const Profile: FC<ProfileProps> = () => {
    const {profile: profileUsername} = useParams();
    const {data: profileInfo, isLoading: profileLoading} = useGetProfileQuery({username: profileUsername!});
    const {page} = usePageParam();
    const {pathname} = useLocation();
    const feedToggleItem = [
        {id: 12121232, text: "Favorited Articles", link: `/conduit/${profileUsername!}/favorites`},
    ];

    const {data, isLoading, isFetching, error} = useGetProfileFeedQuery({
        page,
        author: profileUsername!,
        isFavorite: pathname.includes(`/conduit/${encodeURIComponent(profileUsername!)}/favorites`),
    });

    if (profileLoading) {
        return null;
    }

    return (
        <>
            <ProfileBanner profile={profileInfo!.profile}/>
            <Container>
                <FeedToggle defaultText={"My Articles"} defaultLink={`/conduit/${profileUsername!}`} items={feedToggleItem}/>
                <Feed
                    isLoading={isLoading}
                    isFetching={isFetching}
                    error={error}
                    data={data}
                />
            </Container>
        </>
    )
}
