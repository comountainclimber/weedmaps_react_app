import React from 'react';
import PropTypes from 'prop-types';

import Dispensary from './Dispensary';
import './styles/DispensaryList.css';

const propTypes = {
    dispensaries: PropTypes.array
};
const DispensaryList = props => (
    <div>
        {props.dispensaries.map(dispensary => (
            <Dispensary
                key={dispensary.id}
                handleClick={() => props.handleClick(dispensary)}
                {...dispensary}
            />
        ))}
    </div>
);
DispensaryList.propTypes = propTypes;

export default DispensaryList;
