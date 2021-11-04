/*
*
* This is just for demonstrating purposes, it will not be used anywhere
* now probably (27.09), but will stay here for while, as a template
*
* */

import useSWR from 'swr'
import {fetcher} from "../utils/fetcher";
import {useUsers} from "../hooks/useUsers";
import {useRestaurants} from "../hooks/useRestaurants";
import {Restaurant, User} from "../interfaces";
import {useRestaurantPublic} from "../hooks/useRestaurantPublic";

const DynamicDataExample = () => {
    const {users, isLoading, isError} = useUsers()
    const {restaurants, isLoading: isRestaurantsLoading, isError: isRestaurantsError} = useRestaurants()
    const {restaurant} = useRestaurantPublic(6)

    const { data: dataFromServerless } = useSWR('/api/hello', fetcher)

    if (isError || isRestaurantsError) return <div>failed to load</div>
    if (isLoading || isRestaurantsLoading) return <div>loading...</div>

    // render data
    return (
        <div>
            <h1>Just some testing of backend api</h1>
            <h2>All users</h2>
            {
                users.map((user: User) => {
                    return <div key={user.id}>{user.name} {user.lastName}</div>
                })
            }
            <h2>All Restaurants</h2>
            {
                restaurants.map((restaurant: Restaurant) => {
                    return (
                        <div key={restaurant.id} style={{marginTop: '16px'}}>
                            <div>
                                <span>{restaurant.name}</span>
                                <span>{restaurant.id}</span>
                            </div>
                            <div>
                                {
                                    restaurant.tableQRS.map((table) => {
                                        return (
                                            <div key={table.id}>
                                                <span>{table.name} </span>
                                                <span style={{color: table.deleted ? 'red' : 'green'}}>status</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DynamicDataExample