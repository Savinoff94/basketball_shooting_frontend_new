import $api from "../http";
import { UsersInfoById } from "../types/usersBasicTypes";


export default class SearchService {

    static async searchUsers(login: string, exact: boolean = false, signal: AbortSignal | null = null): Promise<UsersInfoById> {
        
        const {data} = await $api.post('/searchUsers', {login, exact, signal});
        return data;
    }
}