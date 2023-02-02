import {FC, useState} from "react";
import {Container} from "../../common/components/container/Container";
import {ArticleList} from "./components/article-list/ArticleList";
import {FeedToggle} from "./components/feed-toggle/FeedToggle";
import {useGetGlobalFeedQuery} from "./api/repository";
import ReactPaginate from "react-paginate";
import {FEED_PAGE_SIZE} from "./consts/consts";
import {useSearchParams} from "react-router-dom";
import {serializeSearchParams} from "../../utils/router";

interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 0);
    const pageChangeHandler = ({selected}: {selected: number}) => {
        setPage(selected);
        setSearchParams(serializeSearchParams({page: String(selected)}))
    }

    const {data, error, isLoading, isFetching} = useGetGlobalFeedQuery({ page });

    if (isLoading || isFetching) {
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
            <div className="flex pb-8">
                <div className="w-3/4">
                    <ArticleList list={data?.articles || []} />
                    <nav className="flex mt-4">
                        <ReactPaginate
                            pageCount={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
                            previousLabel={null}
                            nextLabel={null}
                            containerClassName="flex"
                            pageClassName="group flex"
                            activeClassName="active"
                            pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
                            activeLinkClassName="group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-green"
                            pageLinkClassName="py-2 px-2.5 leading-none text-conduit-green bg-white border border-conduit-lightgray -ml-px hover:bg-conduit-paginationHover group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(-n+2)]:rounded-r"
                            onPageChange={pageChangeHandler}
                            forcePage={page}
                        />
                    </nav>
                </div>
                <div className="w-1/4">

                </div>
            </div>
        </Container>
    )
}
