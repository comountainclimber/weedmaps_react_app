import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom';

import {integratedVendors} from '../../config';
import fetchRequest from '../../services/apiService';

import ContentContainer from '../common/ContentContainer';
// import './styles/App.css';
// import {integrationVendors} from './config';
// import DispensaryRouter from './components/router/DispensaryRouter';
// import Home from './components/home/Home';
// import leaf from './images/leaf.svg';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busy: true,
        };
    }

    componentDidMount() {
        // import {fetchRequest} from '../../services/apiService';
        console.log(this.props)

        const vendor = integratedVendors
            .filter(_vendor => _vendor.internalUrl === this.props.location.pathname)[0];
        fetchRequest(vendor.href, 'GET')
            .then((result) => {
                this.setState({
                    vendorData: result,
                    busy: false
                });
            });
    }

    render() {
        return (
            <ContentContainer busy={this.state.busy}>
                <code>
                    {JSON.stringify(this.state.vendorData)}
                </code>
            </ContentContainer>
        );
    }
}

export default Menu;
