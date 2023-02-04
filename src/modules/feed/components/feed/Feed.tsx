import {FC} from "react";
import {ArticleList} from "../article-list/ArticleList";
import ReactPaginate from "react-paginate";
import {FEED_PAGE_SIZE} from "../../consts/consts";
import {IFeedData} from "../../api/repository";
import {usePageParam} from "../../hooks/usePageParam";

interface FeedProps {
    isLoading: boolean;
    isFetching: boolean;
    error: any;
    data?: IFeedData;
}

export const Feed: FC<FeedProps> = ({isLoading, isFetching, error, data}) => {
    const {page, setPage} = usePageParam();
    const pageChangeHandler = ({selected}: {selected: number}) => {
        setPage(selected);
    };

    if (isLoading || isFetching) {
        return (
            <h2 className="mt-4">
                Feed loading...
            </h2>
        )
    }

    if (error) {
        return (
            <h2 className="mt-4">
                Error while loading feed...
            </h2>
        )
    }

    if (data?.articlesCount === 0) {
        return <h2 className="mt-4">No articles are here... yet.</h2>
    }

    return (
        <>
            <ArticleList list={data?.articles || []} />
            <nav className="flex mt-4">
                <ReactPaginate
                    pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
                    previousLabel={null}
                    nextLabel={null}
                    containerClassName="flex"
                    pageClassName="group flex"
                    activeClassName="active"
                    pageRangeDisplayed={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
                    activeLinkClassName="group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-green"
                    pageLinkClassName="py-2 px-2.5 leading-none text-conduit-green bg-white border border-conduit-gray-300 -ml-px hover:bg-conduit-gray-200 group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(-n+2)]:rounded-r"
                    onPageChange={pageChangeHandler}
                    forcePage={page}
                />
            </nav>
        </>
    )
}
