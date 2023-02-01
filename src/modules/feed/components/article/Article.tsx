import { FC } from "react";
import {Link} from "react-router-dom";
import {FavoriteButton} from "../favorite/FavoriteButton";

interface ArticleProps {}

export const Article: FC<ArticleProps> = () => {
    return (
        <article>
            <div className="border-t border-black/10 py-6">
                <div className="mb-4 font-light flex">
                    <Link to="/conduit/@nokwin">
                        <img className="inline-block h-8 w-8 rounded-full" src="https://api.realworld.io/images/demo-avatar.png" alt="nokwin"/>
                    </Link>
                    <div className="mr-6 ml-0.3 inline-flex flex-col leading-4">
                        <Link className="font-medium" to="/conduit/@nokwin">
                            Oleh Dachev
                        </Link>
                        <span className="text-conduit-gray text-date">9 october, 2023</span>
                    </div>
                    <FavoriteButton />
                </div>
                <Link to="/conduit/@nokwin" className="text-inherit hover:text-inherit">
                    <h1 className="mb-1 font-semibold text-2xl">Some title</h1>
                    <p className="text-conduit-darkenGray font-light mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores,
                        assumenda deserunt eos esse exercitationem laborum optio quas repudiandae sint!
                    </p>
                    <span className="text-conduit-gray text-date font-light">Read more...</span>
                </Link>
            </div>
        </article>
    )
}
