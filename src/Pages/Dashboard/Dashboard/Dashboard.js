import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css';

import {
    Route,
    Switch,
    Link,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import DashHome from '../DashHome/DashHome';

const Dashboard = () => {
    const [control, setControl] = useState("dashHome");
    const { logOut, user, admin } = useAuth();
    console.log(admin);

    let { path, url } = useRouteMatch();

    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <div>
                                    <h3 className=' py-3 das-title'>
                                        <span className='mx-3'><i className="fas fa-user-cog"></i></span>
                                        Dashboard
                                    </h3>
                                </div>

                                <div className="all-menu mt-2 ms-5">
                                    {
                                        admin ?
                                            <div>
                                                <li
                                                    onClick={() => setControl("manageOrders")}
                                                    className="admin-menu p-2">
                                                    <Link className='text-dark' to={`${url}/manageOrders`}>Manage Orders</Link>

                                                </li>
                                                <li
                                                    onClick={() => setControl("addProduct")}
                                                    className="admin-menu p-2">
                                                    <Link className='text-dark' to={`${url}/addProduct`}>Add Product</Link>

                                                </li>
                                                <li
                                                    onClick={() => setControl("manageProducts")}
                                                    className="admin-menu p-2">
                                                    <Link className='text-dark' to={`${url}/manageProducts`}>Manage Products</Link>

                                                </li>
                                                <li
                                                    onClick={() => setControl("makeAdmin")}
                                                    className="admin-menu p-2">
                                                    <Link className='text-dark' to={`${url}/makeAdmin`}>Make Admin</Link>
                                                </li>
                                            </div>
                                            :
                                            <div>
                                                <li
                                                    onClick={() => setControl("myOrders")}
                                                    className="admin-menu p-2">
                                                    <Link className='text-dark' to={`${url}/myOrders`}>My Orders</Link>
                                                </li>
                                                <li
                                                    onClick={() => setControl("pay")}
                                                    className="admin-menu p-2">
                                                    <Link className='text-dark' to={`${url}/pay`}>Pay</Link>

                                                </li>
                                                <li
                                                    onClick={() => setControl("review")}
                                                    className="admin-menu p-2">
                                                    <Link className='text-dark' to={`${url}/review`}>Review</Link>

                                                </li>
                                            </div>
                                    }


                                    <Button variant='warning' onClick={logOut}>
                                        LogOut
                                    </Button>

                                </div>
                            </div>
                        </div>


                        <div className="col-md-9 text-center  text-center">
                            <Switch>
                                <PrivateRoute path={`${path}/myOrders`}>
                                    {control === "myOrders" && <MyOrders></MyOrders>}
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/pay`}>
                                    {control === "pay" && <Pay></Pay>}
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/review`}>
                                    {control === "review" && <Review></Review>}
                                </PrivateRoute>
                                <AdminRoute path={`${path}/manageOrders`}>
                                    {control === "manageOrders" && <ManageOrders></ManageOrders>}
                                </AdminRoute>
                                <AdminRoute path={`${path}/addProduct`}>
                                    {control === "addProduct" && <AddProducts></AddProducts>}
                                </AdminRoute>
                                <AdminRoute path={`${path}/manageProducts`}>
                                    {control === "manageProducts" && <ManageProducts></ManageProducts>}
                                </AdminRoute>
                                <AdminRoute path={`${path}/makeAdmin`}>
                                    {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                                </AdminRoute>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;