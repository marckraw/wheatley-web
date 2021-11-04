import {useRouter} from "next/router";
import {usei18n} from "./usei18n";

export function useTranslationWithRouterLocale () {
    const {locale} = useRouter()
    return usei18n(locale as string)
}
