type Languages = 'en-US' | "pl-PL"

interface Translations {
    [key: string]: string
}

type CommonLocale = {
    [key in Languages]: Translations
}

export const common: CommonLocale = {
    "pl-PL": {
        "My restaurants": "Moje restauracje",
        "Login": "Zaloguj",
        "Your profile": "Twoj profil",
        "Loading...": "Ładowanie...",
        "Main Content": "Główny kontent",
        "empty": "Pusty"
    },
    "en-US": {
        "My restaurants": "My restaurants",
        "Login": "Login",
        "Your profile": "Your profile",
        "Loading...": "Loading...",
        "Main Content": "Main Content",
        "empty": "empty"
    },
}