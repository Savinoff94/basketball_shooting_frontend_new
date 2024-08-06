import UsersList from "../components/UsersList";
import useFetchUserConnections from "../../utilities/hooks";
import PendingOtherUserFriendRequestUserLi from "../components/PendingOtherUserFriendRequestUserLi";
import PendingCurrentUserFriendRequestUserLi from "../components/PendingCurrentUserFriendRequestUserLi";
import { UserConnections } from "../../../../types/usersBasicTypes";

export default function PendingInvitations() {
    const {data, isLoading} = useFetchUserConnections();

    const {pendingOtherUsersFriendRequests = {}, pendingThisUsersFriendRequests = {}} = data as UserConnections || {};

    const pendingOtherUsersFriendRequestsIds = Object.keys(pendingOtherUsersFriendRequests);
    const pendingThisUsersFriendRequestsIds = Object.keys(pendingThisUsersFriendRequests);
     
    return (
        <>
        <h2>
            Pending friends invitations
        </h2>
        <UsersList>
        {(pendingOtherUsersFriendRequestsIds.length > 0) && pendingOtherUsersFriendRequestsIds.map((userId) => {
            return <PendingOtherUserFriendRequestUserLi isLoading={isLoading} {...pendingOtherUsersFriendRequests[userId]}/>
        })}
        </UsersList>
        {
            (pendingOtherUsersFriendRequestsIds.length === 0) && <div>None</div>
        }


        <h2>
            Users to whom I have sent friend requests
        </h2>

        <UsersList>
        {(pendingThisUsersFriendRequestsIds.length > 0) && pendingThisUsersFriendRequestsIds.map((userId) => {
            return <PendingCurrentUserFriendRequestUserLi isLoading={isLoading} {...pendingThisUsersFriendRequests[userId]}/>
        })}
        </UsersList>
        {
            (pendingThisUsersFriendRequestsIds.length) === 0 && <div>None</div>
        }
        </>
    )
}