import { Link, useParams } from "react-router-dom";
import UseFetchData from "../../../Routes/utils/FetchData/UseFetchData";
import { useEffect, useState } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { TiLocationOutline } from "react-icons/ti";
import { GrStatusGood } from "react-icons/gr";
import { getStoredIds ,saveIds } from "../../../Routes/utils/LocalStorage/LocalStorage";
import {Helmet} from "react-helmet";

const Details = () => {
    const { id } = useParams();
    const [matchData, setMatchData] = useState(null);
    const allData = UseFetchData('https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json');
    // console.log('matchData', matchData);
    const curt = getStoredIds();
    useEffect(() => {
        const foundData = allData?.find(data => data.id === parseInt(id));
        setMatchData(foundData || []);
        const localMatch = curt?.find(data=> data === id);
        // console.log("localStored",localMatch);
    }, [allData, id]);

    return (
        <>
            {matchData ? (
                <div className="font-poppins grid gap-0 md:gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 my-5 max-w-screen-xl mx-auto justify-center">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Details page of id {id}</title>
                        <link rel="canonical" href="http://mysite.com/example" />
                    </Helmet>
                    <div className="card-body p-1 lg:pl-0 mt-5">
                        <img src={matchData.image} alt="" className="rounded-lg w-full" />
                    </div>
                    <div className="border space-y-2 rounded-lg mt-5 card-body p-4 sm:p-6 lg:p-8">
                        <h1 className="font-cinzel text-xl md:text-2xl lg:text-5xl font-bold text-primary">{matchData.estate_title}</h1>
                        <h1 className="text-sm md:text-lg font-semibold">{matchData.segment_name}</h1>
                        <div className="flex flex-wrap gap-4 sm:gap-2">
                            <p className="flex gap-2 items-center text-primary font-semibold text-sm md:text-base">
                                <span className="text-2xl"><GiMoneyStack /></span>{matchData.price}
                            </p>
                            <p className="flex gap-2 items-center text-primary font-semibold text-sm md:text-base">
                                <span className="text-2xl"><TiLocationOutline /></span>{matchData.location}
                            </p>
                            <p className="flex gap-2 items-center text-primary font-semibold text-sm md:text-base">
                                <span className="text-2xl"><GrStatusGood /></span>{matchData.status}
                            </p>
                        </div>
                        <div className="">
                            <h1 className="text-base md:text-xl font-bold">Description:</h1>
                            <h1 className="text-justify text-xs md:text-base">{matchData.description}</h1>
                        </div>
                        <hr />
                        <h1 className="flex flex-col md:flex-row text-lg sm:text-base font-semibold  gap-4">
                            Facilities:
                            <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-1 md:justify-start lg:justify-between flex-wrap">
                                {matchData.facilities?.map((facility, index) => (
                                    <h1 className="text-primary px-2 lg:px-4 py-1 lg:py-2 bg-accent-light rounded-full text-sm sm:text-xs" key={index}># {facility}</h1>
                                ))}
                            </div>
                        </h1>
                        <div className="flex pt-4 justify-end">
                            <Link onClick={() => {saveIds(id)}} className="btn btn-outline border-primary text-primary rounded-full hover:bg-primary text-sm sm:text-xs">
                                {matchData.button_text}
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid justify-center">
                    <span className="loading loading-bars w-24 mt-20"></span>
                </div>
            )}
        </>
    );
};

export default Details;
