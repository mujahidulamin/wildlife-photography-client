import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServiceCard from './SingleServiceCard';
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import useTitle from '../../hooks/useTitle';

const AllServices = () => {
    const [loading, setLoading] = useState(true)
    const allServices = useLoaderData();
    useTitle('Services')
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }, [])

    return (
        <div className='flex justify-center items-center'>

            {
                loading ?

                    <ClimbingBoxLoader
                        color={'#32A8B3'}
                        loading={loading}
                        size={50}
                    />
                    :
                    <div className='mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            allServices.map(singleService => <SingleServiceCard
                                key={singleService._id}
                                singleService={singleService}
                            ></SingleServiceCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default AllServices;