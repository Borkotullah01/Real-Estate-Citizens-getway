import { useParams } from "react-router-dom";
import UseFetchData from "../../../Routes/utils/FetchData/UseFetchData";
import { useEffect, useState } from "react";

const Details = () => {
    const {id} = useParams();
    const [matchData, setmatchData] = useState([]);
    const {allData} = UseFetchData('https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json')
    useEffect(()=>{
        matchData = allData?.find(data.id==id) || [];
        setmatchData(matchData)
        
    },[allData])
    
    return (
        <div>
            hello
        </div>
    );
};

export default Details;