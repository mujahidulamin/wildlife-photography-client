import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>
            <div>
                <p className='text-4xl font-bold text-black text-center py-6'>My Services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                
                {
                   services.map(service => <ServiceCard
                    key={service._id}
                    service = {service}
                   
                   ></ServiceCard>)
                }
            </div>

            <button onClick={() => navigate("/services")} className='btn btn-accent flex mx-auto mb-6'>See All</button>
        </div>
    );
};

export default Services;