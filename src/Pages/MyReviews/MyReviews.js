import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';



const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])

    useTitle('My Reviews')

    useEffect(() => {
        fetch(`https://wildlife-photographer-server.vercel.app/myReviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('wildlifePhotographerToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => setMyReviews(data))
    }, [user.email, logOut])

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

        <h2 className='text-center my-6 font-bold text-4xl text-black'>My All Review</h2>



            {
                myReviews?.length === 0 ?
                    <>
                        <h2 className='flex justify-center my-48 font-bold text-5xl'>No reviews were added</h2>
                    </>
                    :
                    <>
                        <div className="overflow-x-auto mx-6 my-6 ">
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