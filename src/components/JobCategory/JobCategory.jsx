/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './JobCategory.css';
const JobCategory = ({category}) => {
    return (
        <section className='bg-sky-50 w-72 h-72 ml-5 mr-5 my-2 pl-10 pt-20 rounded-md '>
            <img className='w-10 mb-8' src={category?.img} alt="" />
            <h3 className='text-lg font-semibold'>{category?.title}</h3>
            <p className='text-gray-400 mt-2'>{category?.jobs}</p>
        </section>
    );
};

export default JobCategory;