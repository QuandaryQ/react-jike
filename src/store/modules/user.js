import {createSlice} from "@reduxjs/toolkit";
import {request,setToken as _setToken,getToken} from '@/utils'
import {removeToken} from "@/utils";
import {loginAPI,getProfileAPI} from "@/apis/user";

const userStore = createSlice({
    name:"user",
    initialState:{
        token:getToken() || '',
        userInfo:{}
    },
    reducers:{
        setToken(state,action){
            state.token = action.payload;
            _setToken(action.payload)
            console.log(state.token)
        },
        setUserInfo(state,action){
            state.userInfo = action.payload;
        },
        clearUserInfo(state){
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

const fetchLogin = (loginForm)=>{
    return async (dispatch)=>{
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fetchUserInfo = ()=>{
    return async (dispatch)=>{
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}

export const {setToken,setUserInfo,clearUserInfo} = userStore.actions;
export {fetchLogin,fetchUserInfo}

export const userReducer = userStore.reducer;
