import React from 'react';

import Dispensary from './Dispensary';
import './styles/DispensaryList.css';

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

export default DispensaryList;
