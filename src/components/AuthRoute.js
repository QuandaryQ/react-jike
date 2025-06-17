import {getToken} from "../utils";
import {Navigate} from "react-router-dom";

export function withAuthRoute(WrappedComponent) {
    return function withAuthRouteComponent(props){
        const token = getToken()
        if(token){
            return <WrappedComponent {...props} />
        }else{
            return <Navigate to="/login" replace />
        }
    }
}