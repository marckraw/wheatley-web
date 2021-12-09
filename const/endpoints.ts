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
    },
}
