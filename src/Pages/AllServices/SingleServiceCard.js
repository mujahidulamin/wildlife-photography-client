import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleServiceCard = ({ singleService }) => {

    const { _id, price, image, service_name, description } = singleService;

    return (
        <div className="card w-full bg-base-100 shadow-xl mb-8">
            <PhotoProvider>
                <figure className="px-10 pt-10">
                    <PhotoView src= {image}>
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </PhotoView>
                </figure>
            </PhotoProvider>
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