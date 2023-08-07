/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const [viewDetails, setViewDetails] =useState({});
    const detailId= useParams();
     useEffect(()=>{
      fetch('../../../public/jobs.json')
      .then(res=> res.json())
      .then(data=>{
       const findJobs= data.find(job=> job.id === parseInt(detailId.id))
         
       if(findJobs){
        setViewDetails(findJobs);
       }
       else{
        console.log('Data not found')
       }
      })
     },[detailId]);

console.log(viewDetails)
    return (
        <div>
            <div className='flex justify-center items-center h-72 job-details'>
                <h1 className='text-5xl font-semibold '>Job Details </h1>
            </div>

            <div className='grid grid-cols-3'>
                  <div className='job-info mt-32 col-span-2'>
                   <p className='mb-6'><span className='text-xl font-semibold'>Job Description: </span>{viewDetails?.job_description} </p>
                   <p className='mb-6'><span className='text-xl font-semibold'>Job Responsibility: </span>{viewDetails?.job_responsibility} </p>
                   
                   <p className='mb-4'><span className='text-xl font-semibold'>Educational Requirments: </span></p>
                   <p className='mb-4'>{viewDetails?.educational_requirements}</p>
                   <p className='mb-4'><span className='text-xl font-semibold'>Experiences: </span></p>
                   <p>{viewDetails?.experiences}</p>
                  </div>

              <div className='mt-32 px-4'>
                <h2>Job Details</h2>
                <hr></hr>
                 <p><span>Salary:</span>{viewDetails?.salary}</p>
                 <p><span>Job Title:</span>{viewDetails?.job_title}</p>
                <h2>Contact Inforamtion</h2>
                <hr></hr>
                <p><span>Phone: </span>{viewDetails?.phone}</p>
                <p><span>Email: </span>{viewDetails?.email}</p>
                <p><span>Address:</span>{viewDetails?.location}</p>

                <button className='text-center rounded-lg bg-emerald-300 text-white px-4 py-2 mt-6 mb-4 hover:bg-emerald-400 w-11/12'>
                    Apply Now
                </button>
              </div>
            </div>
        </div>
    );
};

export default JobDetails;