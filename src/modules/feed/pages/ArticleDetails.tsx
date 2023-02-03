import {FC} from "react";
import {ArticleBanner} from "../components/article-banner/ArticleBanner";
import {Container} from "../../../common/components/container/Container";
import {TagList} from "../components/tag-list/TagList";
import {ArticleMeta} from "../components/article-meta/ArticleMeta";
interface ArticleDetailsProps {
}

export const ArticleDetails: FC<ArticleDetailsProps> = () => {

    return (
        <>
            <ArticleBanner />
            <Container>
                <div className="pb-8 border-b">
                    <p className="text-articleBody leading-150 font-sourceSerif mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, aut ea enim exercitationem harum illum natus necessitatibus quas quos sed similique soluta temporibus, velit voluptatem! Dolorem eos possimus quam qui quod repellat sint soluta vel! Autem delectus ipsam ipsum nisi sunt! Amet autem delectus dolorem ducimus ipsa laudantium modi odio soluta vero? Cupiditate dignissimos eum illum molestiae nemo nobis obcaecati perspiciatis praesentium quia sit. Commodi culpa dolorem, doloribus esse ex excepturi id libero minima molestias mollitia numquam obcaecati placeat porro quasi qui rerum temporibus voluptas voluptatem? Ad commodi cum deserunt labore nam nulla perferendis vel. At facere fugiat modi?</p>
                    <TagList list={['123', '456', '789']}/>
                </div>
                <div className="mt-8 flex justify-center">
                    <ArticleMeta authorNameStyle="GREEN"/>
                </div>
            </Container>
        </>
    )
}
