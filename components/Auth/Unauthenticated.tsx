import {signIn} from "next-auth/react";

const Unauthenticated = () => {
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default Unauthenticated
