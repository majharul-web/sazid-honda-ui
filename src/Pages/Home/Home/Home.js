import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import FeaturedBikes from '../Bikes/FeaturedBikes/FeaturedBikes';

import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <FeaturedBikes></FeaturedBikes>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;