import { useQuery } from "@tanstack/react-query";
import { useState } from "react"
import SearchService from "../../../../services/SearchService";
import { debounce } from "lodash";
import { useCallback } from "react";
import UsersList from "../components/UsersList";
import { UsersInfoById } from "../../../../types/usersBasicTypes";
import SeachLi from "../components/SearchLi";
import { AxiosError } from "axios";
import axios from "axios";

export interface ErrorPayload {message: string, errors: string[]}

export default function SearchFriends() {
    // TODO pagination
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    const {data, isLoading, error} = useQuery<UsersInfoById, AxiosError<ErrorPayload>>({
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
            {error && axios.isAxiosError(error) && error.response  ? error.response?.data.message : ''}
        </>
    )
}