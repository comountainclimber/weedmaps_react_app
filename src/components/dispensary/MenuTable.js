import React from 'react';
import Table from '../common/Table';
import SearchBar from '../common/SearchBar';

const columns = [
    {
        header: 'Name',
        accessor: 'name',
        sortable: true,
        width: 150
    },
    {
        header: '1 Unit',
        accessor: 'price_unit',
        width: 75,
        sortable: true,
        format: 'CURRENCY'
    },
    {
        header: '1/2 Gram',
        accessor: 'price_half_gram',
        width: 75,
        sortable: true,
        format: 'CURRENCY'
    },
    {
        header: '1 Gram',
        accessor: 'price_gram',
        width: 75,
        sortable: true,
        format: 'CURRENCY'
    },
    {
        header: '2 Grams',
        accessor: 'price_two_grams',
        width: 75,
        sortable: true,
        format: 'CURRENCY'
    },
    {
        header: '1 Eighth',
        accessor: 'price_eighth',
        width: 75,
        sortable: true,
        format: 'CURRENCY'
    },
    {
        header: '1 Quarter',
        accessor: 'price_quarter',
        width: 75,
        sortable: true,
        format: 'CURRENCY'
    },
    {
        header: 'Half Ounce',
        accessor: 'price_half_ounce',
        width: 75,
        sortable: true,
        format: 'CURRENCY'
    },
    {
        header: 'Ounce',
        accessor: 'price_ounce',
        width: 75,
        sortable: true,
        format: 'CURRENCY'
    },
    {
        header: 'Description',
        accessor: 'body',
        width: 450,
        styles: {fontSize: 14}
    },
    {
        header: 'Updated',
        accessor: 'updated_at',
        width: 100,
        sortable: true,
        format: 'DATE',
        styles: {fontSize: 12}
    },
];

const MenuTable = props => (
    <div style={{minHeight: 750}}>
        <Table
            filterable
            data={props.data}
            columns={columns.map((column, i) => {
                column.id = i;
                return column;
            })}
        />
    </div>
);

export default MenuTable;
