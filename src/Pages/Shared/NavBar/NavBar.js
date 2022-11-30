import {useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assests/logo.png"
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import useSeller from "../../../Hooks/useSeller";

export default function NavBar() {
    const { user, providerSignOut } = useContext(AuthContext);
    const [navbar, setNavbar] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const handleLogout = event => {
        providerSignOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    
    const menu = <>
        {user?.uid ?
            <button onClick={handleLogout}
                className="inline-block space-x-5 w-full px-10 text-center text-blue-900 "
            >
                Logout
            </button>
            :
            <Link
                to="/login"
                className="inline-block space-x-5 w-full px-10 text-center text-blue-900 "
            >
                Login
            </Link>
        }
        

    </>

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="flex">
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setSidebar(!sidebar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-blue-900"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-blue-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <Link to="/">
                                <h2 className="text-2xl font-bold text-gray-900">Black-Market</h2>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-900"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-blue-900 hover:text-blue-600">
                                <Link to="/">Home</Link>
                            </li>
                            
                            <li className="text-blue-900 hover:text-blue-600">
                                <Link to="/blog">Blog</Link>
                            </li>
                            {
                                user?.uid &&
                                <li className="text-blue-900 hover:text-blue-600">
                                        <Link to="/dashboard/myorders">DashBoard</Link>
                                </li>
                                    
                            }
                            
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            {menu}
                        </div>
                    </div>
                </div>
                <div>
                    {/* sidebar */}
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${sidebar ? "block" : "hidden"
                            }`}
                    >
                        <div className="lg:hidden sm:block">
                            <div className="h-full p-3 space-y-2 w-full bg-gray-100 text-gray-800 ">
                                <div className="flex items-center p-2 space-x-4 ">
                                    <div>
                                        <h2 className="text-lg font-semibold">{user.displayName}</h2>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-700">
                                    <ul className="pt-2 pb-4 space-y-1 text-sm">



                                        <>
                                            <li>
                                                <Link to='/dashboard/myorders' className="flex items-center p-2 space-x-3 rounded-md">

                                                    <span>My Orders</span>
                                                </Link>
                                            </li>

                                        </>

                                        {
                                            isSeller &&
                                            <>
                                                <li>
                                                    <Link to='/dashboard/addproduct' className="flex items-center p-2 space-x-3 rounded-md">

                                                        <span>Add Product</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/dashboard/myproducts' className="flex items-center p-2 space-x-3 rounded-md">

                                                        <span>My Product</span>
                                                    </Link>
                                                </li>
                                            </>
                                        }
                                        {
                                            isAdmin &&
                                            <>
                                                <li>
                                                    <Link to='/dashboard/allusers' className="flex items-center p-2 space-x-3 rounded-md">
                                                        <span>All Users</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/dashboard/allsellers' className="flex items-center p-2 space-x-3 rounded-md">
                                                        <span>All Sellers</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/dashboard/allbuyers' className="flex items-center p-2 space-x-3 rounded-md">
                                                        <span>All Buyers</span>
                                                    </Link>
                                                </li>
                                            </>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    {menu}
                </div>
            </div>
        </nav>
    );
}