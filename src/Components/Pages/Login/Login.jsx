import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/FirebaseProvider/FirebaseProvider';
import { toast } from 'react-toastify';
import {Helmet} from "react-helmet";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {Login, GoogleLogin, GithubLogin} = useContext(AuthContext);
    const location = useLocation();
    console.log(GoogleLogin);

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      Login(data.email, data.password)
      .then((result)=>{
        console.log(result.user)
        navigate(location.state || "/")
        toast.success("Login Successfully");
      })
      .catch((error)=>console.log(error.code));
      toast.warn(errors.code);
    }

    const hangleSocialLogin = (loginFunctionName) => {
        loginFunctionName()
        .then((resul)=>console.log(resul.user))
        .catch((error)=>console.log(error.code))
    }

    return (
        <div className="grid justify-center items-center w-full py-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="card p-4 sm:p-6 md:p-8 bg-gradient-to-tl from-orange-50 to-slate-100 w-full sm:w-[350px] md:w-[450px] border-2 border-primary shrink-0 shadow-2xl">
                <h1 className='text-center uppercase text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold p-4 sm:p-6'>
                    Login now
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-4 sm:gap-5">
                    <div className="form-control">
                        <input 
                            {...register("email", {required: true})} 
                            name='email' 
                            type="email" 
                            placeholder="Username Or Email" 
                            className="text-lg sm:text-xl bg-transparent outline-none border-b-2 py-1 sm:py-2"
                        />
                        {errors.email && <span className='text-red-600 text-xs sm:text-sm'>Email is required</span>}
                    </div>
                    <div className="form-control">
                        <div className="flex items-end justify-between text-lg sm:text-xl bg-transparent outline-none border-b-2 py-1 sm:py-2">
                            <input 
                                {...register("password", {required: true})} 
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
                        <div className="flex py-4 justify-between items-center text-sm sm:text-base">
                            <span className='flex gap-2 items-center'>
                                <input className='w-4 h-4' type="checkbox" name="" id="" />
                                Remember me
                            </span>
                            <a href="#" className="link link-hover text-primary text-xs sm:text-sm">Forgot password?</a>
                        </div>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-primary text-white hover:bg-accent-dark font-poppins w-full py-2 sm:py-3 text-lg">
                            Login
                        </button>
                    </div>
                    <div className="form-control">
                        <h1 className='text-accent font-poppins text-xs sm:text-sm'>
                            You don't have an account? 
                            <Link to={"/register"} className='btn btn-link text-accent-dark'>
                                Register
                            </Link>
                        </h1>
                    </div>
                    <div className="flex gap-3 items-center text-lg font-poppins onclick={}">
                    <div className='bg-gray-200 w-full h-[3px]' />OR<div className='bg-gray-200 w-full h-[3px]' />
                    </div>
                </form>
                <div className="form-control">
                    <div className="flex gap-4 justify-center">
                    <button onClick={()=>hangleSocialLogin(GoogleLogin)} className="btn btn-square text-3xl">
                    <FcGoogle />
                    </button>
                    <button onClick={()=>hangleSocialLogin(GithubLogin)} className="btn btn-square text-3xl">
                    <FaGithub />
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
