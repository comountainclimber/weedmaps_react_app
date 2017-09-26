import React from 'react';
import Button from '../common/Button';

const Dispensary = props => (
    <div>
        <h1>
            {props.display}
        </h1>
        <Button
            text="View Menu"
            onClick={props.onClick}
        />
    </div>
);

export default Dispensary;
