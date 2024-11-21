import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceCard = ({data}) => {
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
        button_text} = data;
    console.log(data);
    return (
        <div className="card bg-gradient-to-tl from-[#f6f3f31a] to-[#ffffff] shadow-xl border-[1px] border-[#fce0b0] hover:border-primary">
          <figure className="px-6 pt-6">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl w-full h-[300px] md:h-[200px]" />
          </figure>
          <div className="card-body px-6 pb-6">
            <h2 className="card-title text-2xl font-cinzel text-accent-dark">{estate_title}</h2>
            <p className='font-poppins text-sm'>Segment Type: <span className='bg-[#cafbc264] font-extralight rounded-lg py-1 px-3'>{segment_name}</span></p>
            <hr />
            <div className="flex w-full justify-between">
            <p className='font-poppins text-sm'>Status: <span className='font-extralight'>{status}</span></p>
            <p className='font-poppins text-sm text-end'>Location: <span className='font-extralight'>{location}</span></p>
            </div>
            <hr />
            <p className='font-poppins text-sm'>Facilities: <span className='bg-[#f1d1504e] font-extralight rounded-lg py-1 px-3'>{facilities[0]}</span> <span className='bg-[#1278cb3a] font-extralight rounded-lg py-1 px-3'>{facilities[1]}</span></p>
            <hr />
            <div className="mt-6 card-actions justify-between">
              <span className="px-4 py-2 rounded-md bg-accent-light text-primary">{price}</span>
              <Link to={`/details/${id}`} className="px-4 py-2 rounded-md text-white bg-primary">See Details</Link>
            </div>
          </div>
        </div>
    );
};

export default ServiceCard;