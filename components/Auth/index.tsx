import React, {useEffect} from "react";
import {signIn, useSession} from "next-auth/react";
import GlobalLoading from "../GlobalLoading";

export const AuthGate: React.FC<{children: JSX.Element}> = ({ children }) => {
    const { data: session, status } = useSession()

    const isUser = !!session?.token

    useEffect(() => {
        if (status === 'loading') { return } // Do nothing while loading
        if (!isUser) { signIn() } // If not authenticated, force log in
    }, [isUser, status])

    if (isUser) {
        return children
    }

    // Session is being fetched, or no user.
    // If no user, useEffect() will redirect.
    return <GlobalLoading />
}