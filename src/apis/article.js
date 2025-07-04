//封装文章相关接口

import {request} from "@/utils";

export function getChannelAPI(){
    return request({
        url:'/channels',
        method:'GET',
    })
}

export function PostArticleAPI(data){
    return request({
        url:'/mp/articles?draft=false',
        method:'POST',
        data:data
    })
}

export function getArticleListAPI(params){
    return request({
        url:'/mp/articles',
        method:'GET',
        params:params
    })
}