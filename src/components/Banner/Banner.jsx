/* eslint-disable no-unused-vars */
import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <section className='banner-container'>
            <div className="top-banner md:flex md:justify-between">
                <div className='banner-left-side pl-12'>
                    <h1 className='banner-title text-6xl font-bold'>One Step <br />
                        Closer To Your <br />
                        <span className="dream-job text-6xl font-bold">Dream Job</span>
                    </h1>
                    <p className='banner-text text-sm'>Explore thousands of job opportunities with all the <br />
                        information you need. Its your future. Come find it. Manage all <br />
                        your job application from start to finish.</p>

                    <button className='btn-get-started'><span className='btn-get-started-text'>Get Started</span></button>

                </div>
                <div className='banner-logo'>
                 <img src="../../../images/banner-logo.png" alt="" />
             </div>
            </div>
           

        </section>
    );
};

export default Banner;