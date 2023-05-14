// @flow
import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const productData = [
    { name: 'ASOS Ridley High Waist', date: '07 April 2018', price: '$79.49', quantity: '82', amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', date: '25 March 2018', price: '$128.50', quantity: '37', amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', date: '17 March 2018', price: '$39.99', quantity: '64', amount: '$2,559.36' },
    { name: 'Lightweight Jacket', date: '12 March 2018', price: '$20.00', quantity: '184', amount: '$3,680.00' },
    { name: 'Marco Shoes', date: '05 March 2018', price: '$28.49', quantity: '69', amount: '$1,965.81' },
];

const ProductRow = ({ product }) => (
    <tr>
        <td>
            <h5 className="font-14 my-1 fw-normal">{product.name}</h5>
            <span className="text-muted font-13">{product.date}</span>
        </td>
        <td>
            <h5 className="font-14 my-1 fw-normal">{product.price}</h5>
            <span className="text-muted font-13">Price</span>
        </td>
        <td>
            <h5 className="font-14 my-1 fw-normal">{product.quantity}</h5>
            <span className="text-muted font-13">Quantity</span>
        </td>
        <td>
            <h5 className="font-14 my-1 fw-normal">{product.amount}</h5>
            <span className="text-muted font-13">Amount</span>
        </td>
    </tr>
);

const Products = (): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                <Link to="#" className="float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
                </Link>

                <h4 className="header-title mt-2 mb-3">Top Selling Products</h4>

                <Table hover responsive className="mb-0">
                    <tbody>
                        {productData.map((product) => (
                            <ProductRow key={product.name} product={product} />
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Products;
