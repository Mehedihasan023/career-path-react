/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { getAppliedJobs } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {

        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                const appliedJobsData = getAppliedJobs();
                let jobList = [];

                for (const id in appliedJobsData) {
                    const findData = data.find(job => job.id == id)
                    if (findData) {
                        jobList.push(findData)
                    }
                    else {
                        console.log('data not found')
                    }
                }
                setAppliedJobs(jobList);
            })
    }, [])

    return (
        <section className=''>
            <div className='flex justify-center items-center h-72 job-details'>
                <h1 className='text-5xl font-semibold '>Applied Jobs </h1>
            </div>


            <div>
                {
                    appliedJobs.length === 0 ? (
                        <h1 className='mt-20 text-3xl font-semibold flex justify-center items-center'>No Applied Jobs. Please Apply for your prefered jobs</h1>
                    ) : (

                        <div>
                            {
                                appliedJobs.map(jobs => <AppliedJob
                                    key={jobs.id}
                                    jobs={jobs}
                                ></AppliedJob>)
                            }


                        </div>

                    )
                }
            </div>


        </section>
    );
};

export default AppliedJobs;