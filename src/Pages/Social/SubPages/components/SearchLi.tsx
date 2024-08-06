import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import UserLi from "./UserLi";
import { EnhancedUserLi } from "../../utilities/types";
import UserConnectionsService from "../../../../services/UserConnectionsService";



export default function SeachLi(friendLiProps : EnhancedUserLi) {

    const queryClient = useQueryClient()

    const {mutateAsync: sendFriendRequest} = useMutation({
        mutationFn: UserConnectionsService.friendRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['userConnections']})
            queryClient.invalidateQueries({queryKey: ['searchFriends']})
        }
    })

    return (
    <UserLi {...friendLiProps}>
        <button onClick={() => {sendFriendRequest([friendLiProps.id])}}>Add</button>
    </UserLi>
    )
}