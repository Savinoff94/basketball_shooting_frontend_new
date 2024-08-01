import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/response/IUser";
import AuthService from "../../services/AuthService";
import { AuthResponse } from "../../models/response/AuthResponse";
import axios from "axios";
import { API_URL } from "../../http";

export interface UserState {
    user: IUser,
    isAuth: boolean,
    isLoading: boolean
    errors: AuthorisationErrorPayload
}

const initialState: UserState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    errors: {} as AuthorisationErrorPayload
}

const authorisationSlice = createSlice({
    name: "authorisation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.pending, (state) => {
                state.isLoading = true;
                state.errors = {}
            })
            .addCase(registerAsync.rejected, (state, action: PayloadAction<AuthorisationErrorPayload | undefined>) => {
                state.isLoading = false;
                if (action.payload) {
                    state.errors = action.payload;
                } else {
                    state.errors = { message: ['Registration failed'] };
                }
            })
            .addCase(registerAsync.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = action.payload.user;
                localStorage.setItem('token', action.payload.accessToken)
            })
            .addCase(logoutAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutAsync.rejected, (state) => {
                //TODO
                state.isLoading = false;
            })
            .addCase(logoutAsync.fulfilled, (state) => {
                localStorage.removeItem('token');
                state.isAuth = false;
                state.isLoading = false;
            })
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginAsync.rejected, (state, action: PayloadAction<AuthorisationErrorPayload | undefined>) => {
                state.isLoading = false;
                if (action.payload) {
                    state.errors = action.payload;
                } else {
                    state.errors = { message: ['Login failed'] };
                }
            })
            .addCase(loginAsync.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                localStorage.setItem('token', action.payload.accessToken);
                state.user = action.payload.user
                state.isAuth = true
                state.isLoading = false
            })
            .addCase(checkAuthAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuthAsync.rejected, (state) => {
                //TODO
                state.isLoading = false;
            })
            .addCase(checkAuthAsync.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state
                action
            })
    }
})

export interface RegistrationArgs {
    login: string,
    password: string,
    email:string
}

export interface AuthorisationErrorPayload {[id:string]: string[]}

export const registerAsync = createAsyncThunk<AuthResponse, RegistrationArgs, {rejectValue: AuthorisationErrorPayload}>(
    'register',
    async ({login, password, email} : RegistrationArgs, {rejectWithValue}) => {
        try {
            return await AuthService.registration(login, password, email)
        } catch (error) {
            if(axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.errors as AuthorisationErrorPayload);
            }
            return rejectWithValue({ message: ['An unexpected error occurred'] } as AuthorisationErrorPayload);
        }
    }
)

export const logoutAsync = createAsyncThunk(
    'logout',
    async () => {
        return await AuthService.logout()
    }
)

export interface LoginArgs {
    email: string,
    password: string
}

export const loginAsync = createAsyncThunk<AuthResponse, LoginArgs, {rejectValue: AuthorisationErrorPayload}>(
    'login',
    async ({email, password} : LoginArgs, {rejectWithValue}) => {
        try {
            return await AuthService.login(email, password)
        } catch (error) {
            if(axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.errors as AuthorisationErrorPayload);
            }
            return rejectWithValue({ message: ['An unexpected error occurred'] } as AuthorisationErrorPayload);
        }
    }
)
//TODO
export const checkAuthAsync = createAsyncThunk(
    'checkAuth',
    async () => {
        const {data} = await axios.get<AuthResponse>(API_URL + '/refresh', {withCredentials: true})
        return data
    }
)

export default authorisationSlice.reducer