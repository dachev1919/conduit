import { FC } from "react";
import {Container} from "../../common/components/container/Container";
import {ArticleList} from "./components/article-list/ArticleList";
import {FeedToggle} from "./components/feed-toggle/FeedToggle";
import {useGetGlobalFeedQuery} from "./api/repository";

interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
    const {data, error, isLoading} = useGetGlobalFeedQuery('');

    if (isLoading) {
        return (
            <Container>
                Feed loading...
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                Error while loading feed...
            </Container>
        )
    }

    return (
        <Container>
            <FeedToggle/>
            <div className="flex">
                <div className="w-3/4">
                    <ArticleList list={data?.articles || []} />
                </div>
                <div className="w-1/4">

                </div>
            </div>
        </Container>
    )
}
