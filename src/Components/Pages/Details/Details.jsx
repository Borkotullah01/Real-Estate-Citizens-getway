import { useParams } from "react-router-dom";
import UseFetchData from "../../../Routes/utils/FetchData/UseFetchData";
import { useEffect, useState } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { TiLocationOutline } from "react-icons/ti";
import { GrStatusGood } from "react-icons/gr";

const Details = () => {
    const { id } = useParams();
    const [matchData, setMatchData] = useState(null);
    const { allData } = UseFetchData('https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json');
    console.log('matchData',matchData);
    useEffect(() => {
        // Check if allData exists and find the item with matching id
        const foundData = allData?.find(data => data.id === parseInt(id))
        setMatchData(foundData || []) // set found data or empty array
    }, [allData, id]);
    
    return (
        <>
         {
  matchData ? (
    <div className="font-poppins grid grid-cols-2 my-5 max-w-screen-xl mx-auto justify-center">
      <div className="card-body pl-0 mt-5">
        <img src={matchData.image} alt="" className="rounded-lg" />
      </div>
      <div className="border space-y-2 rounded-lg mt-5 card-body">
        <h1 className="font-cinzel text-5xl font-bold text-primary">{matchData.estate_title}</h1>
        <h1 className="text-xl font-semibold">Segment Name: {matchData.segment_name}</h1>
        <div className="flex">
          <p className="flex gap-2 items-center text-primary font-semibold"><span className="text-2xl"><GiMoneyStack /></span>{matchData.price}</p>
          <p className="flex gap-2 items-center text-primary font-semibold"><span className="text-2xl"><TiLocationOutline /></span>{matchData.location}</p>
          <p className="flex gap-2 items-center text-primary font-semibold"><span className="text-2xl"><GrStatusGood /></span>{matchData.status}</p>
        </div>
        <div className="">
        <h1 className="text-xl font-bold">Description: </h1>
        <h1 className="text-justify">{matchData.description}</h1>
        </div>
        <hr />
        <h1 className="flex text-lg font-semibold items-center gap-4">
          Facilities:
          <div className="flex w-full gap-4 justify-between">
            {matchData.facilities?.map((facility, index) => (
              <h1 className="text-primary px-4 py-2 bg-accent-light rounded-full" key={index}># {facility}</h1>
            ))}
          </div>
        </h1>
        <div className="flex pt-4 justify-end">
            <button className="btn">{matchData.button_text}</button>
            </div>
      </div>
    </div>
  ) : (
    <div className="grid justify-center">
      <span className="loading loading-bars w-24 mt-20"></span>
    </div>
  )
}
        </>
    );
};

export default Details;