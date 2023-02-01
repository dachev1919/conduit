import { FC } from "react";
import {Container} from "../container/Container";

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
    return (
        <section className="bg-conduit-green shadow-banner text-white p-8 mb-8">
            <Container>
                <h1 className="font-titillium drop-shadow-bannerLogo text-bannerLogo text-center pb-2">conduit</h1>
                <p className="text-center text-2xl font-light">A place to share your knowledge</p>
            </Container>
        </section>
    )
}
