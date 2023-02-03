import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {GlobalFeed} from "../modules/feed/pages/GlobalFeed";
import {Profile} from "../modules/profile/pages/Profile";

interface RoutersProps {
}

export const Routers: FC<RoutersProps> = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/conduit"/> }/>
            <Route path="/conduit" element={<GlobalFeed/>}/>
            <Route path="/conduit/:profile" element={<Profile/>}/>
            <Route path="/conduit/:profile/favorites" element={<Profile/>}/>
        </Routes>
    )
}
