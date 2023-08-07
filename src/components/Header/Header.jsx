/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <section className='header-container md:flex md:justify-around md:items-center'>
            <div>
                <h2 className='career-path'> CareerPath</h2>
            </div>
            <div>
                <Link className='link-style' to='/'>Home</Link>
                <Link className='link-style' to='/statistics'>Statistics</Link>
                <Link className='link-style' to='/applied'>Applied Jobs</Link>
            </div>
            <div>
                <button className='btn-applying'><span className='btn-applying-text'>Start Applying</span></button>
            </div>

        </section>


    );
};

export default Header;