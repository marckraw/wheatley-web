import useSWR from "swr";
import {fetcher} from "../utils/fetcher";
import {Endpoints} from "../const/endpoints";

export function useRestaurantPublic (id: number) {
    const { data, error } = useSWR(Endpoints.public.getRestaurantById(id), fetcher)

    return {
        restaurant: data,
        isLoading: !error && !data,
        isError: error
    }
}