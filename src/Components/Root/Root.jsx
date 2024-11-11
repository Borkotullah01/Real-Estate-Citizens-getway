import React from 'react';
import Navbar from '../Reusable/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <div className="w-full fixed bg-[#7f22f9e4] h-[72px] z-40"></div>
            <div className="w-full h-[72px] z-40"></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;