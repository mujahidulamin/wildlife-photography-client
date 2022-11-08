import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt='' src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1629887969123-7WZ70M08PVEKR08M1VMG/2021_AtlanticPuffin_July_4Print.jpg?format=2500w" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt='' src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1618504077735-VC03B3Y2N4CAARFB79BP/BradJames_WoodlandCaribou.jpg?format=750w" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1612719358701-WI4K1U0T3PGFBBOYOCPS/2020_WilsonSnipe_May_1.jpg?format=2500w" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt='' src="https://images.squarespace-cdn.com/content/v1/5368f12ce4b0d959391a6e46/1612719334997-SGSJVH1GJFOZM42MD47E/2019_Fox_Feb_1WS.jpg?format=750w" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;