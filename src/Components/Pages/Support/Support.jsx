import React from 'react';
import supportImage from "./../../../../public/suspport.jpg";
import Typed from '../../Reusable/Typed/Typed';
// react leaflet map import
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Helmet} from "react-helmet";



const Support = () => {
    return (
        <div className='overflow-hidden px-1 md:px-0'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Citizen's || Support</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='flex justify-center items-center w-full bg-cover bg-no-repeat h-[320px] md:h-[400px] lg:h-[500px] bg-center' style={{backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.80), rgba(0,0,0,0.70)), url(${supportImage})`}} >
            <Typed className={`text-3xl md:text-6xl lg:text-7xl text-info`} strings={['Support Center', 'Now we are 24/7']}></Typed>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid my-20 gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-left" data-aos-duration="1000" className="grid gap-5 font-poppins p-9 rounded-xl bg-gradient-to-tl from-fuchsia-50 to-blue-50 justify-center items-center">
                        <h1 className='text-center text-xl md:text-2xl lg:text-3xl'>Get Answer</h1>
                        <p className='text-center text-xs md:text-sm lg:text-base'>Having issue? Handy tutorials to help you solve your issue.</p>
                        <div className="grid justify-center">
                            <button className='btn bg-primary text-white text-xs md:text-sm lg:text-base hover:bg-accent-dark'>View All</button>
                        </div>
                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1000" className="grid gap-5 font-poppins p-9 rounded-xl bg-gradient-to-tl from-fuchsia-50 to-blue-50  justify-center items-center">
                        <h1 className='text-center text-xl md:text-2xl lg:text-3xl'>Contact us</h1>
                        <p className='text-center text-xs md:text-sm lg:text-base'>If you have a big issue feel free to contact us. We try to solve it.</p>
                        <div className="grid justify-center">
                            <button className='btn bg-primary text-white text-xs md:text-sm lg:text-base hover:bg-accent-dark'>View All</button>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" className="grid gap-5 font-poppins p-9 rounded-xl bg-gradient-to-tl from-fuchsia-50 to-blue-50  justify-center items-center">
                        <h1 className='text-center text-xl md:text-2xl lg:text-3xl'>FAQ</h1>
                        <p className='text-center text-xs md:text-sm lg:text-base'>Quick answer to frequently ask questions about our services and products.</p>
                        <div className="grid justify-center">
                            <button className='btn bg-primary text-white text-xs md:text-sm lg:text-base hover:bg-accent-dark'>View All</button>
                        </div>
                    </div>
                </div>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='text-3xl md:text-4xl lg:text-5xl text-center font-poppins pt-5 pb-10'>Still can't find what you need?</h1>
                <div className="flex flex-col lg:flex-row gap-9 pb-10">
                    <div data-aos="fade-right" data-aos-duration="1000" className="w-full grid gap-5 mx-auto font-poppins p-4 md:p-6 lg:p-9 rounded-xl bg-gradient-to-tl from-fuchsia-50 to-blue-50  justify-center items-center">
                        <h1 className='text-center text-2xl lg:text-3xl'>Give Your FeedBack</h1>
                        <div className="w-full space-y-6 mt-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                <input className='outline-none text-xs md:text-sm lg:text-base bg-transparent border-b border-gray-600' placeholder='First Name' type="text" />
                                <input className='outline-none text-xs md:text-sm lg:text-base bg-transparent border-b border-gray-600' placeholder='Last Name' type="text" />
                            </div>
                            <input className='outline-none text-xs md:text-sm lg:text-base bg-transparent border-b border-gray-600 block' placeholder='Email' type="text" />
                            <input className='outline-none text-xs md:text-sm lg:text-base bg-transparent border-b border-gray-600 block' placeholder='Address' type="text" />
                            <textarea className='w-full outline-none text-xs md:text-sm lg:text-base bg-transparent border-b border-gray-600' placeholder='Write your message' name="" id=""></textarea>
                        </div>
                        <div className="grid justify-end">
                            <button className='btn bg-primary  text-white text-xs md:text-base hover:bg-accent-dark'>Submit</button>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="grid h-[450px] w-full gap-5 mx-auto font-poppins p-2 md:p-4 lg:p-9 rounded-xl bg-gradient-to-tl from-fuchsia-50 to-blue-50  justify-center items-center">
                        <div className="grid justify-center items-center overflow-hidden w-full h-[100%]">
                        <MapContainer
                          center={[23.908843, 89.121953]}
                          zoom={13}
                          scrollWheelZoom={false}
                          className='z-10 w-[320px] h-[320px] lg:w-[40vw] lg:h-[50vh]'
                        >
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={[23.908843, 89.121953]}>
                            <Popup>Hello I am here<br />My name is Jawad Bashar</Popup>
                          </Marker>
                        </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;