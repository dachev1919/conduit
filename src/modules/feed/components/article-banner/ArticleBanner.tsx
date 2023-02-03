import {FC} from "react";
import {Container} from "../../../../common/components/container/Container";
import {ArticleMeta} from "../article-meta/ArticleMeta";
import {IFeedAuthor} from "../../api/dto/global-feed.in";
interface ArticleBannerProps {
    title: string;
    author: IFeedAuthor;
    likes: number;
    publishedAt: string;
}

export const ArticleBanner: FC<ArticleBannerProps> = ({title, author, likes, publishedAt}) => {

    return (
        <div className="bg-conduit-gray-1000 pt-8 pb-4 mb-8">
            <Container>
                <h1 className="text-white text-articleTitle font-bold leading-[110%] mb-8">
                    {title}
                </h1>
                <ArticleMeta author={author} likes={likes} publishedAt={publishedAt}/>
            </Container>
        </div>
    )
}
