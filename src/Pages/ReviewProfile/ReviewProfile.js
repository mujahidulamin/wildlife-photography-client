import React from 'react';

const ReviewProfile = ({ review }) => {

    const { photo, reviewerName, message, email, } = review

    return (
        <div>
            <div className='mt-4 mb-5'>
                <div className=' p-8 sm:flex sm:space-x-6 bg-gray-100 text-gray-900'>
                    <div className='flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-wrap gap-x-2 gap-y-2'>
                                <div className='relative flex-shrink-0'>

                                    <img
                                        src={photo}
                                        referrerPolicy='no-referrer'
                                        alt=''
                                        className=' border w-32 h-32 rounded-full bg-gray-500 border-gray-700'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <div>
                            <h2 className='text-2xl font-semibold'>
                                {reviewerName}
                            </h2>
                        </div>
                        <div className='space-y-1'>
                            <span className='flex items-center space-x-2'>
                                Email: {email}
                                <span className='text-gray-700'>{ }</span>
                            </span>
                            <span className='flex items-center space-x-2 w-full'>
                                <span className='text-black text-small'>
                                    Review: {message}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewProfile;