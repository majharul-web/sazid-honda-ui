import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    // get data from database
    useEffect(() => {
        fetch('https://mighty-bayou-89893.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [isDeleted]);

    // delete product
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if (proceed) {
            fetch(`https://mighty-bayou-89893.herokuapp.com/allProduct/product/delete/${id}`, {
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
    console.log(products);
    return (
        <div className='container py-4'>
            <h3 className='py-3'>
                All Products :
                <span className='text-danger ms-2'>
                    {products.length}
                </span>
            </h3>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Added by(admin)</th>
                        <th>Admin Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {products?.map((product, index) => (
                    <tbody key={product._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{product?.name}</td>
                            <td>{product?.email}</td>
                            <td>{product?.productName
                            }</td>
                            <td>$ {product?.price}</td>
                            <td>
                                <Button onClick={() => handleDelete(product?._id)} className='text-danger text-decoration-none text-center' variant="link">Delete</Button>
                            </td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageProducts;