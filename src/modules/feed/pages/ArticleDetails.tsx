import {FC} from "react";
import {ArticleBanner} from "../components/article-banner/ArticleBanner";
import {Container} from "../../../common/components/container/Container";
import {TagList} from "../components/tag-list/TagList";
import {ArticleMeta} from "../components/article-meta/ArticleMeta";
import {useGetSingleArticleQuery} from "../api/repository";
import {useParams} from "react-router-dom";
interface ArticleDetailsProps {
}

export const ArticleDetails: FC<ArticleDetailsProps> = () => {
    const { slug } = useParams();
    const {data, isLoading, isFetching, error} = useGetSingleArticleQuery({slug: slug!});

    if (isLoading || isFetching) {
        return null;
    }

    if (error) {
        return <h1>Something went wrong...</h1>
    }

    if (!data) {
        return <h1>Article not found</h1>
    }

    return (
        <>
            <ArticleBanner publishedAt={data.article.createdAt} title={data.article.body.replace(/\\n/g, ' ')} author={data.article.author} likes={data.article.favoritesCount}/>
            <Container>
                <div className="pb-8 border-b">
                    <p className="text-articleBody leading-150 font-sourceSerif mb-6">{data.article.description}</p>
                    <TagList list={data.article.tagList}/>
                </div>
                <div className="mt-8 flex justify-center">
                    <ArticleMeta publishedAt={data.article.createdAt} authorNameStyle="GREEN" author={data.article.author} likes={data.article.favoritesCount}/>
                </div>
            </Container>
        </>
    )
}
