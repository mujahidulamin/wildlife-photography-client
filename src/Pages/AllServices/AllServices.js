import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServiceCard from './SingleServiceCard';


const AllServices = () => {

    const allServices = useLoaderData();
        
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                
                {
                   allServices.map(singleService => <SingleServiceCard
                    key={singleService._id}
                    singleService = {singleService}
                   ></SingleServiceCard>)
                }
            </div>
    );
};

export default AllServices;