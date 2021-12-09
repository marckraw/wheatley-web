// TODO: fix typing
export const mapArrayToObject = (prev: any, next: any) => {
    return {
        ...prev,
        [next.id]: next,
    }
}
