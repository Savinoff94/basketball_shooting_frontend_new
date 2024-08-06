import { useQuery } from "@tanstack/react-query";
import { useState } from "react"
import SearchService from "../../../../services/SearchService";
import { debounce } from "lodash";
import { useCallback } from "react";
import UsersList from "../components/UsersList";
import { UsersInfoById } from "../../../../types/usersBasicTypes";
import SeachLi from "../components/SearchLi";


export default function SearchFriends() {

    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    const {data, isLoading} = useQuery<UsersInfoById>({
        queryKey: ['searchFriends', {debouncedSearch}],
        queryFn:() => SearchService.searchUsers(debouncedSearch),
        staleTime: 60 * 60 * 3 * 1000,
        gcTime: 60 * 60 * 3 * 1000,
        enabled: Boolean(debouncedSearch.length)
    })

    const debouncedSearchHandler = useCallback(debounce((searchStr:string) => {setDebouncedSearch(searchStr)}, 500), [])

    const handleSearchChange = (searchStr: string) => {
        setSearch(searchStr);
        debouncedSearchHandler(searchStr)
    }



    return (
        <>
            <h2>Search friends</h2>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleSearchChange(e.target.value)}} value={search}/>
            <UsersList>
                {data && Object.keys(data).map((userId) => {
                    return <SeachLi key={userId} isLoading={isLoading} {...data[userId]}/>
                })}
            </UsersList>
            {isLoading ? 'LOADING' : ''}
        </>
    )
}