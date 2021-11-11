import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import Purchase from '../Purchase/Purchase';

const Order = () => {
    return (
        <>
            <Menubar></Menubar>
            <Purchase></Purchase>
            <Footer></Footer>
        </>
    );
};

export default Order;