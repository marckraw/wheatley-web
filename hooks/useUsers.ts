import useSWR from "swr";
import {fetcher} from "../utils/fetcher";
import {Endpoints} from "../const/endpoints";

export function useUsers () {
    const { data, error } = useSWR(Endpoints.util.getAllUsers, fetcher)

    return {
        users: data,
        isLoading: !error && !data,
        isError: error
    }
}


