import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/FirebaseProvider/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <div className="flex justify-center items-center h-[70vh]"><span className="w-24 loading loading-bars"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default Private;