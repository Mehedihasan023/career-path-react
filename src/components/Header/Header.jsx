/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'
const Header = () => {
    return (
        <section className='header-container md:flex md:justify-around md:items-center'>
            <div>
                <h2 className='career-path'> CareerPath</h2>
            </div>
            <div>
                <ActiveLink className='link-style' to='/'>Home</ActiveLink>
                <ActiveLink className='link-style' to='/statistics'>Statistics</ActiveLink>
                <ActiveLink className='link-style' to='/applied'>Applied Jobs</ActiveLink>
            </div>
            <div>
                <Link to='/featuredJobs'>
                <button className='btn-applying'><span className='btn-applying-text'>Start Applying</span></button>
                </Link>
               
            </div>

        </section>


    );
};

export default Header;