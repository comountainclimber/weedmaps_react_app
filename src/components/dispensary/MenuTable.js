import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import {currencyFormatter} from '../../services/vendorService';

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
        filterMethod: (filter, row, column) => {
            const id = filter.pivotId || filter.id;
            return row[id] !== undefined
              ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase())
              : true;
        },
    },
    {
        Header: '1 Unit',
        accessor: 'price_unit',
        width: 75,
        filterable: false
    },
    {
        Header: '1/2 Gram',
        accessor: 'price_half_gram',
        width: 75,
        filterable: false
    },
    {
        Header: '1 Gram',
        accessor: 'price_gram',
        width: 75,
        filterable: false
    },
    {
        Header: '2 Grams',
        accessor: 'price_two_grams',
        width: 75,
        filterable: false
    },
    {
        Header: '1 Eighth',
        accessor: 'price_eighth',
        width: 75,
        filterable: false
    },
    {
        Header: '1 Quarter',
        accessor: 'price_quarter',
        width: 75,
        filterable: false
    },
    {
        Header: 'Half Ounce',
        accessor: 'price_half_ounce',
        width: 75,
        filterable: false
    },
    {
        Header: 'Ounce',
        accessor: 'price_ounce',
        width: 75,
        filterable: false
    },
    {
        Header: 'Description',
        accessor: 'body',
        width: 450,
        filterable: false
    },
];

const MenuTable = props => (
    <ReactTable
        filterable
        data={props.data}
        columns={columns.map((column, i) => {
            column.id = i;
            return column;
        })}
    />
);

export default MenuTable;
