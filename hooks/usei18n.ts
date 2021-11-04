import {all} from "../i18n";

export function usei18n(locale: string) {
    return (textToTranslate: string) => {
        // @ts-ignore next-line
        const translated = all[locale][textToTranslate] // TODO: have to fix types here!!
        return translated ? translated : textToTranslate
    }
}