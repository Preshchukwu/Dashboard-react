import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import User from "./pages/User"
import Admin from "./pages/Admin"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element:<Login/>
            },

            {
                path: "/settings",
                element: <Settings/>
            },

            {
                path: "/user",
                element:<User/>
            },

            {
                path: "/admin",
                element: <Admin/>
            },

            {
                path: "/home",
                element: <Home/>
            },

            {
                path: "*",
                element: `Page not found`
            }
            
        ]
    }
])

export default router