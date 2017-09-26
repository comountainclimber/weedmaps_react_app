import React from 'react';

import {colors} from '../../config.js'
import './styles/Button.css'

const Button = props => (
    <button
        className={`Button-base ${props.buttonStyle ? props.buttonStyle : ''}`}
        style={props.additionalStyles}
        onClick={props.onClick}
    >
        {props.text}
    </button>
);

export const DefaultButton = props => (
    <Button {...props} />
);

export const EmeraldButton = props => (
    <Button {...props} additionalStyles={{backgroundColor: colors.emerald}}/>
);

