import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ClimbingBoxLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <span className='flex justify-center items-center'>
            <ClimbingBoxLoader
                color={'#32A8B3'}
                loading={loading}
                size={50}
            />
        </span>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;