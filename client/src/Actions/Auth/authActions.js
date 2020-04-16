import {AUTH_LOGIN, AUTH_LOGOUT} from "./authActionTypes";

export function userLogin (user){
    return {
        type: AUTH_LOGIN,
        user
    }
}

export function userLogout (){
    return {
        type: AUTH_LOGOUT,
        
    }
    
}