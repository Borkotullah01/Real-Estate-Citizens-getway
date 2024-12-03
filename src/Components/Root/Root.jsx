import React from 'react';
import Navbar from '../Reusable/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Reusable/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className='mx-auto overflow-hidden'>
            <Navbar></Navbar>
            <div className="w-full fixed bg-[#7f22f9e4] h-[72px] z-40"></div>
            <div className="w-full h-[72px] z-40"></div>   
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer
                position='top-center'
             />
        </div>
    );
};

export default Root;