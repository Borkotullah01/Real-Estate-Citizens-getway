import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ data }) => {
    const {
        id,
        estate_title,
        image,
        segment_name,
        description,
        price,
        area,
        location,
        facilities,
        status,
        button_text,
    } = data;

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="card bg-gradient-to-tl from-[#f6f3f31a] to-[#ffffff] shadow-xl border-[1px] border-[#fce0b0] hover:border-primary"
        >
            <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
                <img
                    src={image}
                    alt="Estate"
                    className="rounded-xl w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                />
            </figure>
            <div className="card-body px-4 pb-4 sm:px-6 sm:pb-6">
                <h2 className="card-title text-lg sm:text-xl md:text-2xl font-cinzel text-accent-dark">
                    {estate_title}
                </h2>
                <p className="font-poppins text-xs sm:text-sm">
                    Segment Type:{" "}
                    <span className="bg-[#cafbc264] font-extralight rounded-lg py-1 px-2 sm:px-3">
                        {segment_name}
                    </span>
                </p>
                <hr />
                <div className="flex w-full justify-between text-xs sm:text-sm">
                    <p className="font-poppins">
                        Status: <span className="font-extralight">{status}</span>
                    </p>
                    <p className="font-poppins text-end">
                        Location: <span className="font-extralight">{location}</span>
                    </p>
                </div>
                <hr />
                <p className="font-poppins text-xs sm:text-sm">
                    Facilities:{" "}
                    <span className="bg-[#f1d1504e] font-extralight rounded-lg py-1 px-2 sm:px-3">
                        {facilities[0]}
                    </span>{" "}
                    <span className="bg-[#1278cb3a] font-extralight rounded-lg py-1 px-2 sm:px-3">
                        {facilities[1]}
                    </span>
                </p>
                <hr />
                <div className="mt-4 sm:mt-6 card-actions justify-between">
                    <span className="px-3 sm:px-4 py-2 rounded-md bg-accent-light text-primary text-xs sm:text-sm">
                        {price}
                    </span>
                    <Link
                        to={`/details/${id}`}
                        className="px-3 sm:px-4 py-2 rounded-md text-white bg-primary text-xs sm:text-sm"
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
