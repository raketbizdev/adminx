// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';
import Table from '../../../components/Table';

// column components and definition
import ProductColumn from './ProductColumn';
import StatusColumn from './StatusColumn';
import ActionColumn from './ActionColumn';
import getColumns from './columns';

// dummy data
import { products } from './Data';

// get pagelist to display
const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '20',
        value: 20,
    },
    {
        text: '30',
        value: 30,
    },
    {
        text: 'All',
        value: products.length,
    },
];

// main component
const Products = (): React$Element<React$FragmentType> => {
    const columns = getColumns(ProductColumn, StatusColumn, ActionColumn);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/products' },
                    { label: 'Products', path: '/apps/ecommerce/products', active: true },
                ]}
                title={'Products'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="mb-2">
                                <Col sm={5}>
                                    <Link to="#" className="btn btn-danger mb-2">
                                        <i className="mdi mdi-plus-circle me-2"></i> Add Products
                                    </Link>
                                </Col>

                                <Col sm={7}>
                                    <div className="text-sm-end">
                                        <Button variant="success" className="mb-2 me-1">
                                            <i className="mdi mdi-cog-outline"></i>
                                        </Button>

                                        <Button variant="light" className="mb-2 me-1">
                                            Import
                                        </Button>

                                        <Button variant="light" className="mb-2">
                                            Export
                                        </Button>
                                    </div>
                                </Col>
                            </Row>

                            <Table
                                columns={columns}
                                data={products}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                theadClass="table-light"
                                searchBoxClass="mb-2"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Products;
