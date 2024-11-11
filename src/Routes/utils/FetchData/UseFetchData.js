import React, { useEffect, useState } from 'react';

const UseFetchData = (url) => {
    const [allData, setAllData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[allData])
    return {allData}
};

export default UseFetchData;