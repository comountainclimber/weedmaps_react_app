import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    busy: PropTypes.bool,
    children: PropTypes.node
};
const ContentContainer = props => (
    <div className="App-content">
        {props.busy && <Busy />}
        {!props.busy && props.children}
    </div>
);
ContentContainer.propTypes = propTypes;

const Busy = () => (
    <div style={{fontSize: 25}}>
        We are fetching your cannabis content...
    </div>
);

export default ContentContainer;
