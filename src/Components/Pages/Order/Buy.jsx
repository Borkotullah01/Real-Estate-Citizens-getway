import React, { useState, useEffect, useMemo } from "react";
import { getStoredIds } from "../../../Routes/utils/LocalStorage/LocalStorage";
import UseFetchData from "../../../Routes/utils/FetchData/UseFetchData";
import { Link } from "react-router-dom";

const Buy = () => {
      // Assuming getStoredIds returns stable data
        const rentIds = useMemo(() => getStoredIds(), []); // Memoize rentIds to prevent re-computation
        const allData = UseFetchData(
          "https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json"
        );
        const [filteredData, setFilteredData] = useState([]);
    
        useEffect(() => {
          // Check if data is valid and avoid unnecessary updates
          if (Array.isArray(allData) && allData.length > 0) {
            const result = allData.filter(
              (item) => rentIds.includes(item.id.toString()) && item.button_text === "Add to Buy" || item.button_text === "Add to Enroll"
            );
            setFilteredData(result);
          }
        }, [allData, rentIds]); // Only re-run when `allData` or `rentIds` change
    return (
    <div>
      {filteredData.length > 0 ? (
        <div>
            <div className="my-4">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          SL
                        </label>
                      </th>
                      <th>Estate Name</th>
                      <th>Facilities</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  {filteredData.map((item, index) => (
                    <tbody>
                    <tr>
                      <th>
                        <label>
                          {index + 1}
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-16 w-16">
                              <img
                                src={item.image}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.estate_title}</div>
                            <div className="text-sm opacity-50">{item.location}</div>
                            <div className="text-sm opacity-50">{item.price}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {item.segment_name}
                        <br />
                        <span className="badge badge-ghost badge-sm gap-2">{item.facilities.map(item=><span># {item}</span>)}</span>
                      </td>
                      <td><Link to={`/details/${item.id}`} className="btn btn-sm bg-primary text-white">See Details</Link></td>
                    </tr>
                  </tbody>
                  ))}
                </table>
              </div>
            </div>
        </div>
      ) : (
        <div className="grid justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
      )}
    </div>
    );
};

export default Buy;