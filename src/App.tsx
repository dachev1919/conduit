import {FC} from "react";
import {Header} from "./common/components/header/Header";
import {Routers} from "./routes/Routers";

interface AppProps {
}

export const App: FC<AppProps> = () => {
    return (
        <>
            <Header/>
            <main className="pb-16">
                <Routers/>
            </main>
        </>
    )
}
