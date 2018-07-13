import * as types from '../../config/actionTypes';

export function login(userName,password) {
    return {
        type:types.LOGIN_SUCCESS
    }  
}