/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className='header-container md:flex md:justify-around md:items-center'>
            <div>
                <h2 className='career-path'> CareerPath</h2>
            </div>
            <div >
                <div onClick={() => setOpen(!open)} className=' md:hidden'>
                    <span>
                        {
                            open === true ?
                                <XMarkIcon className="h-6 w-6 text-blue-500" /> :
                                <Bars3Icon className="h-6 w-6 text-blue-500" />
                        }
                    </span>
                </div>
                <div className={`md:block sm:hidden ${open ? 'block ' : 'hidden'}`}>
                    <ActiveLink className='link-style' to='/'>Home</ActiveLink>
                    <ActiveLink className='link-style' to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink className='link-style' to='/applied'>Applied Jobs</ActiveLink>
                </div>
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