import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../config.js';
import './styles/Button.css';

const propTypes = {
    rating: PropTypes.number
};
const StarRating = props => (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{color: colors.gold}}>
            {_getStars(props.rating)}
        </div>
        <div style={{fontSize: 'smaller'}}>
            {props.rating.toFixed(2)}
        </div>
    </div>
);
StarRating.propTypes = propTypes;
export default StarRating;


function _getStars(rating) {
    let stars = '';
    const numRating = rating;
    for (let i = 0; i < numRating; i++) {
        stars += '\u2605';
    }
    return stars;
}
