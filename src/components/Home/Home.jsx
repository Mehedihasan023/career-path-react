/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;