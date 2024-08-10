import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/store";
import { setCurrentShooter } from "../../../../state/shootingTraining/shootingTrainingSlice";

import UserItem from "../../../../Components/UserItem/UserItem";

import { FriendBlockUserInfo } from "../../../../types/usersBasicTypes";

export default function UserItemChooseSquad(userItemProps : FriendBlockUserInfo) {

    const { currentShooter } = useSelector((state: RootState) => state.shootingTraining);
    const dispatch = useDispatch<AppDispatch>();

    const {id} = userItemProps
    const isSelected = currentShooter === id;

    const onClickHandle = () => {
        if(isSelected) {
            dispatch(setCurrentShooter(''))
        }
        else {
            dispatch(setCurrentShooter(id))
        }
    }

    return <UserItem {...userItemProps} onClickHandle={onClickHandle} isSelected={isSelected}/>
}