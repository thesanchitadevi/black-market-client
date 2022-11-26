import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Categories = () => {
    const category = useLoaderData();
    // console.log(category.products);
    const { products } = category;
    
    return (
        <div className='w-10/12 mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center text-gray-900 my-10'>Available Products : {products.length}</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    products.map(product => <ProductsCard
                        key={product.id}
                        product={product}
                    ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Categories;