import { useQuery, UseQueryResult } from "@tanstack/react-query"
import UserConnectionsService from "../../../services/UserConnectionsService"
import { UserConnections } from "../../../types/usersBasicTypes"

export default function useFetchUserConnections(): UseQueryResult<UserConnections> {
    return useQuery<UserConnections>({
        queryKey: ['userConnections'],
        queryFn: () => UserConnectionsService.getUserConnections(),
        gcTime: 60 * 60 * 3 * 1000,
        staleTime: 60 * 60 * 3 * 1000,
    })
}