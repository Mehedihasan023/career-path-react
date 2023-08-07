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

  },[])


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
        </div>
    );
};

export default FeaturedJobs;