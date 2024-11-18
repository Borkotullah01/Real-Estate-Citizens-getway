import React, { useContext, useEffect, useState } from 'react';
import UseFetchData from '../../../../Routes/utils/FetchData/UseFetchData';
import ServiceCard from './ServiceCard';

const Services = () => {
    const {allData} = UseFetchData('https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json');
    return (
        <div className='mt-20 max-w-7xl mx-auto'>
            <h1 className='uppercase text-center text-6xl font-cinzel font-bold'>our best services</h1>
            <div className="grid gap-8 my-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allData.slice(0,12).map(data=><ServiceCard key={data.id} data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;