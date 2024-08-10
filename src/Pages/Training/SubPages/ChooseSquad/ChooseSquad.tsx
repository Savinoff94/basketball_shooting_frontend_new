import UserConnectionsService from "../../../../services/UserConnectionsService";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorPayload } from "../../../Social/SubPages/SearchFriends/SearchFriends";
import axios from "axios";
import UserItemChooseSquad from "./UserItemChooseSquad";
import { UsersInfoById } from "../../../../types/usersBasicTypes";

export default function ChooseSquad() {
    
    const {data = {}, isLoading, error} = useQuery<UsersInfoById, AxiosError<ErrorPayload>>({
        queryKey: ['myTeam'],
        queryFn: () => UserConnectionsService.getMyTeamUsers(),
        gcTime: 60 * 60 * 3 * 1000,
        staleTime: 60 * 60 * 3 * 1000,
    })
    
    const friendsIds = Object.keys(data);

    return (
    <>
    {error && axios.isAxiosError(error) && error.response  ? error.response?.data.message : ''}
    {isLoading && <div>Loading...</div>}
    <div>
        ChooseSquad
    </div>
    {
        friendsIds.map((id) => {
            return (
            <UserItemChooseSquad
            key={id}
            {...data[id]}
            />
            )
        })
    }
    </>
    )
}