import React, { } from 'react';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyReviewRow = ({ myReview, handleDelete }) => {

    const { _id, serviceName, reviewerName, photo, message, email} = myReview;
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='text-xl hover:text-red-600'><FaTrash></FaTrash></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {
                    message
                }
            </td>
            <td>{serviceName}</td>
            <th>
                <Link to={`/update/${_id}`}>
                    <button  className="btn btn-ghost btn-xs">Edit Review </button>
                </Link>
            </th>
        </tr>
    );
};

export default MyReviewRow;