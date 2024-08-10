import { AxiosResponse } from "axios";
import $api from "../http";

export default class ShootingTrainingService {

    static async saveShootingSet(shooterId:string, spotKey: string, tries: number, makes: number): Promise<AxiosResponse> {

        return $api.post('/saveShootingSet', {shooterId, spotKey, tries, makes});
    } 
}