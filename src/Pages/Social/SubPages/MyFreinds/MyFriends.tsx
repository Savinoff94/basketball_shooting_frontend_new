import UsersList from "../components/UsersList";
import useFetchUserConnections from "../../utilities/hooks";
import FriendLi from "../components/FriendLI";
import { UserConnections } from "../../../../types/usersBasicTypes";

export default function MyFriends() {

    const {data, isLoading} = useFetchUserConnections();

    const {friends = {}} = (data as UserConnections) || {} 
    const friendsIds = Object.keys(friends);
 
    return (
        <>
            <h2>My friends</h2>
            <UsersList>
                {
                    friendsIds.length > 0 && friendsIds.map((userId) => {
                        return <FriendLi key={userId} isLoading={isLoading} {...friends[userId]}/>
                    })
                }
            </UsersList>
            {
                (friendsIds.length) === 0 && <div>None</div>
            }
           {isLoading ? 'LOADING' : ''}
        </>
    )
}