import React, { useEffect } from 'react'
import 'pollen-css'
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/fetcher'
import TestContextProvider from '../contexts/TestContext'
import { SessionProvider, signIn, useSession } from 'next-auth/react'
import { AuthGate } from '../components/Auth'
import { NextPage } from 'next'
import { Protected } from '../interfaces/local'

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
        <SessionProvider>
            <TestContextProvider>
                <SWRConfig value={SWROptions}>
                    <>
                        {(Component as NextPage & Protected).auth ? (
                            <AuthGate>
                                <Component {...pageProps} />
                            </AuthGate>
                        ) : (
                            <Component {...pageProps} />
                        )}
                        <ToastContainer />
                    </>
                </SWRConfig>
            </TestContextProvider>
        </SessionProvider>
    )
}

export default MyApp
