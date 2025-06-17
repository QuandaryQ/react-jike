import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import {createBrowserRouter} from "react-router-dom";
import {withAuthRoute} from "@/components/AuthRoute";
import Home from "@/pages/Layout/Home";
import Article from "@/pages/Layout/Article";
import Publish from "@/pages/Layout/Publish";

const AuthRoute = withAuthRoute(Layout);

const router = createBrowserRouter([
    {
        path:'/',
        element: <AuthRoute/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/article',
                element:<Article/>
            },
            {
                path:'/publish',
                element:<Publish/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }
])

export default router