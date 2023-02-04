import {createApi} from "@reduxjs/toolkit/query/react";
import {realWorldBaseQuery} from "../../../core/api/realworld-base-query";
import {ISignUpOutDTO} from "./dto/sign-up.out";
import {ISignUpInDTO} from "./dto/sign-up-in";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: realWorldBaseQuery,
    endpoints: (builder) => ({
        signUp: builder.query<ISignUpInDTO, ISignUpOutDTO['user']>({
            query: (args) => ({
                url: "/users",
                method: "post",
                data: {
                    user: args,
                },
            })
        })
    })
});

export const {useLazySignUpQuery} = authApi;