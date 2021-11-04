import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'
import {
    LoginGoogleJWTVerificationRequest,
    LoginGoogleJWTVerificationResponse,
} from '../../../interfaces/index'

export default (req: any, res: any) =>
    NextAuth(req, res, {
        // Configure one or more authentication providers
        providers: [
            CredentialsProvider<any>({
                name: 'BystroBackendCredentials',
                credentials: {
                    username: {
                        label: 'Username',
                        type: 'text',
                        placeholder: 'jsmith',
                    },
                    password: { label: 'Password', type: 'password' },
                },
                async authorize(credentials: any, req: any) {
                    console.log('This is authorize endpoint: ')
                    console.log('crendentials endpoint')
                    console.log(process.env.CREDENTIALS_LOGIN_ENDPOINT)
                    const res = await fetch(
                        process.env.CREDENTIALS_LOGIN_ENDPOINT ||
                            'http://localhost:8080/api/public/login',
                        {
                            method: 'POST',
                            body: JSON.stringify(credentials),
                            headers: { 'Content-Type': 'application/json' },
                        }
                    )

                    console.log(
                        'Response from authorization with login and pass'
                    )
                    console.log(res)

                    const user = await res.json()

                    console.log('User: ')
                    console.log(user)

                    const token = res.headers.get('authorization')
                    user.token = token

                    // If no error and we have user data, return it
                    if (res.ok && user) {
                        return user
                    }
                    // Return null if user data could not be retrieved
                    return null
                },
            }),
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID || '',
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
                idToken: true,
            }),
        ],
        callbacks: {
            async signIn({ user, account, profile, email, credentials }) {
                if (account.id_token) {
                    const googleJwtToken: LoginGoogleJWTVerificationRequest = {
                        token: account.id_token,
                    }

                    const url =
                        process.env.GOOGLE_LOGIN_ENDPOINT ||
                        'http://localhost:8080/api/public/login/google'

                    try {
                        const res = await fetch(url, {
                            method: 'POST',
                            body: JSON.stringify(googleJwtToken),
                            headers: { 'Content-Type': 'application/json' },
                        })

                        const { token }: LoginGoogleJWTVerificationResponse =
                            await res.json()
                        user.token = token

                        return true
                    } catch (error) {
                        console.log('Error happened: ')
                        console.log(error)
                        return false
                    }
                } else {
                    return true
                }
            },
            async session({ session, user, token }) {
                console.log('This is token ?')
                console.log(session)
                console.log(token)

                if (token.backendToken) {
                    session.token = token.backendToken
                }

                return session
            },
            async jwt({ token, account, user }) {
                if (user?.token) {
                    token.backendToken = user?.token
                }

                return token
            },
        },
        events: {
            async signIn(message) {
                console.log('Successful signin')
            },
            async signOut(message) {
                /* on signout */
            },
            async createUser(message) {
                /* user created */
            },
            async updateUser(message) {
                /* user updated - e.g. their email was verified */
            },
            async linkAccount(message) {
                /* account (e.g. Twitter) linked to a user */
            },
            async session(message) {
                /* session is active */
            },
        },
        debug: true,
    })
