import { FC } from "react";
import {Container} from "../../common/components/container/Container";
import {ArticleList} from "./components/article-list/ArticleList";
import {FeedToggle} from "./components/feed-toggle/FeedToggle";

interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
    return (
        <Container>
            <FeedToggle/>
            <div className="flex">
                <div className="w-3/4">
                    <ArticleList />
                </div>
                <div className="w-1/4">

                </div>
            </div>
        </Container>
    )
}
