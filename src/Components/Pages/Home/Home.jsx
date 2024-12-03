import React from 'react';
import Slider from './Slider';
import Services from './Services-section/Services';
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home || Citizen's Getway</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;