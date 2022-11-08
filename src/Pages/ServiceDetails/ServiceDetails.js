import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const services = useLoaderData()

    const { _id, price, image, service_name, description } = services
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div>
                <div className='bg-gray-100 p-6 rounded shadow-lg'>
                    <h2 className='text-3xl font-bold text-center mb-5'>{service_name}</h2>
                    <img
                        className='object-cover w-full mb-6 rounded shadow-lg xl:h-80'
                        src={image}
                        alt=''
                    />
                    <div className='text-justify'>
                        <span className='font-bold '>Description: </span>
                        {description}
                    </div>
                    <div className='lg:flex lg:justify-between lg:items-center'>

                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div className='bg-gray-100 p-6 rounded shadow-lg'>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServiceDetails;