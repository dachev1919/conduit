import {FC} from "react";
import {Container} from "../../../../common/components/container/Container";
import {ArticleList} from "../article-list/ArticleList";
import {FeedToggle} from "../feed-toggle/FeedToggle";
import ReactPaginate from "react-paginate";
import {FEED_PAGE_SIZE} from "../../consts/consts";
import {useSearchParams} from "react-router-dom";
import {serializeSearchParams} from "../../../../utils/router";
import {TagCloud} from "../tag-cloud/TagCloud";
import {IFeedData} from "../../api/repository";

interface FeedProps {
    isLoading: boolean;
    isFetching: boolean;
    error: any;
    data?: IFeedData;
}

export const Feed: FC<FeedProps> = ({isLoading, isFetching, error, data}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;
    const pageChangeHandler = ({selected}: {selected: number}) => {
        setSearchParams(serializeSearchParams({page: String(selected)}))
    };

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
            <div className="flex">
                <div className="w-3/4">
                    <FeedToggle/>
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
                            pageLinkClassName="py-2 px-2.5 leading-none text-conduit-green bg-white border border-conduit-gray-300 -ml-px hover:bg-conduit-gray-200 group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(-n+2)]:rounded-r"
                            onPageChange={pageChangeHandler}
                            forcePage={page}
                        />
                    </nav>
                </div>
                <div className="w-1/4 pl-3 relative">
                    <TagCloud />
                </div>
            </div>
        </Container>
    )
}
