import { FC } from "react";
import {ProfileBanner} from "../components/profile-banner/ProfileBanner";
import {Feed} from "../../feed/components/feed/Feed";
import {useGetProfileFeedQuery} from "../../feed/api/repository";
import {useLocation, useParams} from "react-router-dom";
import {usePageParam} from "../../feed/hooks/usePageParam";
import {Container} from "../../../common/components/container/Container";
import {FeedToggle} from "../../feed/components/feed-toggle/FeedToggle";

interface ProfileProps {
}

export const Profile: FC<ProfileProps> = () => {
    const {page} = usePageParam();
    const {profile} = useParams();
    const {pathname} = useLocation();
    const feedToggleItem = [
        {id: 12121232, text: "Favorited Articles", link: `/conduit/${profile!}/favorites`},
    ];

    const {data, isLoading, isFetching, error} = useGetProfileFeedQuery({
        page,
        author: profile!,
        isFavorite: pathname.includes(`/conduit/${encodeURIComponent(profile!)}/favorites`),
    });

    console.log(
        profile
    )

    return (
        <>
            <ProfileBanner/>
            <Container>
                <FeedToggle defaultText={"My Articles"} defaultLink={`/conduit/${profile!}`} items={feedToggleItem}/>
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
