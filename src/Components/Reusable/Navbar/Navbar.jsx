import React from 'react';
import logoT from './../../../assets/Logo-Real-Black.png';
import { NavLink } from 'react-router-dom';
import Typed from '../Typed/Typed';

const Navbar = () => {

  const navLinks = <>
  <li><NavLink to={'/'}>Home</NavLink></li>
  <li><NavLink to={'/order'}>Order</NavLink></li>
  <li><NavLink to={'/user-profile'}>User Profile</NavLink></li>
  <li><NavLink to={'/support'}>Support</NavLink></li>
  <li><NavLink to={'/contact'}>Contact</NavLink></li>
  </>

    return (
      <div className="w-full flex justify-center">
        <div className="navbar px-0 max-w-7xl fixed z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu gap-1 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navLinks}
              </ul>
            </div>
            <a className="mr-4 text-xl text-white">
            <img className='w-11 h-11 rounded-full' src={logoT} alt="" />
            </a>
            <Typed strings={['Citizens', 'Gateway']}></Typed>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-1 menu-horizontal px-1 text-base text-white">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-accent hover:bg-accent-dark text-base text-white">Login</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;