import {FC} from "react";
import {CommentItem} from "../comment-item/CommentItem";
import {Link, useParams} from "react-router-dom";
import {useGetArticleCommentsQuery} from "../../api/repository";

interface CommentsListProps {}

export const CommentsList: FC<CommentsListProps> = () => {
    const { slug } = useParams();
    const { data, isFetching, isLoading, error } = useGetArticleCommentsQuery({slug: slug!});

    if (isLoading || isFetching) {
        return <p>Loading comments...</p>;
    }

    if (!data || data.comments.length === 0 || error) {
        return (
            <div className="text-center mt-12">
                <p><Link to="/conduit/sign-in">Sign in</Link> or <Link to="/conduit/sign-up">sign up</Link> to add comments on this article.</p>
                <p className="text-conduit-gray-600 mt-6">No comments</p>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto mt-16 flex flex-col gap-2.5">
            <p><Link to="/conduit/sign-in">Sign in</Link> or <Link to="/conduit/sign-up">sign up</Link> to add comments on this article.</p>
            {data.comments.map(comment => <CommentItem key={`comment-${comment.id}`} body={comment.body} author={comment.author} publishedAt={comment.createdAt}/>)}
        </div>
    )
}
