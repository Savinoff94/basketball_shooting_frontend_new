import { ReactNode } from "react";
import { FriendBlockUserInfo } from "../../../../types/usersBasicTypes";

export type UserBlockProps = FriendBlockUserInfo & {isLoading: boolean, children: ReactNode}

export default function UserLi({simpleStats, login, id, isLoading, children, email }: UserBlockProps): JSX.Element {
    isLoading;
    return (
        <li key={id} id={id}>
                <div>
                    <div>{login}</div>
                    <div>{email}</div>
                </div>
                <div><span>1pt: </span><span>{simpleStats['freethrows']}%</span></div>
                <div><span>2pt: </span><span>{simpleStats['twoPointers']}%</span></div>
                <div><span>3pt: </span><span>{simpleStats['threePointers']}%</span></div>
            <div>
            {
                children
            }
            </div>
        </li>
    );
}