import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/store";
import { appendSquad, removeFromSquad } from "../../../../state/shootingTraining/shootingTrainingSlice";

import UserItem from "../../../../Components/UserItem/UserItem";

import { FriendBlockUserInfo } from "../../../../types/usersBasicTypes";

export default function UserItemChooseSquad(userItemProps : FriendBlockUserInfo) {

    const { selectedSquad } = useSelector((state: RootState) => state.shootingTraining);
    const dispatch = useDispatch<AppDispatch>();

    const {id} = userItemProps
    const isSelected = selectedSquad.includes(id);

    const onClickHandle = () => {
        if(isSelected) {
            dispatch(removeFromSquad(id))
        }
        else {
            dispatch(appendSquad(id))
        }
    }

    return <UserItem {...userItemProps} onClickHandle={onClickHandle} isSelected={isSelected}/>
}