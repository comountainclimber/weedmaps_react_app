import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {PaginationButton} from './Button';

const LIMIT = 10;

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paginationPosition: 1,
            pagination: [],
            reducedPagination: []
        };

        this.reducePagination = _reducePagination.bind(this);
        this.changePosition = _changePosition.bind(this);
        this.setPagination = _setPagination.bind(this);
    }

    componentWillMount() {
        this.setPagination(this.props.limitPerPage);
    }


    componentWillReceiveProps(nextProps) {
        this.setPagination(nextProps.limitPerPage);
    }

    render() {
        return (
            <div>
                {(this.state.paginationPosition > 1) && <BackButton handleClick={this.changePosition} />}
                {this.state.reducedPagination.map(page => (
                    <PaginationButton
                        key={page.pageNumber}
                        active={this.props.position === Number(page.pageNumber)}
                        text={page.pageNumber}
                        onClick={() => this.props.handleClick(page.pageNumber)}
                    />
                ))}
                {((this.state.paginationPosition < Math.ceil(this.state.pagination.length / LIMIT)) && this.state.reduced)
                    && <ForwardButton handleClick={() => this.changePosition({increase: true})} />
                }
            </div>
        );
    }
}

const ForwardButton = props => (
    <PaginationButton
        text=" ⇨ "
        onClick={props.handleClick}
    />
);

const BackButton = props => (
    <PaginationButton
        text=" ⇦ "
        onClick={props.handleClick}
    />
);

function _changePosition(action) {
    function _increase(state) {
        return ({
            paginationPosition: state.paginationPosition + 1
        });
    }
    function _decrease(state) {
        return ({
            paginationPosition: state.paginationPosition - 1
        });
    }
    this.setState(action.increase ? _increase : _decrease, () => this.reducePagination());
}

function _setPagination(limitPerPage) {
    const length = Math.ceil(this.props.collectionLength / limitPerPage);
    const pagination = [];
    for (let i = 1; i <= length; i++) {
        pagination.push({
            pageNumber: i.toString()
        });
    }
    this.setState({
        pagination,
        limitPerPage
    }, () => this.reducePagination());
}

function _reducePagination() {
    if (this.state.pagination.length <= LIMIT) {
        return (
            this.setState({reducedPagination: this.state.pagination})
        );
    }
    const listStart = (this.state.paginationPosition - 1) * LIMIT;
    return this.setState({
        reduced: true,
        reducedPagination: this.state.pagination.slice(listStart, (listStart + LIMIT))
    });
}


export default Pagination;
