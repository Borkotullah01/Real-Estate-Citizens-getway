import React, { useContext } from 'react';
import logoT from './../../../assets/Logo-Real-Black.png';
import { Link, NavLink } from 'react-router-dom';
import Typed from '../Typed/Typed';
import { AuthContext } from '../../../Provider/FirebaseProvider/FirebaseProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const navLinks = <>
  <li><NavLink to={'/'}>Home</NavLink></li>
  {user && <li><NavLink to={'/order'}>Order</NavLink></li>}
  <li><NavLink to={'/user-profile'}>User Profile</NavLink></li>
  {user && <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>}
  <li><NavLink to={'/support'}>Support</NavLink></li>
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
            <a className="mr-4 text-xl hidden md:block text-white">
            <img className='w-11 h-11 rounded-full' src={logoT} alt="" />
            </a>
            <Typed className='hidden md:block' strings={['Citizens', 'Gateway']}></Typed>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-1 menu-horizontal px-1 text-base text-white">
              {navLinks}
            </ul>
          </div>
          <div className="gap-3 navbar-end">
          <div className="dropdown dropdown-end">
              <div className="tooltip tooltip-bottom capitalize" data-tip={user?.displayName}>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL ? user?.photoURL : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png" } />
                </div>
              </div>
              </div>
            </div>
            {user ? <Link 
            onClick={()=>{
              logOut()
              .then(()=>console.log("Sign-out successful."))
              .catch((error)=>console.log(error.code))
            }}
            className="btn bg-accent hover:bg-accent-dark text-sm md:text-base text-white">
              Logout
            </Link> : <Link to={"/login"} className="btn bg-accent hover:bg-accent-dark text-base text-white">Login</Link>}
          </div>
        </div>
      </div>
    );
};

export default Navbar;