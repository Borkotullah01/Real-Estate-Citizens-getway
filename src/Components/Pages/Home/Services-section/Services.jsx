import React, { useContext, useEffect, useState } from 'react';
import UseFetchData from '../../../../Routes/utils/FetchData/UseFetchData';
import ServiceCard from './ServiceCard';

const Services = () => {
    const allData = UseFetchData('https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json');
    return (
        <div className='mt-24 max-w-7xl mx-auto'>
            <h1 
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease"
            className='uppercase text-primary text-center text-2xl md:text-4xl lg:text-6xl font-cinzel font-bold'>
                our best services
            </h1>
            <div className="grid gap-8 my-16 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allData.slice(0,12).map(data=><ServiceCard key={data.id} data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;