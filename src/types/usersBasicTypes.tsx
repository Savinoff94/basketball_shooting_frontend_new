type FriendBlockUserInfo = UserBasicInfo & {simpleStats: UserBasicBasketballStats};

type SpecificFriendBlockProps = FriendBlockUserInfo & {isAlone: boolean}

type UserBasicInfo = {

    id: string
    login: string,
    email: string,
    imageSrc: string,
    
}

type UserBasicBasketballStats = {
    freethrows?: string ;
    threePointers?: string;
    twoPointers?: string;
}

type UsersInfoById = {
    [id: string] : FriendBlockUserInfo
}

type UserConnections = {
    friends : UsersInfoById,
    pendingThisUsersFriendRequests : UsersInfoById,
    pendingOtherUsersFriendRequests : UsersInfoById,
}

type BaseUserConnectionsInfoType = {
    [key: string]: string[],
    friends : string[],
    pendingOtherUsersFriendRequests : string[],
    pendingThisUserFriendRequests : string[],
}

export {
    type UsersInfoById,
    type FriendBlockUserInfo,
    type BaseUserConnectionsInfoType,
    type UserConnections,
    type SpecificFriendBlockProps,
}