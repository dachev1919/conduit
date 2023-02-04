import {ISignUpInDTO} from "../api/dto/sign-up.in";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    user: ISignUpInDTO["user"] | null;
}

const initialState: AuthState = {
    user: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<ISignUpInDTO["user"]>) => {
            state.user = {
                ...action.payload,
            }
        }
    }
});

export const { setUser } = authSlice.actions;