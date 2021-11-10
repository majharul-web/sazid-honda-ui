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
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5">
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