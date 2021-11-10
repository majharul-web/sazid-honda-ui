import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Bikes></Bikes>
        </div>
    );
};

export default Home;