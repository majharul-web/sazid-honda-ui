import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const [isUpdated, setIsUpdated] = useState(null);

    // get data from database
    useEffect(() => {
        fetch('http://localhost:5000/manageOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [isDeleted, isUpdated])

    // delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if (proceed) {
            fetch(`http://localhost:5000/allOrders/order/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('delete success');
                        // const remaining = products.filter(product => product._id !== id);
                        // setProducts(remaining)
                        setIsDeleted(true);
                    }
                    else {
                        setIsDeleted(false)
                    }
                });
        }

    }

    // update
    const handleUpdateStatus = (id) => {
        fetch(`http://localhost:5000/orderStatus/update/${id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            })
            // .then()

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Order Approved')
                    setIsUpdated(true);
                }
                else {
                    setIsUpdated(false);
                }
            })
    }

    return (
        <div className='container py-4'>
            <h3 className='py-3'>
                My Orders :
                <span className='text-danger ms-2'>
                    {allOrders.length}
                </span>
            </h3>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Phone Number</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Order Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {allOrders?.map((order, index) => (
                    <tbody key={order._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{order?.name}</td>
                            <td>{order?.PhoneNumber}</td>
                            <td>{order?.productName
                            }</td>
                            <td>$ {order?.price}</td>
                            <td>{order?.status}</td>
                            <td>
                                <Button onClick={() => handleUpdateStatus(order?._id)} className='text-primary text-decoration-none text-center' variant="link">{(order?.status === 'Shipped' ? 'Updated ' : 'Update')}</Button>
                            </td>
                            <td>
                                <Button onClick={() => handleDelete(order?._id)} className='text-danger text-decoration-none text-center' variant="link">Delete</Button>
                            </td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrders;