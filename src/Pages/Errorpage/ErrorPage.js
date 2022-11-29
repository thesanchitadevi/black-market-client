import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16  text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl mb-5">Sorry, we couldn't find this page.</p>
                        
                        <Link to='/' className="px-8 py-3 mt-9 font-semibold rounded bg-gray-800 text-gray-200">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;