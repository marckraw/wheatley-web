import isEmpty from 'lodash/isEmpty'
import useSWR from 'swr'
import { getAuthFetcher } from '../utils/fetcher'
import { Endpoints } from '../const/endpoints'
import { useSession } from 'next-auth/react'

export function useMyRestaurants() {
    const { data: session } = useSession()
    const { data, error } = useSWR(
        [Endpoints.auth.getMyRestaurants, session?.token],
        getAuthFetcher
    )

    console.log('############')
    console.log(data)
    console.log('############')

    return {
        restaurants: data,
        isLoading: !error && isEmpty(data),
        isError: error,
    }
}
