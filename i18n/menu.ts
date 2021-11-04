type Languages = 'en-US' | "pl-PL"

interface Translations {
    [key: string]: string
}

type CommonLocale = {
    [key in Languages]: Translations
}

export const menu: CommonLocale = {
    "pl-PL": {
        "Home": "Główna",
        "Profile": "Profil",
        "Manage menu": "Zarządzaj menu"
    },
    "en-US": {
        "Home": "Home",
        "Profile": "Profile",
        "Manage menu": "Manage menu"
    },
}