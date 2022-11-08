import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const MyBestClick = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-black text-center'>My Best Clicks</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-16'>
                <PhotoProvider>
                    <div>
                        <PhotoView src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1618593760265-1RIDKEUR3MQZOQD89TG2/2018_Fox_Aug_12_Print.jpg?format=750w">
                            <img src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1618593760265-1RIDKEUR3MQZOQD89TG2/2018_Fox_Aug_12_Print.jpg?format=750w" alt="" />
                        </PhotoView>
                        <p className='text-center mt-3 font-bold text-xl'>Motion</p>
                    </div>
                    <div>
                        <PhotoView src='https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1612719722628-2N1EK2384EXYQMCRM0WF/2020_NorthernPintail_April_13.jpg?format=750w'>
                            <img src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1612719722628-2N1EK2384EXYQMCRM0WF/2020_NorthernPintail_April_13.jpg?format=750w" alt="" />
                        </PhotoView>
                        <p className='text-center mt-3 font-bold text-xl'>Shadows & Light</p>
                    </div>
                    <div>
                        <PhotoView src='https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1634239343345-PE3GR6H981R4VXA5TE3F/2020_WillowPtarmigan_Feb_5WS.jpg?format=1000w'>
                            <img src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1634239343345-PE3GR6H981R4VXA5TE3F/2020_WillowPtarmigan_Feb_5WS.jpg?format=1000w" alt="" />
                        </PhotoView>
                        <p className='text-center mt-3 font-bold text-xl'>Fire & Ice</p>
                    </div>
                    <div>
                        <PhotoView src='https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1623411985515-95B3F6V1M170WAVFQAIS/SavannahSparrow_BradJames_HighRes.jpg?format=2500w'>
                            <img src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1623411985515-95B3F6V1M170WAVFQAIS/SavannahSparrow_BradJames_HighRes.jpg?format=2500w" alt="" />
                        </PhotoView>
                        <p className='text-center mt-3 font-bold text-xl'>Golden</p>
                    </div>
                    <div>
                        <PhotoView src='https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1648052996124-KDD36QZXYOI1AWU2SE12/Yellow-Warbler.jpg?format=2500w'>
                            <img src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1648052996124-KDD36QZXYOI1AWU2SE12/Yellow-Warbler.jpg?format=2500w" alt="" />
                        </PhotoView>
                        <p className='text-center mt-3 font-bold text-xl'>Environmental</p>
                    </div>
                    <div>
                        <PhotoView src='https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1618504077735-VC03B3Y2N4CAARFB79BP/BradJames_WoodlandCaribou.jpg?format=750w'>
                            <img src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1618504077735-VC03B3Y2N4CAARFB79BP/BradJames_WoodlandCaribou.jpg?format=750w" alt="" />
                        </PhotoView>
                        <p className='text-center mt-3 font-bold text-xl'>Portraits</p>
                    </div>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default MyBestClick;