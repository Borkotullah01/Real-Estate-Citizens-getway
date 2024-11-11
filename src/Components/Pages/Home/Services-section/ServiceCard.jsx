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
        <div className="card bg-base-100 shadow-xl border-[1px] border-white hover:border-primary">
          <figure className="px-6 pt-6">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl w-full h-[300px] md:h-[200px]" />
          </figure>
          <div className="card-body px-6">
            <h2 className="card-title text-2xl font-cinzel">{estate_title}</h2>
            <p className='font-poppins text-sm'>Segment Type: <span className='bg-[#12CBC4] font-extralight rounded-lg py-1 px-3'>{segment_name}</span></p>
            <hr />
            <div className="flex justify-between">
            <p className='font-poppins text-sm'>Status: <span className='font-extralight'>{status}</span></p>
            <p className='font-poppins text-sm'>Location: <span className='font-extralight'>{location}</span></p>
            </div>
            <hr />
            <p className='font-poppins text-sm'>Facilities: <span className='bg-[#12CBC4] font-extralight rounded-lg py-1 px-3'>{facilities[0]}</span></p>
            <hr />
            <div className="card-actions">
              <Link to={`/details/${id}`} className="btn btn-primary">{button_text}</Link>
            </div>
          </div>
        </div>
    );
};

export default ServiceCard;