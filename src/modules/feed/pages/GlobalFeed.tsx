import {FC} from "react";
import {Banner} from "../../../common/components/banner/Banner";
import {Feed} from "../components/feed/Feed";
import {useGetGlobalFeedQuery} from "../api/repository";
import {useSearchParams} from "react-router-dom";

interface GlobalFeedProps {
}

export const GlobalFeed: FC<GlobalFeedProps> = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;

    const {data, error, isLoading, isFetching} = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get("tag"),
    });

    return (
        <>
            <Banner/>
            <Feed data={data} error={error} isFetching={isFetching} isLoading={isLoading} />
        </>
    )
}
