/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
const AppliedJob = ({ jobs }) => {
    const { company_logo, job_title, company_name, location, fullTime_or_partTime, remote_or_onsite, salary, id } = jobs;


    return (
        <section className='max-width'>
            <div className='md:flex md:flex-row ml-10 mt-20 justify-center items-center'>
                <img className='w-52 h-52' src={company_logo} alt="" />
                <div className='md:grow ml-4'>
                    <h2 className='mb-2'>{job_title}</h2>
                    <p className='text-gray-500 mb-2'>{company_name}</p>
                    <div className='flex'>
                        <p className='text-sky-500 border rounded-md px-4 py-1 border-sky-500 mr-4'>{remote_or_onsite}</p>
                        <p className='text-sky-500 border rounded-md px-4 py-1 border-sky-500 mr-4'>{fullTime_or_partTime}</p>
                    </div>
                    <p className=' mt-4 text-gray-600'> <span> {location} </span> <span> {salary}</span></p>
                </div>
                <Link to={`/job/${id}`}>
                    <button className='text-center rounded-lg bg-emerald-300 text-white px-4 py-2 mt-6 mb-4 mr-4 hover:bg-emerald-400'>
                        view Details
                    </button>
                </Link>


            </div>
        </section>
    );
};

export default AppliedJob;