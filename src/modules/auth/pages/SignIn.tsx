import {FC} from "react";
import {Container} from "../../../common/components/container/Container";
import {Link} from "react-router-dom";
import {Input} from "../../../common/components/input/Input";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button} from "../../../common/components/button/Button";
import {toast} from "react-toastify";
import {useAuth} from "../hooks/use-auth";

interface SignInProps {
}

interface ISignInFormValues {
    email: string;
    password: string;
}

const validationSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(6),
    },
);

export const SignIn: FC<SignInProps> = () => {
    const {signIn} = useAuth();
    const {register, handleSubmit, formState} = useForm<ISignInFormValues>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(validationSchema)
    });

    const OnSubmitHandler = async (values: ISignInFormValues) => {
        try {
            await signIn(values);
        } catch (e) {
            toast.error("Something went wrong. Please, try again later");
        }
    }
    return (
        <>
            <Container>
                <h1 className="text-4xl text-center mb-4">Sign In</h1>
                <p className="text-center mb-8"><Link to="/conduit/sign-up">Need an account?</Link></p>
                <form onSubmit={handleSubmit(OnSubmitHandler)} className="flex flex-col gap-4 max-w-xl m-auto px-2" noValidate>
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
