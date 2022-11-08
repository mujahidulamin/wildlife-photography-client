import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const ServiceDetails = () => {


    const location = useLocation()


    const services = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(user);

    const { _id, price, image, service_name, description } = services

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered'
        const message = form.message.value;
        const photo = user?.photoURL;
        const name = user?.displayName;


        const review = {
            review: _id,
            serviceName: service_name,
            reviewerName: name,
            email,
            photo,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Review placed successfully')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }






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
                        {
                            user?.uid ?
                                <>
                                    <form onSubmit={handleReview}>
                                        <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Give your review about this service" required></textarea>

                                        <input type="submit" value="Give Your Review" className='btn flex mx-auto my-4' />
                                    </form>

                                </>
                                :
                                <>
                                    <h2 className='text-center text-3xl font-bold'>Please login to add a review</h2>
                                    <button className='flex mx-auto my-5 btn'>
                                        <Link
                                            className='text-3xl font-bold' to={'/login'} state={{ from: location }}>Login
                                        </Link>
                                    </button>

                                

                                </>
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServiceDetails;