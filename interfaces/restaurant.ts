/*
*
* Backend responses
*
* */
export interface Table {
    id: number
    name: string
    deleted: boolean
}

export interface Restaurant {
    id: number
    name: string
    tableQRS: Table[]
}

export interface CreateRestaurantRequestBody {
    name: string,
    description: string
}

export interface PutTablesIntoRestaurantByIdRequestBody { // TODO: probably not working, update when postman will be updated
    tables: Omit<Table, 'id'>[]
}
