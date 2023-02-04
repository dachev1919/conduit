import {FC} from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import {Container} from "../container/Container";
import {useAuth} from "../../../modules/auth/hooks/use-auth";

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
    const {isLoggedIn, logOut} = useAuth();
    const navLinkClasses = ({isActive}: { isActive: boolean }) => clsx("py-navItem transition-all hover:text-black/60 hover:no-underline", {
        "text-black/80": isActive,
        "text-black/30": !isActive
    });

    return (
        <header>
            <nav className="px-2 py-4">
                <Container>
                    <div className="flex justify-between items-center">
                        <NavLink className="font-titillium text-2xl mr-8 text-conduit-green"
                                 to="/conduit ">conduit</NavLink>
                        <ul className="flex gap-4 pl-0 m-0 list-none">
                            <li>
                                <NavLink className={navLinkClasses} to="/conduit" end>Home</NavLink>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        <NavLink className={navLinkClasses} to="/conduit" onClick={logOut}>Log
                                            Out</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink className={navLinkClasses} to="/conduit/sign-in">Sign In</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={navLinkClasses} to="/conduit/sign-up">Sign Up</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    )
}
