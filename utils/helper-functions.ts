import {GetFullMenuOfRestaurantsTransformed} from "../interfaces/menu";

export const pickCategory = (id: number, menu: GetFullMenuOfRestaurantsTransformed) => menu.categories[id] || []
export const pickMenu = (id: number, menu: GetFullMenuOfRestaurantsTransformed) => menu.menus[id] || []
export const pickItem = (id: number, menu: GetFullMenuOfRestaurantsTransformed) => menu.items[id] || []
export const pickItemsByCategory = (categoryId: number, menu: GetFullMenuOfRestaurantsTransformed) => {
    const pickedCategory = pickCategory(categoryId, menu)

    return pickedCategory.itemsIds ? pickedCategory.itemsIds.map(itemId => pickItem(itemId, menu)) : []
}



// TODO: fix typing
export const mapArrayToObject = (prev: any, next: any) => {
    return {
        ...prev,
        [next.id]: next
    }
}