import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {

    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {

        return $api.post('/login', {login, password});
    }

    static async registration(login: string, password: string, email: string): Promise<AxiosResponse<AuthResponse>> {

        return $api.post('/registration', {login, password, email});
    }

    static async logout(): Promise<void> {

        return $api.post('/logout');
    }
}