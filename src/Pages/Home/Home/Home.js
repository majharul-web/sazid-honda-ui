import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Bikes></Bikes>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;