import React from 'react';
import {logo, colors} from '../../config';

import './styles/Navigation.css';

const Navigation = props => (
    <div className="Navigation-container" style={{backgroundColor: colors.darkGrey}}>
        <div style={{cursor: 'pointer'}} onClick={props.handleClick}>
            <img src={logo} className="Navigation-logo" alt="logo" />
            <h2>CannabisR</h2>
        </div>
        <h4 style={{fontWeight: 100}}>
            View the current offerings at your favorite dispensaries
        </h4>
    </div>
);

export default Navigation;
