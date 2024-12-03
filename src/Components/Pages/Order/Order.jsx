import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import storeImage from "./../../../../public/storeImage.jpg";
import {Helmet} from "react-helmet";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
    <div className='overflow-hidden'>
    <Helmet>
        <meta charSet="utf-8" />
        <title>My Order List</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div data-aos="zoom-in" data-aos-duration="1000" className='flex justify-center items-center w-full h-[300px] bg-cover bg-center' style={{backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.80), rgba(0,0,0,0.70)), url(${storeImage})`}}>
         <h1 data-aos="fade-down" data-aos-duration="1000" className='text-primary font-semibold text-2xl md:text-5xl lg:text-7xl font-cinzel'>your cart list</h1>   
    </div>
    <div className="max-w-7xl mx-auto">
        <div data-aos="fade-down" data-aos-anchor-placement="top-center" data-aos-duration="1000" role="tablist" className="tabs font-poppins text-base md:text-xl lg:text-2xl font-medium tabs-lifted mt-10">
          <Link to={''} onClick={()=>setTabIndex(0)} role="tab" className={`tab tab-border-2 w-24 md:w-32 lg:w-40 ${tabIndex == 0 ? 'tab-active': "tab"}`}>Rent</Link>
          <Link to={'buy'} onClick={()=>setTabIndex(1)} role="tab" className={`tab tab-border-2 w-24 md:w-32 lg:w-40 ${tabIndex == 1 ? 'tab-active': "tab"}`}>Buy</Link>
          <a role="tab" className='tab tab-border-2'></a>
        </div>
        <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="my-10">
            <Outlet></Outlet>
        </div>
    </div>
    </div>
    );
};

export default Order;