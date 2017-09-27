import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {PaginationButton} from './Button';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }

    componentWillMount() {
        // this.setState({
        //     pagination: this.props.pagination
        // }, () => this.reducePagination());
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={e => this.setState({input: e.target.value})}
                />
            </div>
        );
    }
}


export default SearchBar;
