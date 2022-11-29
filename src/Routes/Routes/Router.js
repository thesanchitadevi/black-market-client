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
import ErrorPage from "../../Pages/Errorpage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllUsers from "../../DashBoard/Admin/AllUsers/AllUsers";
import AllSellers from "../../DashBoard/Admin/AllSellers/AllSellers";
import AllBuyers from "../../DashBoard/Admin/AllBuyers/AllBuyers";
import AddProducts from "../../DashBoard/Seller/AddProducts/AddProducts";
import MyProducts from "../../DashBoard/Seller/MyProducts/MyProducts";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
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
        path: '/dashboard/myorders',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
           
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
        ]
    }
])

export default router;