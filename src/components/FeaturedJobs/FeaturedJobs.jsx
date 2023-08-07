/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  //  at first show only four data 
  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => {
        if (showAllJobs) {
          setJobs(data);
        } else {
          setJobs(data.slice(0, 4));
        }
      });
  }, [showAllJobs]);
  // show full data on button click
  const handleSeeAllJobs = () => {
    setShowAllJobs(true);
  };

  const handleSeeLessJobs = () => {
    setShowAllJobs(false);
  };
 

  return (
      <section className='max-width'>
        <h1 className='mt-32 text-center text-5xl font-semibold mb-4'>Featured Jobs</h1>
        <p className='text-center text-base text-gray-400 mb-7'>Explore thousands of job opportunities with all the information you need.Its your future</p>
        <div className='grid md:grid-cols-2'>
          {jobs.map(job => (
            <FeaturedJob
              key={job.id}
              job={job}>
            </FeaturedJob>
          ))}
        </div>
        {showAllJobs ? (
          <div className='flex justify-center'>
            <button onClick={handleSeeLessJobs} className='text-center ml-10 rounded-lg bg-red-300 text-white px-4 py-2 mt-6 mb-4 hover:bg-red-400'>
              Show Less
            </button>
          </div>
        ) : (
          <div className='flex justify-center'>
            <button onClick={handleSeeAllJobs} className='text-center ml-10 rounded-lg bg-emerald-300 text-white px-4 py-2 mt-6 mb-4 hover:bg-emerald-400'>
              Show All Jobs
            </button>
          </div>
        )}
      </section>
  );
};

export default FeaturedJobs;