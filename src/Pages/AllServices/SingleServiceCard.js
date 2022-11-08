import React from 'react';

const SingleServiceCard = ({ singleService }) => {

    const {_id, price, image, service_name, description } = singleService;

    return (
        <div className="card w-full bg-base-100 shadow-xl mb-8">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{service_name}
                </h2>
                <p className='font-bold text-xl'>Price: {price}</p>
                <p><span className='font-bold'>Description:</span> {description.slice(0, 100) + '...'} </p>
                <div className="card-actions">
                    <button className="btn btn-accent">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;