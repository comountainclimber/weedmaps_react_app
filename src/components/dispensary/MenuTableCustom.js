import React from 'react';
import Table from '../common/Table';

const columns = [
    {
        header: 'Name',
        accessor: 'name',
        filterMethod: (filter, row, column) => {
            const id = filter.pivotId || filter.id;
            return row[id] !== undefined
              ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase())
              : true;
        },
        width: 150
    },
    {
        header: '1 Unit',
        accessor: 'price_unit',
        width: 75,
        sortable: true
    },
    {
        header: '1/2 Gram',
        accessor: 'price_half_gram',
        width: 75,
        sortable: true
    },
    {
        header: '1 Gram',
        accessor: 'price_gram',
        width: 75,
        sortable: true
    },
    {
        header: '2 Grams',
        accessor: 'price_two_grams',
        width: 75,
        sortable: true
    },
    {
        header: '1 Eighth',
        accessor: 'price_eighth',
        width: 75,
        sortable: true
    },
    {
        header: '1 Quarter',
        accessor: 'price_quarter',
        width: 75,
        sortable: true
    },
    {
        header: 'Half Ounce',
        accessor: 'price_half_ounce',
        width: 75,
        sortable: true
    },
    {
        header: 'Ounce',
        accessor: 'price_ounce',
        width: 75,
        sortable: true
    },
    {
        header: 'Description',
        accessor: 'body',
        width: 450
    },
];

const MenuTableCustom = props => (
    <Table
        filterable
        data={props.data}
        columns={columns.map((column, i) => {
            column.id = i;
            return column;
        })}
    />
);

export default MenuTableCustom;
