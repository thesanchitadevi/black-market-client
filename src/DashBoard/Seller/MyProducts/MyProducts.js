import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../../Pages/Shared/Loading/Loading';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://black-market-server.vercel.app/products??email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    });

    const handleDeleteDoctor = user => {
        fetch(`https://black-market-server.vercel.app/products/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success( 'Deleted successfully.')
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-col  items-center w-full'>
            <div>
                <h1 className='text-2xl font-semibold m-10'>My Products : {products?.length}</h1>
            </div>
            <div className="rounded-lg border border-gray-200 w-full ">
                <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Image</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Category</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Products Name</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Original Price</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Sale Price</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Location</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Used</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Posted</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {/*  */}
                        {/* CategoryTitle: data.title,
                        product_name: data.products,
                        original_price: data.originalPrice,
                        salePrice: data.salePrice,
                        location: data.location,
                        use_years: data.years,
                        posted_time: data.times,
                        img:  */}
                        {
                            products.length &&
                            products?.map((product, i) =>
                                <>
                                    <tr className=" border border-grey-500 md:border-none block md:table-row">
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Product Image</span><img src={product.img} alt="" srcset="" className='w-16 h-16 ' /></td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Category</span>{product.CategoryTitle}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Products Name</span>{product.product_name}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Original Price</span>$ {product.original_price}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Sale Price</span>$ {product.salePrice}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Location</span>{product.location}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Used</span>{product.use_years} years</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Posted</span>{product.posted_time}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                            <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                            
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                                                onClick={() => {
                                                    setShowModal(true);
                                                    setDeletingDoctor(product)

                                                }}
                                            >
                                                Delete

                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )

                        }
                    </tbody>
                </table>
            </div>
            {
                showModal && deletingDoctor && <ConfirmationModal
                    setOpenModal={setShowModal}
                    title={`Are you sure you want to delete?`}
                    
                    handleDeleteDoctor={handleDeleteDoctor}
                    modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;