import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    // let time = new Date().toLocaleString();
    // const [cTime, setTime] = useState(time);
    let [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            // setTime(time);
            setDate(new Date());
        }, 1000);
    });

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddProduct = (data) => {
        // console.log(data);
        console.log(data.img[0]);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const products = {
                        CategoryTitle: data.title,
                        product_name: data.products,
                        original_price: data.originalPrice,
                        salePrice: data.salePrice,
                        location: data.location,
                        use_years: data.years,
                        posted_time: data.times,
                        img: imgData.data.url
                    }

                    //save the products information to database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success("New products added");
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }


    return (
        <div className='flex flex-col  items-center w-full '>
            <div>
                <h1 className='text-2xl font-semibold m-10'>Add your products</h1>
            </div>
            <div class="rounded-lg border border-gray-200 w-1/3 mb-20">
                <form onSubmit={handleSubmit(handleAddProduct)} >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="title" className="block text-sm">Category Title</label>
                            <input type="text" name="title" id="title" placeholder="title"
                                {...register("title",
                                    {
                                        required: "Title is Required"
                                    }
                                )}
                                className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />
                        </div>

                        <h1 className='text-xl font-semibold'>Products Details</h1>
                        <div className="space-y-2">
                            <label htmlFor="products" className="block text-sm">Products Name</label>
                            <input
                                type="text" name="products" id="products" placeholder="products"
                                {...register("products",
                                    {
                                        required: "Product is required"
                                    }
                                )}
                                className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                        </div>
                        <div className='flex space-x-2'>
                            <div className="space-y-2">
                                <label htmlFor="originalPrice" className="block text-sm">Products Original Price</label>
                                <input
                                    type="number" name="originalPrice" id="originalPrice" placeholder="originalPrice"
                                    {...register("originalPrice")}
                                    className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                            </div>
                            <div className="space-y-2">
                                <label htmlFor="salePrice" className="block text-sm">Products Sale Price</label>
                                <input
                                    type="number" name="salePrice" id="salePrice" placeholder="salePrice"
                                    {...register("salePrice",
                                        {
                                            required: "salePrice is required"
                                        }
                                    )}
                                    className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className="space-y-2">
                                <label htmlFor="years" className="block text-sm">Used Years</label>
                                <input
                                    type="years" name="years" id="years" placeholder="years"
                                    {...register("years",
                                        {
                                            required: "Years is required"
                                        }
                                    )}
                                    className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                            </div>
                            <div className="space-y-2">
                                <label htmlFor="location" className="block text-sm">Location</label>
                                <input
                                    type="text" name="location" id="location" placeholder="location"
                                    {...register("location",
                                        {
                                            required: "Location is required"
                                        }
                                    )}
                                    className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                            </div>
                        </div>
                        
                            
                        <div className="space-y-2">
                            <label htmlFor="times" className="block text-sm">Posted Time</label>
                            <input
                                type="time" name="times" id="times" placeholder={date.toDateString()}
                                {
                                ...register("times")
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />

                        </div>

                        <div className="space-y-2">
                            <label htmlFor="img" className="block text-sm">Image</label>
                            <input type="file" name="img" id="img" placeholder="name"
                                {...register("img",
                                    {
                                        required: "Image is Required"
                                    }
                                )}
                                className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-gray-400" />
                        </div>
                    </div>
                    <input className='btn btn-accent w-full px-8 py-3 mt-5 font-semibold rounded-md bg-gray-400 text-gray-100 cursor-pointer' value="Add Product" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProducts;

/* 

title
"Apple"
img
"https://media.wired.com/photos/5f8dfd6db9910f1848191341/master/w_1600%…"

products
product_name
"iPhone 13 pro"
original_price
"1500"
img
"https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro…"
location
"Dhaka"
resale_price
"1420"
use_years
"6 months"
posted_time
"1 Nov"
seller
"John"
*/