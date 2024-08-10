import { configureStore } from "@reduxjs/toolkit";
import authorisationSlice from "./authorisation/authorisationSlice";
import shootingTrainingSlice from "./shootingTraining/shootingTrainingSlice";

export const store = configureStore({
    reducer: {
        authorisation: authorisationSlice,
        shootingTraining: shootingTrainingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch