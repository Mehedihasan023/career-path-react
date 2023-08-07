/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center flex-col h-96 my-40'>
            <h1 className='text-9xl font-bold'>404</h1>
            <h1 className='text-7xl font-semibold'>Page not Found</h1>

            <Link to='/'>
             <button className='text-center rounded-lg bg-emerald-300 text-white px-4 py-2 mt-6 mb-4 hover:bg-emerald-400 w-full'>Back to Home Page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;