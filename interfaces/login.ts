/*
*
* Requests
*
* */
export interface LoginRequestBody {
    username: string
    password: string
}

// Google token verification on our backend
export interface LoginGoogleJWTVerificationRequest {
    token: string
}

// returns proper access token to backend endpoints
export interface LoginGoogleJWTVerificationResponse {
    token: string
}


/*
*
* Responses
*
* */
export interface User {
    id: number
    name: string
    lastName: string
}