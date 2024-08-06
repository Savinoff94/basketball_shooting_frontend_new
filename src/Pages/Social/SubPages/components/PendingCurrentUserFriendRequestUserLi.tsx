import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import UserLi from "./UserLi";
import { EnhancedUserLi } from "../../utilities/types";
import UserConnectionsService from "../../../../services/UserConnectionsService";



export default function PendingCurrentUserFriendRequestUserLi(friendLiProps : EnhancedUserLi) {

    const queryClient = useQueryClient()
    
    const {mutateAsync: cancelFriendRequest} = useMutation({
        mutationFn: UserConnectionsService.cancelFriendRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['userConnections']})
        }
    })

    return (
    <UserLi {...friendLiProps}>
        <button onClick={() => {cancelFriendRequest([friendLiProps.id])}}>Cancel</button>
    </UserLi>
    )
}