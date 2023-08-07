/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MapPinIcon,CurrencyDollarIcon,EnvelopeIcon,PhoneIcon,CalendarDaysIcon} from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import {toast} from 'react-hot-toast';

const JobDetails = () => {

    const [viewDetails, setViewDetails] = useState({});
    const detailId = useParams();
    useEffect(() => {
        fetch('../../../public/jobs.json')
            .then(res => res.json())
            .then(data => {
                const findJobs = data.find(job => job.id === parseInt(detailId.id))

                if (findJobs) {
                    setViewDetails(findJobs);
                }
                else {
                    console.log('Data not found')
                }
            })
    }, []);

    const handleApplyJobs = (id) => {
        addToDb(id);
     
        toast.success('Applied Successfully!!!');
    }

    return (
        <section className=''>
            <div className='flex justify-center items-center h-72 job-details'>
                <h1 className='text-5xl font-semibold '>Job Details </h1>
            </div>

            <div className='grid md:grid-cols-3 max-width'>
                <div className='job-info mt-32 md:col-span-2'>
                    <p className='mb-6'><span className='text-xl font-semibold'>Job Description: </span>{viewDetails?.job_description} </p>
                    <p className='mb-6'><span className='text-xl font-semibold'>Job Responsibility: </span>{viewDetails?.job_responsibility} </p>

                    <p className='mb-4'><span className='text-xl font-semibold'>Educational Requirments: </span></p>
                    <p className='mb-4'>{viewDetails?.educational_requirements}</p>
                    <p className='mb-4'><span className='text-xl font-semibold'>Experiences: </span></p>
                    <p>{viewDetails?.experiences}</p>
                </div>

                <div className='mt-32 px-4'>
                    <div className='bg-sky-100 px-4 rounded-xl'>
                        <h2 className='font-semibold text-2xl py-4'>Job Details</h2>
                        <hr className='hr-underline'></hr>
                        <p className='mt-3 text-gray-600 flex flex-row items-center text-xl'><span className='font-semibold text-xl text-cyan-700 flex flex-row items-center mr-1'>
                        <CurrencyDollarIcon className="h-6 w-6 mr-1 text-blue-500"/>Salary: </span> {viewDetails?.salary}</p>
                        <p className='mt-3 text-gray-600 flex flex-row items-center text-xl'><span className='font-semibold text-xl text-cyan-700 flex flex-row items-center mr-1'>
                        <CalendarDaysIcon className="h-6 w-6 mr-1 text-blue-500"/>Job Title: </span> {viewDetails?.job_title}</p>
                        <h2 className='font-semibold text-2xl py-2'>Contact Inforamtion</h2>
                        <hr className='hr-underline'></hr>
                        <p className='mt-3 text-gray-600 flex flex-row items-center text-xl'><span className='font-semibold text-xl text-cyan-700 flex flex-row items-center mr-1'>
                        <PhoneIcon className="h-6 w-6 mr-1 text-blue-500"/>Phone: </span> {viewDetails?.phone}</p>
                        <p className='mt-3 text-gray-600 flex flex-row items-center text-xl'><span className='font-semibold text-xl text-cyan-700 flex flex-row items-center mr-1'>
                        <EnvelopeIcon className="h-6 w-6 mr-1 text-blue-500"/>Email: </span> {viewDetails?.email}</p>
                        <p className='mt-3 text-gray-600 flex flex-row items-center text-xl pb-2'><span className='font-semibold text-xl text-cyan-700 flex flex-row items-center mr-1'>
                        <MapPinIcon className="h-6 w-6 mr-1 text-blue-500"/>Address: </span> {viewDetails?.location}</p>
                    </div>

                    <button  onClick={() =>handleApplyJobs(viewDetails.id)} className='text-center rounded-lg bg-emerald-300 text-white px-4 py-2 mt-6 mb-4 hover:bg-emerald-400 w-full'>
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;