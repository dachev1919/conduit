import {FC} from "react";
import {Container} from "../../../../common/components/container/Container";
import {ArticleMeta} from "../article-meta/ArticleMeta";
interface ArticleBannerProps {
}

export const ArticleBanner: FC<ArticleBannerProps> = () => {

    return (
        <div className="bg-conduit-gray-1000 pt-8 pb-4 mb-8">
            <Container>
                <h1 className="text-white text-articleTitle font-bold leading-[110%] mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet commodi cumque, dicta dolorem ducimus ea ex id impedit iste iusto labore magnam magni nesciunt non optio pariatur placeat porro provident qui quo soluta vero! Consequuntur ducimus esse, hic ipsum maxime natus rem repellat similique sit, soluta suscipit ullam veritatis?
                </h1>
                <ArticleMeta/>
            </Container>
        </div>
    )
}
