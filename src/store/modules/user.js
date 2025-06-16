import {createSlice} from "@reduxjs/toolkit";
import {request,setToken as _setToken,getToken} from '@/utils'

const userStore = createSlice({
    name:"user",
    initialState:{
        token:getToken() || ''
    },
    reducers:{
        setToken(state,action){
            state.token = action.payload;
            _setToken(action.payload)
            console.log(state.token)
        }
    }
})

const fetchLogin = (loginForm)=>{
    return async (dispatch)=>{
        const res = await request.post('/authorizations', loginForm)
        dispatch(setToken(res.data.token))
    }
}

export const {setToken} = userStore.actions;
export {fetchLogin}

export const userReducer = userStore.reducer;
