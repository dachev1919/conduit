import {createApi} from "@reduxjs/toolkit/query/react";
import {realWorldBaseQuery} from "../../../core/api/realworld-base-query";
import {IGetProfileInDTO} from "./dto/get-profile.in";

interface IProfileParams {
    username: string;
}

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: realWorldBaseQuery,
    endpoints: (builder) => ({
        getProfile: builder.query<IGetProfileInDTO, IProfileParams>({
            query: ({username}) => ({
                url: `/profiles/${username}`,
            })
        })
    })
});

export const { useGetProfileQuery } = profileApi;