import React from 'react';
import {colors} from '../../config';
import octocat from '../../images/octocat.png';

import './styles/Footer.css';

const Footer = () => (
    <div className="Footer-container" style={{backgroundColor: colors.lightGrey}}>
        <a href="https://github.com/comountainclimber/weedmaps_react_app" target="blank">
            <img src={octocat} className="Footer-social-icon" alt="octocat" />
        </a>
        <div style={{fontWeight: 100}}>
            © 2017 created by {' '}
            <a href= "mailto:mlasky46@com.com?Subject=Awesome%20Job!">
                Maxwell Lasky
            </a>
        </div>
    </div>
);

export default Footer;
