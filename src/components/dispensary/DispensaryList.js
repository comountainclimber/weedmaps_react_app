import React from 'react';

import Dispensary from './Dispensary';

const DispensaryList = props => (
    <div>
        {console.log(props)}
        {props.dispensaries.map(dispensary =>
            <Dispensary
                key={dispensary.id}
                onClick={() => props.handleClick(dispensary)}
                {...dispensary}
            />
        )}
    </div>
);

export default DispensaryList;
