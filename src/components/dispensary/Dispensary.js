import React from 'react';

import './styles/Dispensary.css'
import {EmeraldButton} from '../common/Button';

const Dispensary = props => (
    <div className="Dispensary-row">
        <h1>
            {props.display}
        </h1>
        <EmeraldButton
            text="View Menu"
            onClick={props.onClick}
        />
    </div>
);

export default Dispensary;
