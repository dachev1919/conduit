import {selectUser, setUser} from "../services/slice";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {useLazySignInQuery, useLazySignUpQuery} from "../api/repository";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {ISignInOutDTO} from "../api/dto/sign-in.out";
import {ISignUpOutDTO} from "../api/dto/sign-up.out";

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useAppSelector(selectUser);
    const isLoggedIn = Boolean(user);
    const [triggerSignInQuery] = useLazySignInQuery();
    const [triggerSignUpQuery] = useLazySignUpQuery();

    const signIn = async (values: ISignInOutDTO["user"]) => {
        const { data } = await triggerSignInQuery(values, false);
        if (!data) {
            throw new Error("No data in query");
        }
        dispatch(setUser(data.user));
        navigate("/conduit");
        toast.success("Authorization was successful");
    }


    const signUp = async (values: ISignUpOutDTO["user"]) => {
        const { data } = await triggerSignUpQuery(values, false);
        if (!data) {
            throw new Error("No data in query");
        }
        dispatch(setUser(data.user));
        navigate("/conduit");
        toast.success("Registration completed successfully");
    }
    
    const logOut = () => {
      dispatch(setUser(null));
    }

    return { isLoggedIn, signIn, signUp, logOut };
}