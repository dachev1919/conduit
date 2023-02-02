import {FC} from "react";
import {Header} from "./common/components/header/Header";
import {Banner} from "./common/components/banner/Banner";
import {Feed} from "./modules/feed/Feed";

interface AppProps {
}

export const App: FC<AppProps> = () => {
    return (
        <>
            <Header/>
            <main>
                <Banner />
                <Feed />
            </main>
        </>
    )
}
