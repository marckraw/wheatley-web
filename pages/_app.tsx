import React from 'react'
import 'pollen-css'
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/fetcher'
import TestContextProvider from '../contexts/TestContext'

function MyApp({ Component, pageProps }: AppProps) {
    const SWROptions = {
        refreshInterval: 4000,
        fetcher,
        // onError: (error: any, key: any) => {
        //     if (error.status !== 403 && error.status !== 404) {
        //         // We can send the error to Sentry,
        //         // or show a notification UI.
        //         console.log("error happaned: Global Error Handler")
        //         console.log(error)
        //     }
        // }
    }

    return (
        <TestContextProvider>
            <SWRConfig value={SWROptions}>
                <>
                    <Component {...pageProps} />
                    <ToastContainer />
                </>
            </SWRConfig>
        </TestContextProvider>
    )
}

export default MyApp
