import React from 'react';
import Services from '../Services/Services';
import Carousel from '../Carousel/Carousel';
import Remote from '../Remote/Remote';
import MyBestClick from '../MyBestClick/MyBestClick';



const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Remote></Remote>
            <MyBestClick></MyBestClick>
        </div>
    );
};

export default Home;