import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseFetchData from '../../../Routes/utils/FetchData/UseFetchData';

const Details = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    const {alldata} = UseFetchData('https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json') || [];

    useEffect(()=>{
        const matchData = alldata?.find(dt=>dt.id === parseInt(id)) || [];
        setData(matchData);
    },[alldata]);
    
    const {
        estate_title, 
        image, 
        segment_name, 
        description, 
        price, 
        area, 
        location, 
        facilities, 
        status, 
        button_text
    } = data
    
    
    return (
        <div>
        <h1>{estate_title}</h1>
        </div>
    );
};

export default Details;