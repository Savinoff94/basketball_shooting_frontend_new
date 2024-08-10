import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ShootingTrainingState {
    currentShooter: string,
    currentSpot: string,
    currentTries: number,
    currentMakes: number,
    selectedSquad: string[],
}

const initialState: ShootingTrainingState = {
    currentShooter: '',
    currentSpot: '',
    currentTries: 0,
    currentMakes: 0,
    selectedSquad: [],
}

const shootingTrainingSlice = createSlice({
    name: "authorisation",
    initialState,
    reducers: {
        setCurrentShooter: (state, action: PayloadAction<string>) => {
            state.currentShooter = action.payload
        },
        setCurrentSpot: (state, action: PayloadAction<string>) => {
            state.currentSpot = action.payload
        },
        makeShot: (state) => {
            state.currentTries = state.currentTries + 1
            state.currentMakes = state.currentMakes + 1
        },
        missedShot: (state) => {
            state.currentTries = state.currentTries + 1
        },
        removeMissedShot: (state) => {
            state.currentTries = state.currentTries - 1
        },
        removeMakeShot: (state) => {
            state.currentTries = state.currentTries - 1
            state.currentMakes = state.currentMakes - 1
        },
        appendSquad: (state, action: PayloadAction<string>) => {
            state.selectedSquad = [...state.selectedSquad, action.payload]
        },
        removeFromSquad: (state, action: PayloadAction<string>) => {

            state.selectedSquad = state.selectedSquad.filter((id) => {
                return id !== action.payload;
            })
        }
    },
})

export const {
    setCurrentShooter,
    setCurrentSpot,
    makeShot,
    missedShot,
    removeMissedShot,
    removeMakeShot,
    appendSquad,
    removeFromSquad,
} = shootingTrainingSlice.actions;

export default shootingTrainingSlice.reducer;
