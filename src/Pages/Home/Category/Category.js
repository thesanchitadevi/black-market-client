import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-20'  data-aos="fade-down" >
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        Available Brand
                    </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Choose Your Favorite
                </p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 my-10 mx-auto w-10/12'>
                {
                    categories.map(category => <CategoryCard
                        key={category.id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;