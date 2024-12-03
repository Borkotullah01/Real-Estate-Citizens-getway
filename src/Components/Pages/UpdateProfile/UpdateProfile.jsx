import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/FirebaseProvider/FirebaseProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase.config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Helmet} from "react-helmet";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        updateProfile(auth.currentUser, {
            displayName: data.name,
            photoURL: data.photo,
        })
            .then(() => {
                console.log("profile Updated");
                navigate("/user-profile");
                toast.success("Profile Updated successfully")
            })
            .catch((error) => {
                console.log(error.code);
                toast.warn(error.code);
            });
    };

    return (
        <div className="grid justify-center items-center w-full px-4 sm:px-6 md:px-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-center uppercase text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold py-6 sm:py-8"
            >
                Update Your Profile
            </h1>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="card p-6 sm:p-8 md:p-10 bg-gradient-to-tl mx-auto from-orange-50 to-slate-100 w-full sm:w-[500px] md:w-[600px] border-2 border-primary shrink-0 shadow-2xl"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-4 sm:gap-5">
                    <div className="form-control">
                        <label className="label px-0">
                            <span className="text-lg sm:text-base md:text-lg font-semibold text-primary">Name</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            name="name"
                            placeholder={user?.displayName || "Name"}
                            className="capitalize text-md sm:text-base md:text-lg bg-transparent outline-none border-b-2"
                        />
                        {errors.name && <span className="text-red-400">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label gap-2 justify-start items-center px-0">
                            <span className="text-lg sm:text-base md:text-lg font-semibold text-primary">Email</span>
                            <span className="text-sm text-red-600">(Not changeable)</span>
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            name="email"
                            placeholder={user?.email || "Email"}
                            className="text-md sm:text-base md:text-lg bg-transparent outline-none border-b-2 cursor-not-allowed"
                            disabled
                        />
                    </div>
                    <div className="form-control">
                        <label className="label px-0">
                            <span className="text-lg sm:text-base md:text-lg font-semibold text-primary">Photo URL</span>
                        </label>
                        <input
                            {...register("photo", { required: true })}
                            type="text"
                            name="photo"
                            placeholder={user?.photoURL || "Photo URL"}
                            className="text-md sm:text-base md:text-lg bg-transparent outline-none border-b-2"
                        />
                        {errors.photo && <span className="text-red-400">Photo URL is required</span>}
                    </div>

                    <div className="form-control mt-5">
                        <button className="btn bg-primary text-base sm:text-lg md:text-xl text-white hover:bg-accent-dark font-poppins">
                            Update Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
