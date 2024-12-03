import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/FirebaseProvider/FirebaseProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import {Helmet} from "react-helmet";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then((result) => {
            updateProfile(auth.currentUser, {
                displayName: data.name, photoURL: data.photo
            })
            .then(() => console.log("Profile Updated"))
            .catch((error) => console.log(error.code));
            navigate("/");
            toast.success("Account Created successfully");
        })
        .catch((error) => {
            console.log(error.code);
            toast.warn(error.code);
        })
    };

    return (
        <div className="grid justify-center items-center w-full py-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register || Create Account</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="card p-4 sm:p-6 md:p-8 bg-gradient-to-tl from-orange-50 to-slate-100 w-full sm:w-[350px] md:w-[450px] border-2 border-primary shrink-0 shadow-2xl">
                <h1 className='text-center uppercase text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold p-4 sm:p-6'>
                    Register
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-4 sm:gap-5">
                    <div className="form-control">
                        <input 
                            {...register("name", { required: true })} 
                            type="text" 
                            name='name' 
                            placeholder="Full Name" 
                            className="text-lg sm:text-xl bg-transparent outline-none border-b-2 py-1 sm:py-2"
                        />
                    </div>
                    <div className="form-control">
                        <input 
                            {...register("photo", { required: true })} 
                            type="text" 
                            name='photo' 
                            placeholder="Photo URL" 
                            className="text-lg sm:text-xl bg-transparent outline-none border-b-2 py-1 sm:py-2"
                        />
                    </div>
                    <div className="form-control">
                        <input 
                            {...register("email", { required: true })} 
                            type="email" 
                            name='email' 
                            placeholder="Username Or Email" 
                            className="text-lg sm:text-xl bg-transparent outline-none border-b-2 py-1 sm:py-2"
                        />
                        {errors.email && <span className='text-red-600 text-xs sm:text-sm'>Email is required</span>}
                    </div>
                    <div className="form-control">
                        <div className="flex items-end justify-between text-lg sm:text-xl bg-transparent outline-none border-b-2 py-1 sm:py-2">
                            <input 
                                {...register("password", { required: true })} 
                                name='password' 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                className="text-lg sm:text-xl bg-transparent outline-none" 
                            />
                            <span className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BsEye /> : <BsEyeSlashFill />}
                            </span>
                        </div>
                        {errors.password && <span className='text-red-600 text-xs sm:text-sm'>Password is required</span>}
                    </div>
                    <div className="form-control">
                        <div className="flex items-end justify-between text-lg sm:text-xl bg-transparent outline-none border-b-2 py-1 sm:py-2">
                            <input 
                                {...register("confirmPassword", { required: true })} 
                                name='confirmPassword' 
                                type={showConfirm ? "text" : "password"} 
                                placeholder="Confirm Password" 
                                className="text-lg sm:text-xl bg-transparent outline-none" 
                            />
                            <span className='cursor-pointer' onClick={() => setShowConfirm(!showConfirm)}>
                                {showConfirm ? <BsEye /> : <BsEyeSlashFill />}
                            </span>
                        </div>
                        {errors.confirmPassword && <span className='text-red-600 text-xs sm:text-sm'>Confirm Password is required</span>}
                    </div>
                    <div className="form-control">
                        <button className="btn bg-primary text-white hover:bg-accent-dark font-poppins w-full py-2 sm:py-3 text-lg">
                            Register
                        </button>
                    </div>
                    <div className="form-control">
                        <h1 className='text-accent font-poppins text-xs sm:text-sm'>
                            Already have an account? 
                            <Link to={"/login"} className='btn btn-link text-accent-dark'>
                                Login
                            </Link>
                        </h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
