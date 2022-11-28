import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home";
import Blog from '../../Pages/Blog/Blog'
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DashBoard from "../../DashBoard/DashBoard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import MyOrders from "../../DashBoard/MyOrders/MyOrders";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            }
        ]
    }
])

export default router;