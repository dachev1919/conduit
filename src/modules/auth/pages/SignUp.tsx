import {FC} from "react";
import {Container} from "../../../common/components/container/Container";
import {Link, useNavigate} from "react-router-dom";
import {Input} from "../../../common/components/input/Input";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button} from "../../../common/components/button/Button";
import {useLazySignUpQuery} from "../api/repository";
import {toast} from "react-toastify";
import {setUser} from "../services/slice";
import {useAppDispatch} from "../../../store/store";

interface SignUpProps {
}

interface ISignupFormValues {
    username: string;
    email: string;
    password: string;
}

const validationSchema = yup.object({
        username: yup.string().required().min(3),
        email: yup.string().required().email(),
        password: yup.string().required().min(6),
    },
);

export const SignUp: FC<SignUpProps> = () => {
    const {register, handleSubmit, formState} = useForm<ISignupFormValues>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        resolver: yupResolver(validationSchema)
    });

    const [triggerSignUpQuery] = useLazySignUpQuery();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const OnSubmitHandler = async (values: ISignupFormValues) => {
        try {
            const { data } = await triggerSignUpQuery(values, false);
            if (!data) {
                throw new Error("No data in query");
            }
            dispatch(setUser(data.user));
            navigate("/conduit");
            toast.success("Registration completed successfully");
        } catch (e) {
            toast.error("Something went wrong. Please, try again later");
        }
    }
    return (
        <>
            <Container>
                <h1 className="text-4xl text-center mb-4">Sign Up</h1>
                <p className="text-center mb-8"><Link to="/conduit/sign-in">Have an account?</Link></p>
                <form onSubmit={handleSubmit(OnSubmitHandler)} className="flex flex-col gap-4 max-w-xl m-auto px-2" noValidate>
                    <Input placeholder="Username" {...register("username")}/>
                    <Input placeholder="Email" type="email" {...register("email")}/>
                    <Input placeholder="Password" required={true} type="password" {...register("password")}/>
                    <ul className="list-disc pl-10">
                        {(Object.keys(formState.errors) as (keyof typeof formState.errors)[]).map((field) => (
                            <li
                                key={`error-${String(field)}`}
                                className="text-conduit-red font-bold"
                            >
                                {(formState.errors[field]!.message as string)}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end">
                        <Button disabled={formState.isSubmitting} size="LG" type="submit" btnStyle="GREEN">Sign In</Button>
                    </div>
                </form>
            </Container>
        </>
    )
}
