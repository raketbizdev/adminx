import ProductColumn from './ProductColumn';
import StatusColumn from './StatusColumn';
import ActionColumn from './ActionColumn';

export const getColumns = () => {
    return [
        {
            Header: 'Product',
            accessor: 'name',
            sort: true,
            Cell: ProductColumn,
        },
        {
            Header: 'Category',
            accessor: 'category',
            sort: true,
        },
        {
            Header: 'Added Date',
            accessor: 'added_date',
            sort: true,
        },
        {
            Header: 'Price',
            accessor: 'price',
            sort: true,
        },
        {
            Header: 'Quantity',
            accessor: 'quantity',
            sort: true,
        },
        { Header: 'Status', accessor: 'status', sort: true, Cell: StatusColumn },
        {
            Header: 'Action',
            accessor: 'action',
            sort: false,
            classes: 'table-action',
            Cell: ActionColumn,
        },
    ];
};

export default getColumns;
