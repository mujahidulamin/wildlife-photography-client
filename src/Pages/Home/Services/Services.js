import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {


    const [services, setServices] = useState([])
    const navigate = useNavigate()

    useTitle('Service')

    useEffect(() => {
        fetch('https://wildlife-photographer-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div >
            <div>
                <p data-aos="fade-down" className='text-4xl font-bold text-black text-center py-6'>My Services</p>
            </div>
            <div className='mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <button data-aos="fade-down-left" onClick={() => navigate("/services")} className='btn btn-accent flex mx-auto mb-6'>See All</button>
        </div>
    );
};

export default Services;