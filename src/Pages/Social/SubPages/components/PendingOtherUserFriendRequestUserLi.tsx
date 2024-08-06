import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import UserLi from "./UserLi";
import { EnhancedUserLi } from "../../utilities/types";
import UserConnectionsService from "../../../../services/UserConnectionsService";



export default function PendingOtherUserFriendRequestUserLi(friendLiProps : EnhancedUserLi) {

    const queryClient = useQueryClient()
    
    const {mutateAsync: approveFriendRequest} = useMutation({
        mutationFn: UserConnectionsService.approveFriendRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['userConnections']})
        }
    })
    const {mutateAsync: disapproveFriendRequest} = useMutation({
        mutationFn: UserConnectionsService.disapproveFriendRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['userConnections']})
        }
    })

    return (
    <UserLi {...friendLiProps}>
        <button onClick={() => {approveFriendRequest([friendLiProps.id])}}>Approve</button>
        <button onClick={() => {disapproveFriendRequest([friendLiProps.id])}}>Decline</button>
    </UserLi>
    )
}