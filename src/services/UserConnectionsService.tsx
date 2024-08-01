import { AxiosResponse } from "axios";
import $api from "../http";
import {UserConnections, UsersInfoById} from '../types/usersBasicTypes';

export default class UserConnectionsService {
    
    static async getUserConnections(): Promise<UserConnections> {
        const {data} = await $api.post('/getUserConnections');
        return data;
    }
    static async getMyTeamUsers(): Promise<UsersInfoById> {
        const {data} = await $api.post('/getTrainingSquadList');
        return data;
    }

    static async friendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/friendRequest', {ids});
    }
    static async cancelFriendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/cancelFriendRequest', {ids});
    }
    static async approveFriendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/approveFriendRequest', {ids});
    }
    static async disapproveFriendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/disapproveFriendRequest', {ids});
    }
    static async removeFriendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/removeFriendRequest', {ids});
    }
    
}