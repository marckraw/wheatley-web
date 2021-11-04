import { Fetcher } from 'swr'

interface RequestErrorInterface extends Error {
    info: any
    status: number
}

class RequestError implements RequestErrorInterface {
    info: any
    message: string
    name: string
    status: number

    constructor(message: string, info: any, status: number) {
        this.info = info
        this.message = message
        this.name = 'Request Error'
        this.status = status
    }
}

export const fetcher: Fetcher<any> = async (args) => {
    const res: any = await fetch(args)

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const additionalData = await res.json()
        throw new RequestError(additionalData.error, additionalData, res.status)
    }

    return res.json()
}

export const postFetcher: Fetcher<any> = async (args) => {
    console.log('from postFertcher')
    console.log(args)
    const res: any = await fetch(args)

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const additionalData = await res.json()
        throw new RequestError(additionalData.error, additionalData, res.status)
    }

    return res.json()
}

export const getAuthFetcher: Fetcher<any> = async (...args) => {
    const [url, token] = args
    const res: any = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const additionalData = await res.json()
        throw new RequestError(additionalData.error, additionalData, res.status)
    }

    return res.json()
}

export const postAuthFetcher: Fetcher<any> = async (...args) => {
    const [url, token, body] = args
    const res: any = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    })

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const additionalData = await res.json()
        throw new RequestError(additionalData.error, additionalData, res.status)
    }

    console.log('from postAuthFetcher')
    console.log(res)

    if (body.locked) {
        return res.statusText
    } else {
        return res.json()
    }
}
