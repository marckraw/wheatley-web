export const dupa = {
    "items": [
        {
            "id": 13,
            "title": "Extra cheese",
            "description": "",
            "priceInfo": 0,
            "suspended": false
        },
        {
            "id": 14,
            "title": "Extra pepperoni",
            "description": "",
            "priceInfo": 0,
            "suspended": false
        },
        {
            "id": 15,
            "title": "Extra shrooms",
            "description": "",
            "priceInfo": 0,
            "suspended": false
        },
        {
            "id": 17,
            "title": "Pepperoni",
            "description": "Pizza with pepperoni",
            "priceInfo": 10000,
            "suspended": false,
            "modifiersIds": [
                16 // categories[16]
            ]
        },
        {
            "id": 18,
            "title": "Capricious",
            "description": "Pizza with shrooms and ham",
            "priceInfo": 10000,
            "suspended": false
        }
    ],
    "categories": [
        {
            "id": 16,
            "title": "Pizzass modifiers",
            "itemsIds": [
                13, // items[13]
                14, // items[14]
                15  // items[15]
            ]
        },
        {
            "id": 19,
            "title": "Pizzass",
            "itemsIds": [
                17, // items[17]
                18  // items[18]
            ]
        }
    ],
    "menus": [
        {
            "id": 20,
            "title": "Afternoon menu",
            "categoriesIds": [
                19 // categories[19]
            ]
        }
    ]
}
