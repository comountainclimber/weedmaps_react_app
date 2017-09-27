import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../config.js';
import './styles/Button.css';

const propTypes = {
    additionalStyles: PropTypes.object,
    onClick: PropTypes.func,
    text: PropTypes.string
};
const Button = props => (
    <button
        className="Button-base"
        style={props.additionalStyles}
        onClick={props.onClick}
    >
        {props.text}
    </button>
);
Button.propTypes = propTypes;

export const DefaultButton = props => (
    <Button {...props} />
);

export const PaginationButton = props => (
    <DefaultButton {...props} additionalStyles={{width: 35, height: 35, color: props.active ? colors.emerald : colors.blue, backgroundColor: props.active ? colors.darkGrey : colors.lightGrey, fontSize: 16}} />
);

export const EmeraldButton = props => (
    <Button {...props} additionalStyles={{backgroundColor: colors.emerald}} />
);
EmeraldButton.propTypes = {
    additionalStyles: PropTypes.object
};
