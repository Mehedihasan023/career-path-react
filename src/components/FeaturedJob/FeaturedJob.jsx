/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './FeaturedJob.css';
const FeaturedJob = ({job}) => {
    
    return (
        <div className='w-11/12 ml-7  mb-6 h-auto border border-gray-400 rounded-lg'>
            <img className='w-auto mb-8 h-14 m-10' src={job.image} alt="" />
             <h2 className='text-xl font-semibold ml-10 mb-2'>{job.jobTitle}</h2>
            <h4 className='text-base font-medium text-gray-500 ml-10'>{job.companyName}</h4>
            <div className='flex ml-10'>
                 <p className='text-sky-500 border rounded-md px-4 py-1 border-sky-500 mr-4'>{job.remoteStatus ? 'Remote' : 'Onsite'}</p>
                <p className='text-sky-500 border rounded-md px-4 py-1 border-sky-500 mr-4'>{job.jobType}</p>
            </div>
            <p className='ml-10 mt-4 text-gray-600'> <span> {job.jobLocation} </span> <span> {job.salary}</span></p>

            <button className='ml-10 rounded-lg bg-emerald-300 text-white px-4 py-2 mt-6 mb-4 hover:bg-emerald-400'>
                View Details
            </button>

        </div>
    );
};

export default FeaturedJob;