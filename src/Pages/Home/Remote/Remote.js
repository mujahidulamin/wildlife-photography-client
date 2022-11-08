import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Remote = () => {
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-16'>

            <div>
                <h2 className='text-3xl mb-3 font-bold'>Remote & Camera Trap Photography</h2>
                <p>Technology has helped me to capture images of wildlife in new ways. In particular, remote-control cameras and camera traps have allowed me to get my camera closer to my subjects than ever before. Here are some of my favourite resulting images from across the world.</p>
            </div>
            <PhotoProvider>
                <div>
                    <PhotoView src='http://www.wildlifephoto.com/wp-content/uploads/2015/09/remote-1.jpg'>
                        <img src="http://www.wildlifephoto.com/wp-content/uploads/2015/09/remote-1.jpg" alt="" />
                    </PhotoView>
                </div>
                <div>
                    <PhotoView src='http://www.wildlifephoto.com/wp-content/uploads/2015/09/zambia-3.jpg'>
                        <img src="http://www.wildlifephoto.com/wp-content/uploads/2015/09/zambia-3.jpg" alt="" />
                    </PhotoView>
                </div>
                <div>
                    <PhotoView src='http://www.wildlifephoto.com/wp-content/uploads/2015/09/remote-4.jpg'>
                        <img src="http://www.wildlifephoto.com/wp-content/uploads/2015/09/remote-4.jpg" alt="" />
                    </PhotoView>
                </div>
                <div>
                    <PhotoView src='http://www.wildlifephoto.com/wp-content/uploads/2015/09/remote-3.jpg'>
                        <img src="http://www.wildlifephoto.com/wp-content/uploads/2015/09/remote-3.jpg" alt="" />
                    </PhotoView>
                </div>
                <div>
                    <PhotoView src='http://www.wildlifephoto.com/wp-content/uploads/2015/09/remote-2.jpg'>
                        <img src="http://www.wildlifephoto.com/wp-content/uploads/2015/09/remote-2.jpg" alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>

        </div>
    );
};

export default Remote;