import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';
import { toast } from 'react-hot-toast';



const MyReviews = () => {

    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`https://wildlife-photographer-server.vercel.app/myReviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to cancel this review?')
        if (proceed) {
            fetch(`https://wildlife-photographer-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully')
                        const remaining = myReviews.filter(r => r._id !== id)
                        setMyReviews(remaining)
                    }
                })
        }
    }




    return (
        <div>

            {
                myReviews?.length === 0 ?
                    <>
                        <h2 className='flex justify-center my-48 font-bold text-5xl'>No reviews were added</h2>
                    </>
                    :
                    <>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                Delete
                                            </label>
                                        </th>
                                        <th>Reviewer Details</th>
                                        <th>Review</th>
                                        <th>Service Name</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myReviews.map(myReview => <MyReviewRow
                                            key={myReview._id}
                                            myReview={myReview}
                                            handleDelete={handleDelete}
                                        ></MyReviewRow>)
                                    }
                                </tbody>
                            </table>
                        </div>

                    </>
            }
        </div>
    );
};

export default MyReviews;