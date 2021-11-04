import useSWR from "swr";
import {getAuthFetcher} from "../utils/fetcher";
import {Endpoints} from "../const/endpoints";
import {useSession} from "next-auth/react";

export function useMe() {
    const {data: session} = useSession()
    const {data, error} = useSWR([Endpoints.auth.getMe, session?.token], getAuthFetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}