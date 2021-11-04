import {
    CreateMenuCategoryRequest,
    CreateMenuItemRequest,
    CreateMenuRequest,
    GetMenuCategoryRequest,
    GetMenuItemRequest,
    GetMenuRequest,
    UpdateMenuCategoryRequest,
    UpdateMenuItemRequest,
    UpdateMenuRequest,
} from '../interfaces'

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL

export const Endpoints = {
    util: {
        getAllUsers: `${API_URL}/util/public/getAllUsers`,
        getAllRestaurants: `${API_URL}/util/public/getAllRestaurants`,
    },
    public: {
        login: `${API_URL}/public/login`,
        createRestaurant: `${API_URL}/public/restaurant/create`,
        getRestaurantById: (id: number) => `${API_URL}/public/restaurant/${id}`,
        getFullMenuOfRestaurant: (restaurantId: number) =>
            `${API_URL}/public/restaurant/${restaurantId}/menus`,
    },
    auth: {
        getUserById: (id: number) => `${API_URL}/auth/user/${id}`,
        getMe: `${API_URL}/auth/user/profile`,
        getMyRestaurants: `${API_URL}/auth/user/myRestaurants`,
        helloAuthTest: `${API_URL}/util/hello`,
        menu: {
            getItem: ({ restaurantId, itemId }: GetMenuItemRequest) =>
                `${API_URL}/auth/restaurant/${restaurantId}/item/${itemId}`,
            createItem: ({ restaurantId, body }: CreateMenuItemRequest) => ({
                url: `${API_URL}/auth/restaurant/${restaurantId}/item`,
                body,
            }),
            updateItem: ({
                restaurantId,
                body,
                itemId,
            }: UpdateMenuItemRequest) => ({
                url: `${API_URL}/auth/restaurant/${restaurantId}/item/${itemId}`,
                body,
            }),
            getCategory: ({
                restaurantId,
                categoryId,
            }: GetMenuCategoryRequest) =>
                `${API_URL}/auth/restaurant/${restaurantId}/category/${categoryId}`,
            createCategory: ({
                restaurantId,
                body,
            }: CreateMenuCategoryRequest) => ({
                url: `${API_URL}/auth/restaurant/${restaurantId}/category`,
                body,
            }),
            updateCategory: ({
                restaurantId,
                body,
                categoryId,
            }: UpdateMenuCategoryRequest) => ({
                url: `${API_URL}/auth/restaurant/${restaurantId}/category/${categoryId}`,
                body,
            }),
            getMenu: ({ restaurantId, menuId }: GetMenuRequest) =>
                `${API_URL}/auth/restaurant/${restaurantId}/menu/${menuId}`,
            createMenu: ({ restaurantId, body }: CreateMenuRequest) => ({
                url: `${API_URL}/auth/restaurant/${restaurantId}/menu`,
                body,
            }),
            updateMenu: ({
                restaurantId,
                body,
                menuId,
            }: UpdateMenuRequest) => ({
                url: `${API_URL}/auth/restaurant/${restaurantId}/menu/${menuId}`,
                body,
            }),
        },
    },
}
