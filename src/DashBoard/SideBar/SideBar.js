import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';

const SideBar = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);


    return (
        <div className='lg:block hidden'>
            <div className="h-full p-3 space-y-2 w-60 bg-gray-100 text-gray-800 ">
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
    );
};

export default SideBar;