import React from 'react';

const BookModal = ({ setOpenModal, productInfo }) => {
    const { product_name, original_price, img, location, resale_price, use_years, posted_time, seller } = productInfo;
    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setOpenModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3 ">

                            <div className="my-2 text-center  sm:text-left">
                                <div className='flex justify-between'>
                                    <h4 className="text-xl font-medium text-gray-800">
                                        Model : <strong>{product_name}</strong>
                                    </h4>
                                    <input onClick={() => setOpenModal(false)} type="button" value="x" className='font-semibold text-2xl border px-1' />
                                </div>

                                <form  className='mt-5'>
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                        Sale Price
                                    </label>
                                    <p name='date' defaultValue={resale_price} className="appearance-none block w-full bg-gray-200 text-gray-900 font-semibold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                                     focus:border-gray-500" id="grid-city" type="text" placeholder="Date" disabled >
                                        ${resale_price} 
                                    </p>
                                    <br />
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Name
                                    </label>
                                    <input name='patientName' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" disabled />
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Email
                                    </label>
                                    <input name='email' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email" disabled />

                                    <br />

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                      Meeting Location
                                    </label>
                                    <div className="relative">
                                        <input name='location' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Location"  />
                                    </div>
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <input name='number' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Phone number"  />
                                    </div>

                                    
                                    

                                    <input className='btn btn-accent w-full bg-gray-700 text-white rounded py-3 mt-3 cursor-pointer' type="submit" value="Submit" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookModal;