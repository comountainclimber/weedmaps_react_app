import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import './styles/Table.css';

const propTypes = {
};
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limitPerPage: 5,
            paginationPosition: 1,
            data: [],
            columns: this.props.columns
        };
        this.sortColumn = _sortColumn.bind(this);
    }

    componentWillMount() {
        this.setState({
            data: this.props.data,
            limitedData: _limitData(this.props.data, this.state)
        });
    }

    render() {
        console.log(this.state.data[0])
        return (
            <div>
                <div style={{marginBottom: 10}}>
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
                <table className="table table-bordered table-hover">
                    <ThGenerator
                        columns={this.state.columns}
                        sortColumn={this.sortColumn}
                    />
                    <TableBody
                        data={_limitData(this.state.data, this.state)}
                        columns={this.state.columns}
                    />
                </table>
                <div style={{textAlign: 'center'}}>
                    <Pagination
                        position={this.state.paginationPosition}
                        collectionLength={this.props.data.length}
                        limitPerPage={Number(this.state.limitPerPage)}
                        paginationPosition={this.state.paginationPosition}
                        handleClick={num => this.setState({paginationPosition: Number(num)})}
                    />
                </div>
            </div>
        );
    }
}

const ThGenerator = ({columns, sortColumn}) => (
    <thead>
        <tr>
            {columns.map(column => (
                <th
                    key={column.id}
                    onClick={() => {
                        if (column.sortable) {
                            sortColumn(column.accessor);
                        }
                    }}
                    style={{width: column.width, cursor: column.sortable ? 'pointer' : 'default'}}
                >
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {column.header}
                        {column.sorting && column.ascending &&
                            <div style={{fontSize: 10, marginLeft: 2}}>
                                ▲
                            </div>
                        } {column.sorting && !column.ascending &&
                            <div style={{fontSize: 10, marginLeft: 2}}>
                                ▼
                            </div>
                        }
                    </div>
                </th>
            ))}
        </tr>
    </thead>
);

const TableBody = ({data, columns}) => (
    <tbody>
        {
            data.map((_data) => {
                // reduce the object to an array of only the requested key value pairs
                const reduced = columns.map(column => column.accessor)
                    .map(key => ({
                        [key]: _data[key]
                    })
                );

                return (
                    <tr key={_data.id}>
                        {
                            reduced.map((value, i) => (
                                <td key={i}>
                                    <div style={{maxHeight: 100, overflow: 'auto'}}>
                                        {value[Object.keys(value)[0]]}
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
            <option value="25">15</option>
        </select>
    </div>
);

function _limitData(data, {paginationPosition, limitPerPage}) {
    const listStart = (paginationPosition - 1) * limitPerPage;
    return data.slice(listStart, (listStart + limitPerPage));
}

function _sortColumn(accessor) {
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
    // attempt at Schwartzian tranformation
    // https://en.wikipedia.org/wiki/Schwartzian_transform
    const lengths = this.props.data.map((e, i) => ({index: i, [accessor]: e[accessor] }));

    const sortBy = ascending ? increasing : decreasing;
    const sortedLengths = lengths.sort(sortBy);

    // this should be relatively inexpensive
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

Table.propTypes = propTypes;

export default Table;
