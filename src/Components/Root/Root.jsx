import React from 'react';
import Navbar from '../Reusable/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <div className="h-[64px] lg:h-[70px]"></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;