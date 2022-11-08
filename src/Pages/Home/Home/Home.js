import React from 'react';
import Services from '../Services/Services';
import Carousel from '../Carousel/Carousel';
import Remote from '../Remote/Remote';



const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Remote></Remote>
        </div>
    );
};

export default Home;