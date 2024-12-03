import React, { useState, useEffect, useMemo } from "react";
import { getStoredIds } from "../../../Routes/utils/LocalStorage/LocalStorage";
import UseFetchData from "../../../Routes/utils/FetchData/UseFetchData";
import { Link } from "react-router-dom";

const Rent = () => {
  const rentIds = useMemo(() => getStoredIds(), []); // Memoize rentIds to prevent re-computation
  const allData = UseFetchData(
    "https://raw.githubusercontent.com/Borkotullah01/My-all-api/refs/heads/main/rs-api.json"
  );
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Check if data is valid and avoid unnecessary updates
    if (Array.isArray(allData) && allData.length > 0) {
      const result = allData.filter(
        (item) =>
          rentIds.includes(item.id.toString()) &&
          (item.button_text === "Add to Rent" || item.button_text === "Add to Enroll")
      );
      setFilteredData(result);
    }
  }, [allData, rentIds]); // Only re-run when `allData` or `rentIds` change

  return (
    <div>
      {filteredData.length > 0 ? (
        <div className="my-4 md:my-10 lg:my-12">
          <div className="overflow-x-auto">
            <table className="table table-auto w-full">
              {/* Table Head */}
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-sm md:text-lg lg:text-xl">SL</th>
                  <th className="text-sm md:text-lg lg:text-xl">Estate Name</th>
                  <th className="hidden md:table-cell text-sm md:text-lg lg:text-xl">
                    Facilities
                  </th>
                  <th className="text-sm md:text-lg lg:text-xl">View</th>
                </tr>
              </thead>
              {filteredData.map((item, index) => (
                <tbody key={item.id}>
                  <tr className="border-t">
                    <th>
                      <label className="text-sm md:text-lg lg:text-xl">
                        {index + 1}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3 md:gap-6">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
                            <img
                              src={item.image}
                              alt="Estate"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-sm md:text-lg lg:text-xl">
                            {item.estate_title}
                          </div>
                          <div className="text-xs opacity-50 md:text-base lg:text-lg">
                            {item.location}
                          </div>
                          <div className="text-xs opacity-50 md:text-base lg:text-lg">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="hidden md:table-cell">
                      <span className="block text-sm md:text-lg lg:text-xl">
                        {item.segment_name}
                      </span>
                      <span className="badge badge-ghost badge-sm md:badge-md gap-1 flex flex-wrap">
                        {item.facilities.map((facility, idx) => (
                          <span
                            key={idx}
                            className="badge badge-ghost badge-sm"
                          >
                            # {facility}
                          </span>
                        ))}
                      </span>
                    </td>
                    <td>
                      <Link
                        to={`/details/${item.id}`}
                        className="btn btn-sm bg-primary text-white text-xs md:text-base lg:text-lg px-3 md:px-6"
                      >
                        See Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
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

export default Rent;
