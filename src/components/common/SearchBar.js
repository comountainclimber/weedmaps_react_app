import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles/SearchBar.css';

const propTypes = {
    handleUpdateSearchValue: PropTypes.func,
    placeholder: PropTypes.string
};
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }

    render() {
        return (
            <div>
                <input
                    className="glowing"
                    type="text"
                    value={this.state.input}
                    onChange={e => this.setState({input: e.target.value},
                        this.props.handleUpdateSearchValue(e.target.value)
                    )}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}
SearchBar.propTypes = propTypes;

export default SearchBar;
