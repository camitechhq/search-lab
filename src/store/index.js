import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { searchApi } from "./searchApi";

const store = configureStore({
    reducer: {
        // Add Reducers
        [searchApi.reducerPath]: searchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat([searchApi.middleware])
    }
})

setupListeners(store.dispatch);

export { store };