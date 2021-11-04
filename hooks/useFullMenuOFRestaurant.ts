import isEmpty from 'lodash/isEmpty'
import useSWR from "swr";
import {fetcher, getAuthFetcher} from "../utils/fetcher";
import {Endpoints} from "../const/endpoints";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {GetFullMenuOfRestaurantsTransformed} from "../interfaces/menu";
import {mapArrayToObject} from "../utils/helper-functions";

export function useFullMenuOFRestaurant () {
    const { data: session } = useSession()
    const { data: restaurants} = useSWR([Endpoints.auth.getMyRestaurants, session?.token], getAuthFetcher)
    const { data: menu, error } = useSWR(() => Endpoints.public.getFullMenuOfRestaurant(restaurants[0].id), fetcher)
    const [transformedMenu, setTransformedMenu] = useState<any>({})


    useEffect(() => {
        if(menu) {
            setTransformedMenu({
                categories: menu.categories.reduce(mapArrayToObject, {}),
                items: menu.items.reduce(mapArrayToObject, {}),
                menus: menu.menus.reduce(mapArrayToObject, {}),
            })
        }
    }, [menu])


    return {
        menu: transformedMenu,
        isLoading: !error && isEmpty(transformedMenu),
        isError: error
    }
}