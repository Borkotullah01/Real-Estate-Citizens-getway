import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import UseFetchData from '../../../../Routes/utils/FetchData/UseFetchData';

const Services = () => {
    const [data, setData] = useState([]);
    console.log("data", data);
    useEffect(()=>{
        const {alldata} = UseFetchData('https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json')
        setData(alldata)
    },[])
    return (
        <div className='mt-20 max-w-7xl mx-auto'>
            <h1 className='uppercase text-center text-6xl font-cinzel font-bold'>our best services</h1>
            <div className="grid gap-8 mt-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.slice(0,12).map(dt=><ServiceCard key={dt.id} data={dt}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;