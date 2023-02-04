import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {feedApi} from "../modules/feed/api/repository";
import {profileApi} from "../modules/profile/api/repository";
import {authApi} from "../modules/auth/api/repository";
import {authSlice} from "../modules/auth/services/slice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const persistConfig = {
    key: "conduit",
    storage,
    whitelist: [authSlice.name],
}

const persistentReducer = persistReducer(persistConfig, combineReducers({
    [feedApi.reducerPath]: feedApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [authSlice.name]: authSlice.reducer,
}));

export const store = configureStore({
    reducer: persistentReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }}).concat(feedApi.middleware, profileApi.middleware, authApi.middleware)
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
