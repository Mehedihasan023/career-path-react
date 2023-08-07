/* eslint-disable no-unused-vars */
import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <section className='banner-container'>
            <div className="top-banner">
                <div className='banner-left-side'>
                    <h1 className='banner-title'>One Step <br />
                        Closer To Your <br />
                        <span className="dream-job">Dream Job</span>
                    </h1>
                    <p className='banner-text'>Explore thousands of job opportunities with all the <br />
                        information you need. Its your future. Come find it. Manage all <br />
                        your job application from start to finish.</p>

                    <button className='btn-get-started'><span className='btn-get-started-text'>Get Started</span></button>

                </div>
            </div>


            {/* <div className='banner-logo'>
                 <img src="" alt="" />
             </div> */}

        </section>
    );
};

export default Banner;