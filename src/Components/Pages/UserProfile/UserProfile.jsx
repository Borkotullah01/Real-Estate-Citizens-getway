import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/FirebaseProvider/FirebaseProvider";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Profile</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col bg-gradient-to-tl from-orange-50 to-slate-100 justify-center font-semibold p-4 sm:p-6 md:p-8 shadow-md rounded-xl">
        <h1 className="uppercase text-primary text-center text-3xl sm:text-4xl md:text-5xl py-6 sm:py-8">
          Your Profile
        </h1>
        <div className="flex justify-center">
          <img
            src={user?.photoURL}
            alt=""
            className="mt-6 sm:mt-8 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gray-500"
          />
        </div>
        <div className="my-6 sm:my-8">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="flex gap-2 sm:gap-4 items-center text-primary font-poppins text-sm sm:text-base md:text-lg font-semibold">
              Name: <span className="text-gray-500">{user?.displayName}</span>
            </h1>
            <h1 className="flex gap-2 sm:gap-4 items-center text-primary font-poppins text-sm sm:text-base md:text-lg font-semibold">
              Email: <span className="text-gray-500">{user?.email}</span>
            </h1>
            <h1 className="flex gap-2 sm:gap-4 items-center text-primary font-poppins text-sm sm:text-base md:text-lg font-semibold">
              Email Verified: <span className="text-gray-500">Verified</span>
            </h1>
          </div>
          <div className="flex justify-center mt-8 sm:mt-10">
            <Link
              to={"/update-profile"}
              className="btn bg-primary hover:bg-accent-dark text-white text-sm sm:text-base md:text-lg capitalize font-poppins px-4 sm:px-6 md:px-8"
            >
              <FiEdit className="mr-2" /> Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
