import {FETCH_USERS_REQUEST,FETCH_USERS_SUCESS,FETCH_USERS_FAILURE} from './UserTypes'
export const fetchUserRequest =()=>{
    return{
        type :FETCH_USERS_REQUEST
    }
}
const fetchUserSucees =(users)=>{
    return{
        type :FETCH_USERS_SUCESS,
        payload :users
    }
}
const fetchUserFailure =(error)=>{
    return{
        type :FETCH_USERS_FAILURE,
        payload :error
    }
}