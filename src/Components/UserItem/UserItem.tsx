
import { FriendBlockUserInfo } from "../../types/usersBasicTypes"


type OnUserClickCallback = () => void;

type UserItemType = FriendBlockUserInfo & {isSelected: boolean, onClickHandle: OnUserClickCallback};

export default function UserItem({login,email, simpleStats, isSelected, onClickHandle}: UserItemType) {

    return (
        <button style={{borderColor: isSelected ? 'green' : 'red'}} onClick={() => onClickHandle()}>
            <div>
                <span>{login}</span>
                <span>{email}</span>
            </div>
            <div>
                <span>ft: {simpleStats.freethrows}% </span>
                <span>2pt: {simpleStats.twoPointers}% </span>
                <span>3pt: {simpleStats.threePointers}% </span>
            </div>
        </button>
    )
}