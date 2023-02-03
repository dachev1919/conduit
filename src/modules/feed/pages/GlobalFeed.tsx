import {FC} from "react";
import {Banner} from "../../../common/components/banner/Banner";
import {Feed} from "../components/feed/Feed";
import {useGetGlobalFeedQuery} from "../api/repository";
import {useSearchParams} from "react-router-dom";
import {usePageParam} from "../hooks/usePageParam";
import {Container} from "../../../common/components/container/Container";
import {TagCloud} from "../components/tag-cloud/TagCloud";
import {FeedToggle} from "../components/feed-toggle/FeedToggle";

interface GlobalFeedProps {
}

export const GlobalFeed: FC<GlobalFeedProps> = () => {
    const [searchParams] = useSearchParams();
    const {page} = usePageParam();

    const {data, error, isLoading, isFetching} = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get("tag"),
    });

    return (
        <>
            <Banner/>
            <Container>
                <div className="flex">
                    <div className="w-3/4">
                        <FeedToggle/>
                        <Feed
                            data={data}
                            error={error}
                            isFetching={isFetching}
                            isLoading={isLoading}
                        />
                    </div>
                    <div className="w-1/4 pl-3 relative">
                        <TagCloud />
                    </div>
                </div>
            </Container>
        </>
    )
}
