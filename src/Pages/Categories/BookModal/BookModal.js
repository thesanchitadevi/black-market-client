import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookModal = ({ setOpenModal, productInfo, setProductInfo }) => {
    const { product_name, resale_price } = productInfo;

    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.number.value;

        console.log(price, name, email, location, phone);

        const booking = {
            productName: product_name,
            productPrice: price,
            name,
            email,
            location,
            phone
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProductInfo(null);
                    toast.success("Booking Confirm."); 
                }
                else {
                    toast.error(data.message);
                }
            })
    }
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

                                <form onSubmit={handleBooking} className='mt-5'>
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                        Sale Price
                                    </label>

                                    <div className='flex'>
                                        <strong className='text-lg text-gray-700 pt-2 bg-gray-200 pl-2'>$</strong>
                                        <input name='price' defaultValue={resale_price} className="appearance-none block w-full bg-gray-200 text-gray-900 font-semibold border border-gray-200 rounded py-3 px-4 pl-1 leading-tight focus:outline-none focus:bg-white 
                                     focus:border-gray-500" id="grid-city" type="text" placeholder="price" disabled />
                                    </div>


                                    <br />
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Name
                                    </label>
                                    <input name='name' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        defaultValue={user?.displayName} id="grid-first-name" type="text" placeholder="Name" disabled />
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Email
                                    </label>
                                    <input name='email' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        defaultValue={user?.email}
                                        id="grid-first-name" type="text" placeholder="Email" disabled />

                                    <br />

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                        Meeting Location
                                    </label>
                                    <div className="relative">
                                        <input name='location' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Location" required/>
                                    </div>
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <input name='number' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="Phone number" required/>
                                    </div>

                                    <input  className='btn btn-accent w-full bg-gray-700 text-white rounded py-3 mt-3 cursor-pointer' type="submit" value="Submit" />

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