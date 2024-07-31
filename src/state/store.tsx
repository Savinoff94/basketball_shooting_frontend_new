import { configureStore } from "@reduxjs/toolkit";
import authorisationSlice from "./authorisation/authorisationSlice";

export const store = configureStore({
    reducer: {
        authorisation: authorisationSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch