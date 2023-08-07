/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import FeaturedJob from '../FeaturedJob/FeaturedJob';
const FeaturedJobs = () => {
  const [jobs, setJobs]=useState([]);


  useEffect(()=>{
     fetch('featured-jobs.json')
     .then(res=> res.json())
     .then(data=> setJobs(data))

  },[]);
  // const showLess = jobs.slice(0,4);
  // setJobs(showLess);
 const handleSeeAllJobs  =()=>{


 }
 
    return (
        <div>
            <h1 className='mt-32 text-center text-5xl font-semibold mb-4'>Featured Jobs</h1>
            <p className='text-center text-base text-gray-400 mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2'>
                 {
                   jobs.map(job=> <FeaturedJob
                    key={job.id}
                    job={job}
                   ></FeaturedJob>)
                 }
            </div>
            <div className='flex justify-center'> 
            <button onClick={()=>handleSeeAllJobs()} className='text-center ml-10 rounded-lg bg-emerald-300 text-white px-4 py-2 mt-6 mb-4 hover:bg-emerald-400'>See All Jobs</button>
            </div>
           
        </div>
    );
};

export default FeaturedJobs;