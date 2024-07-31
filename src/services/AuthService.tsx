import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {

    static async login(email: string, password: string): Promise<AuthResponse> {

        const {data} = await $api.post('/login', {email, password});
        return data;
    }

    static async registration(login: string, password: string, email: string): Promise<AuthResponse> {

        const {data} = await $api.post('/registration', {login, password, email});
        return data;
    }

    static async logout(): Promise<void> {

        return $api.post('/logout');
    }
}