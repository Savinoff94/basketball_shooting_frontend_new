import { useQuery, UseQueryResult } from "@tanstack/react-query"
import UserConnectionsService from "../../../services/UserConnectionsService"
import { UserConnections } from "../../../types/usersBasicTypes"
import { AxiosError } from "axios"
import { ErrorPayload } from "../SubPages/SearchFriends/SearchFriends"

export default function useFetchUserConnections(): UseQueryResult<UserConnections> {
    return useQuery<UserConnections, AxiosError<ErrorPayload>>({
        queryKey: ['userConnections'],
        queryFn: () => UserConnectionsService.getUserConnections(),
        gcTime: 60 * 60 * 3 * 1000,
        staleTime: 60 * 60 * 3 * 1000,
    })
}