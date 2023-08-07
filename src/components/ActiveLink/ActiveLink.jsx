/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './ActiveLink.css';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active" : "in-active"}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;