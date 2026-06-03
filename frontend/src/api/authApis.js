import { api } from "./axios"

//for account registration
export const registerAccount = (data) =>{
    return api.post(`/user/create-account`, data)
}

//for account login
export const loginAccount = (data) =>{
    return api.post(`/user/login`, data)
}

//for logout
export const logoutAccount = () =>{
    return api.post(`/user/logout`)
}

//for user data
export const getUserInfo = () =>{
    return api.get(`/user/me`)
}

//check is user auth
export const userAuth = () =>{
    return api.get(`/user/auth-status`)
}