import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const singleReview = useLoaderData()
    console.log(singleReview);
    const [review, setReview] = useState(singleReview)

    const handleUpdateReview = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/reviews/${singleReview._id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }






    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview)
    }



    return (
        <div>
            <h2>Update: {singleReview.serviceName}</h2>
            <form onSubmit={handleUpdateReview} className='my-16'>
                <textarea onChange={handleChange} name='message' className="textarea textarea-bordered w-full" placeholder="Give your review about this service" required defaultValue={singleReview.message}></textarea>

                <input type="submit" value="Update" className='btn flex mx-auto my-4' />
            </form>
        </div>
    );
};

export default Update;