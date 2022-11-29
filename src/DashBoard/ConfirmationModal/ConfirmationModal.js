import React from 'react';

const ConfirmationModal = ({ setOpenModal, title, message, modalData, handleDeleteDoctor }) => {
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
                                    <h4 className="text-xl font-medium text-red-800">
                                        {title}
                                    </h4>
                                    <input onClick={() => setOpenModal(false)} type="button" value="x" className='font-semibold text-2xl border px-1' />
                                </div>

                            </div>
                            <div className='flex'>
                                <input
                                    onClick={() => {
                                        setOpenModal(false);
                                        handleDeleteDoctor(modalData)
                                    }}
                                    className='btn btn-accent w-full bg-red-600 text-white py-2 rounded ' type="submit" value="Delete" />
                                <input
                                    onClick={() => setOpenModal(false)}
                                    className='btn btn-accent w-full  bg-green-600 text-white py-2 rounded mx-3' type="submit" value="Cancel" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;