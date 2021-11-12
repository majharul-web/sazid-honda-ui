import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import ExploreBikes from '../ExploreBikes/ExploreBikes';

const Explore = () => {
    return (
        <>
            <Menubar></Menubar>
            <ExploreBikes></ExploreBikes>
            <Footer></Footer>
        </>
    );
};

export default Explore;