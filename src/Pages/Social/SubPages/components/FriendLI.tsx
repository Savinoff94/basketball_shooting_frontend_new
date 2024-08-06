import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import UserLi from "./UserLi";
import { EnhancedUserLi } from "../../utilities/types";
import UserConnectionsService from "../../../../services/UserConnectionsService";


export default function FriendLi(friendLiProps : EnhancedUserLi) {

    const queryClient = useQueryClient()

    const {mutateAsync: removeFriendRequest} = useMutation({
        mutationFn: UserConnectionsService.removeFriendRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['userConnections']})
        }
    })

    return (
    <UserLi {...friendLiProps}>
        <button onClick={() => {removeFriendRequest([friendLiProps.id])}}>Delete</button>
    </UserLi>
    )
}