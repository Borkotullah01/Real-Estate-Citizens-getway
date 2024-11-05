import React from 'react';
import { ReactTyped } from "react-typed";
import './Typed.css';

const Typed = ({ strings, typeSpeed = 50, backSpeed = 50, loop = true, className = '' }) => {
    return (
    <div className='text-3xl text-white font-semibold uppercase tracking-[8px] font-bebas'>
        <ReactTyped
          strings={strings}
          typeSpeed={typeSpeed}
          backSpeed={backSpeed}
          className={className}
          loop={loop}
        >
          
        </ReactTyped>
    </div>
    );
};

export default Typed;