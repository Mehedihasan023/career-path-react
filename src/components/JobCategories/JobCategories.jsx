/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './JabCategories.css';
import JobCategory from '../JobCategory/JobCategory';
const JobCategories = () => {
    const [categories,setCategories]= useState([]);
    useEffect(()=>{
       fetch('job-categories.json')
       .then(res=> res.json())
       .then(data=> setCategories(data))

    },[]);

    return (
        <div className=''>
            <h1 className='text-center text-5xl font-semibold mt-32 mb-4'>Job Category List</h1>
            <p className='text-center text-base text-gray-400 mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4'>
            {
                categories.map(category=> <JobCategory
                key={category.id}
                category={category}
                ></JobCategory>)
            }
            </div>
            
        </div>
    );
};

export default JobCategories;