import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../../../src/assets/Logo-Real-Black.png";

const Footer = () => {
    return (
        <div 
          data-aos="slide-up"
          data-aos-duration="800"
          data-aos-easing="linear"
          className="bg-accent-light mt-6 sm:mt-8 md:mt-10">
          <footer className="max-w-7xl mx-auto justify-between footer text-base-content px-4 py-8 sm:py-10 md:p-10">
            <aside className="flex flex-col lg:flex-row items-center">
              <img className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full" src={logo} alt="Logo" />
              <p className="text-xl md:text-2xl font-poppins font-semibold uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[4px]">
                <span className="text-primary">Citizens</span>
                <br />
                <span className="text-[#0fa0d9]">Getway</span>
              </p>
            </aside>
            <nav className="font-poppins">
              <h6 className="footer-title text-sm sm:text-base md:text-lg text-accent-dark">Navigate</h6>
              <Link to="/" className="link text-sm sm:text-base font-semibold link-hover">Home</Link>
              <Link to="/user-profile" className="link text-sm sm:text-base font-semibold link-hover">Profile</Link>
              <Link to="/order" className="link text-sm sm:text-base font-semibold link-hover">Order</Link>
              <Link to="/support" className="link text-sm sm:text-base font-semibold link-hover">Support</Link>
            </nav>
            <nav className="font-poppins">
              <h6 className="footer-title text-sm sm:text-base md:text-lg text-accent-dark">Legal</h6>
              <a className="link text-sm sm:text-base font-semibold link-hover">Terms of use</a>
              <a className="link text-sm sm:text-base font-semibold link-hover">Privacy policy</a>
              <a className="link text-sm sm:text-base font-semibold link-hover">Cookie policy</a>
            </nav>
            <form>
              <h6 className="footer-title text-sm sm:text-base md:text-lg text-accent-dark">Newsletter</h6>
              <fieldset className="form-control w-72 sm:w-64 md:w-80">
                <label className="label">
                  <span className="label-text sm:text-xs md:text-sm lg:text-base">Enter your email address</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input text-xs md:text-sm lg:text-base input-bordered join-item w-full"
                  />
                  <button className="btn text-xs md:text-sm lg:text-base btn-primary join-item px-3 sm:px-4 md:px-6">Subscribe</button>
                </div>
              </fieldset>
            </form>
          </footer>
          <div className="footer footer-center text-xs sm:text-sm md:text-base bg-primary p-3 sm:p-4 md:p-5">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} - All rights reserved by Citizens Getway || 
                Design By-<span className="text-info">Jawad Bashar Borkot Ullah</span>
              </p>
            </aside>
          </div>
        </div>
        
    );
};

export default Footer;