import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lunr from 'lunr';

import Pagination from './Pagination';
import {colors} from '../../config';
import {currencyFormatter} from '../../services/vendorService';
import SearchBar from './SearchBar';
import './styles/Table.css';

const tablePropTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
};
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limitPerPage: 5,
            paginationPosition: 1,
            data: [],
            columns: this.props.columns,
            collectionLength: this.props.data.length
        };
        this.sortColumn = sortColumn.bind(this);
        this.handleSearch = handleSearch.bind(this);
        this.initSearch = initSearch.bind(this);
    }

    componentWillMount() {
        this.initSearch();
        this.setState({
            data: this.props.data,
            limitedData: _limitData(this.props.data, this.state)
        });
    }

    render() {
        return (
            <div>
                <div style={{marginBottom: 10}}>
                    <div style={{width: 300, marginLeft: 15, marginBottom: 20}}>
                        <SearchBar
                            handleUpdateSearchValue={value => this.handleSearch(value)}
                            placeholder="Search by name..."
                        />
                    </div>
                    <NumberPerPageDropDown
                        limitPerPage={this.state.limitPerPage}
                        handleChange={e => this.setState(
                            {
                                limitPerPage: Number(e.target.value),
                                paginationPosition: 1,
                                limitedData: _limitData(this.props.data, {
                                    paginationPosition: 1,
                                    limitPerPage: Number(e.target.value)
                                })
                            })
                        }
                    />
                </div>
                <table className="table table-hover">
                    <ThGenerator
                        columns={this.state.columns}
                        sortColumnFunc={this.sortColumn}
                    />
                    {!!this.state.data.length &&
                        <TableBody
                            data={_limitData(this.state.data, this.state)}
                            columns={this.state.columns}
                        />
                    }
                </table>
                {this.state.limitPerPage < this.state.collectionLength &&
                    <div style={{textAlign: 'center'}}>
                        <Pagination
                            position={this.state.paginationPosition}
                            collectionLength={this.state.collectionLength}
                            limitPerPage={Number(this.state.limitPerPage)}
                            paginationPosition={this.state.paginationPosition}
                            handleClick={num => this.setState({paginationPosition: Number(num)})}
                        />
                    </div>
                }
            </div>
        );
    }
}
Table.propTypes = tablePropTypes;

const thGeneratorPropTypes = {
    columns: PropTypes.array.isRequired,
    sortColumnFunc: PropTypes.func.isRequired
};
const ThGenerator = ({columns, sortColumnFunc}) => (
    <thead className="header">
        <tr>
            {columns.map(column => (
                <th
                    key={column.id}
                    onClick={() => {
                        if (column.sortable) {
                            sortColumnFunc(column.accessor);
                        }
                    }}
                    style={{
                        width: column.width,
                        cursor: column.sortable ? 'pointer' : 'default',
                        backgroundColor: column.sorting ? colors.lightEmerald : ''
                    }}
                >
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        {column.header}
                        {column.sorting && column.ascending &&
                            <div style={{fontSize: 10, marginLeft: 5}}>
                                ▲
                            </div>
                        } {column.sorting && !column.ascending &&
                            <div style={{fontSize: 10, marginLeft: 5}}>
                                ▼
                            </div>
                        }
                    </div>
                </th>
            ))}
        </tr>
    </thead>
);
ThGenerator.propTypes = thGeneratorPropTypes;

const tableBodyPropTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
};
const TableBody = ({data, columns}) => (
    <tbody>
        {
            data.map((_data) => {
                // reduce the object to an array of only the requested key value pairs
                const reduced = columns.map(column => (
                    {accessor: column.accessor, format: column.format}
                ))
                    .map(_reducedData => ({
                        accessor: _reducedData.accessor,
                        [_reducedData.accessor]: _data[_reducedData.accessor],
                        format: _reducedData.format
                    })
                );

                return (
                    <tr key={_data.id}>
                        {
                            reduced.map((value, i) => (
                                <td key={i}>
                                    <div style={{maxHeight: 100, overflow: 'auto'}}>
                                        {_formatIndividualCellData(value)}
                                    </div>
                                </td>
                            ))
                        }
                    </tr>
                );
            })
        }
    </tbody>
);
TableBody.propTypes = tableBodyPropTypes;

const numberPerPageDropDownPropTypes = {
    limitPerPage: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
};
const NumberPerPageDropDown = props => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <p style={{marginRight: 10}}>
            <i>Currently displaying {props.limitPerPage} menu items per page.</i>
        </p>
        <select
            className="Table-limit-select"
            onChange={props.handleChange}
            value={props.limitPerPage}
        >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
        </select>
    </div>
);
NumberPerPageDropDown.propTypes = numberPerPageDropDownPropTypes;

function _limitData(data, {paginationPosition, limitPerPage}) {
    const listStart = (paginationPosition - 1) * limitPerPage;
    return data.slice(listStart, (listStart + limitPerPage));
}

function _formatIndividualCellData(data) {
    if (!data.format) return data[data.accessor];
    const formatted = {...data};
    switch (data.format) {
    case 'CURRENCY': {
        const fiat = currencyFormatter.format(formatted[formatted.accessor]);
        if (fiat === '$0.00') {
            formatted[formatted.accessor] = '-';
        } else {
            formatted[formatted.accessor] = fiat;
        }
        return formatted[formatted.accessor];
    }
    case 'DATE': {
        // 'do other stuff'
        return formatted[formatted.accessor];
    }
    default: {
        return formatted[formatted.accessor];
    }
    }
}

function handleSearch(text) {
    if (!text) {
        return this.setState({
            data: this.props.data,
            limitedData: _limitData(this.props.data, this.state),
            collectionLength: this.props.data.length
        });
    }

    const results = this.index.search(`${text}*`);
    const mapped = [];
    this.props.data.forEach((_data) => {
        results.forEach(result => (
            _data.name === result.ref ? mapped.push(_data) : undefined
        ));
    });

    return this.setState({
        data: mapped,
        limitedData: _limitData(mapped,
            {limitPerPage: this.state.limitPerPage, paginationPosition: 1}
        ),
        paginationPosition: 1,
        collectionLength: mapped.length
    });
}

function initSearch() {
    const data = [...this.props.data];
    this.index = lunr(function () { // eslint-disable-line
        this.ref('id');
        this.ref('name');
        this.field('name');

        data.forEach(function (doc) { // eslint-disable-line
            this.add(doc);
        }, this);
    });
}

function sortColumn(accessor) {
    let ascending = true;

    const update = this.state.columns.map((_column) => {
        if (_column.accessor === accessor) {
            _column.ascending = !_column.ascending;
            _column.sorting = true;
            ascending = _column.ascending;
            return _column;
        }
        _column.sorting = false;
        _column.ascending = false;
        return _column;
    });

    function increasing(a, b) {
        return (parseFloat(a[accessor]) - parseFloat(b[accessor]));
    }
    function decreasing(a, b) {
        return (parseFloat(b[accessor]) - parseFloat(a[accessor]));
    }
    function byDateIncreasing(a, b) {

    }
    function byDateDecreasing(a, b) {

    }

    const initedIndex = this.props.data.map((e, i) => ({index: i, [accessor]: e[accessor] }));
    const sortBy = ascending ? increasing : decreasing;
    const sortedLengths = initedIndex.sort(sortBy);
    const sorted = sortedLengths.map(e => this.props.data[e.index]);

    this.setState({
        data: sorted,
        limitedData: _limitData(sorted,
            {limitPerPage: this.state.limitPerPage, paginationPosition: 1}
        ),
        columns: update,
        paginationPosition: 1
    });
}

export default Table;
