import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import storeImage from "./../../../../public/storeImage.jpg"

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
    <>
    <div className='flex justify-center items-center w-full h-[300px] bg-cover bg-center' style={{backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.80), rgba(0,0,0,0.70)), url(${storeImage})`}}>
         <h1 className='text-primary font-semibold text-7xl font-cinzel'>your cart list</h1>   
    </div>
    <div className="max-w-7xl mx-auto">
        <div role="tablist" className="tabs font-poppins text-2xl font-medium tabs-lifted mt-10">
          <Link to={''} onClick={()=>setTabIndex(0)} role="tab" className={`tab tab-border-2 w-40 ${tabIndex == 0 ? 'tab-active': "tab"}`}>Rent</Link>
          <Link to={'buy'} onClick={()=>setTabIndex(1)} role="tab" className={`tab tab-border-2 w-40 ${tabIndex == 1 ? 'tab-active': "tab"}`}>Buy</Link>
          <a role="tab" className='tab tab-border-2'></a>
        </div>
        <div className="my-10">
            <Outlet></Outlet>
        </div>
    </div>
    </>
    );
};

export default Order;