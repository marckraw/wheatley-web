import useSWR from "swr";
import {fetcher} from "../utils/fetcher";
import {Endpoints} from "../const/endpoints";

export function useRestaurants () {
    const { data, error } = useSWR(Endpoints.util.getAllRestaurants, fetcher)

    return {
        restaurants: data,
        isLoading: !error && !data,
        isError: error
    }
}


