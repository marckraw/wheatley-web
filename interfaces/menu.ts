// Requests

// Menu Item
export interface GetMenuItemRequest {
    restaurantId: number
    itemId: number
}

export interface GetMenuItemsResponse {
    id: number,
    title: string,
    description: string,
    priceInfo: number,
    suspended: boolean,
    modifiersIds: number[]
}

export interface CreateMenuItemRequest {
    restaurantId: number,
    body: CreateMenuItem
}

export interface UpdateMenuItemRequest extends CreateMenuItemRequest {
    itemId: number
}

export interface CreateMenuItem {
    title: string
    description: string
    priceInfo: number
    suspended: false
    modifiers?: number[]
    categoryId: number
}


// Category
export interface GetMenuCategoryRequest {
    restaurantId: number
    categoryId: number
}

export interface GetMenuCategoryResponse {
    id: number,
    title: string,
    itemsIds: number[]
}

export interface CreateMenuCategoryRequest {
    restaurantId: number,
    body: CreateMenuCategory
}

export interface UpdateMenuCategoryRequest extends CreateMenuCategoryRequest {
    categoryId: number
}

export interface CreateMenuCategory {
    title: string
    itemIds: number[]
}

// Menu
export interface GetMenuRequest {
    restaurantId: number
    menuId: number
}

export interface GetMenuResponse {
    id: number,
    title: string,
    categoriesIds: number[]
}

export interface CreateMenuRequest {
    restaurantId: number,
    body: CreateMenu
}

export interface UpdateMenuRequest extends CreateMenuRequest {
    menuId: number
}

export interface CreateMenu {
    title: string
    categoriesIds: number[]
}


export interface GetFullMenuOfRestaurantsResponse {
    categories: GetMenuCategoryResponse[],
    menus: GetMenuResponse[],
    items: GetMenuItemsResponse[]
}

export interface GetFullMenuOfRestaurantsTransformed {
    categories: {
        [key: number]: GetMenuCategoryResponse
    },
    menus: {
        [key: number]: GetMenuResponse
    },
    items: {
        [key: number]: GetMenuItemsResponse
    }
}