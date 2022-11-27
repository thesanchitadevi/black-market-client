import React, { useState } from 'react';
import BookModal from './BookModal/BookModal';

const ProductsCard = ({ product }) => {
    const { product_name, original_price, img, location, resale_price, use_years, posted_time, seller } = product;

    const [showModal, setShowModal] = useState(false);
    const [productInfo, setProductInfo] = useState(null);


    return (
        <div>
            <div href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="....."
                    src={img}
                    className="h-80 w-full rounded-md object-cover"
                />

                <div className="mt-2 flex flex-col justify-center items-center">
                        <div>
                            <dt className="sr-only">Model</dt>

                            <dd className="font-medium text-xl text-center">{product_name}</dd>
                        </div>
                    <dl className='mt-5 flex justify-between space-x-10'>
                        <div className='flex'>
                            <h1 className='text-md font-medium'>Original Price : </h1>

                            <dd className="text-md font-semibold  text-gray-800"> ${original_price}</dd>
                        </div>
                        <div className='flex'>
                            <h1 className='text-md text-red-700 font-medium'>Sale Price : </h1>

                            <dd className="text-md font-semibold  text-red-700"> ${resale_price}</dd>
                        </div>
                         <br />
                    </dl>

                    <div className="mt-5 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                           

                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Location</p>

                                <p className="font-medium">{location}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Used years</p>

                                <p className="font-medium">{use_years}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Posted</p>

                                <p className="font-medium">{posted_time}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Seller</p>

                                <p className="font-medium">{seller}</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <button disabled={product === 'null'}
                                    className='text-base border border-gray-700 px-2 rounded hover:bg-gray-700 hover:text-white'
                                    onClick={() => {
                                    setShowModal(true);
                                    setProductInfo(product)
                                    
                                }}>book now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && productInfo && <BookModal
                productInfo={productInfo}
                setProductInfo={setProductInfo}
                setOpenModal={setShowModal}
                
            />}

        </div>
    );
};

export default ProductsCard;