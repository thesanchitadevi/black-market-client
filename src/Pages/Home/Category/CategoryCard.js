import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { title, img, _id } = category;
    return (
        <div >
            <Link to={`/categories/${_id}`} className="block" category={category}>
                <img
                    alt="-----"
                    src={img}
                    className="h-full w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72  border border-gray-300"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">Brand Name</strong>

                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-red-500"></span>

                    <p className="mt-0.5 opacity-75 sm:mt-0">{title}</p>
                </div>
            </Link>

        </div>
    );
};

export default CategoryCard;