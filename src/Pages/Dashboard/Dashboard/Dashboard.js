import React, { useState } from 'react';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import './Dashboard.css';

const Dashboard = () => {
    const [control, setControl] = useState("allVolunteers");
    console.log(control);
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <div>
                                    <h3 className=' py-3 das-title'>
                                        <span className='mx-3'><i class="fas fa-user-cog"></i></span>
                                        Dashboard
                                    </h3>
                                </div>

                                <div className="all-menu mt-2 ms-5">
                                    <li
                                        onClick={() => setControl("makeAdmin")}
                                        className="admin-menu p-2"
                                    >
                                        Make Admin
                                    </li>
                                    <li
                                        onClick={() => setControl("allOrders")}
                                        className="admin-menu p-2"
                                    >
                                        Add Orders
                                    </li>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">

                            {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                            {control === "allOrders" && <AllOrders></AllOrders>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;