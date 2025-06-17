import {request} from "@/utils";

export const loginAPI=(params)=>{
    return request({
        url:'/authorizations',
        method:'POST',
        data:params
    })
}

export const getProfileAPI=()=>{
    return request({
        url:'/user/profile',
        method:'GET',
    })
}