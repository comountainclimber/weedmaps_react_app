import React, { Component } from 'react';

// import MenuTable from './MenuTable';'
import MenuTableCustom from './MenuTableCustom';
import {integratedVendors, colors} from '../../config';
import {fetchMenuData} from '../../services/vendorService';
import ContentContainer from '../common/ContentContainer';
import './styles/Menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busy: true,
            menuData: [],
            error: false,
            errorMessage: null,
            vendor: {}
        };
        this.init = _init.bind(this);
    }

    componentDidMount() {
        const vendor = integratedVendors
            .filter(_vendor => _vendor.internalUrl === this.props.location.pathname)[0];
        this.init(vendor);
    }

    render() {
        return (
            <ContentContainer busy={this.state.busy}>
                <h1> {this.state.vendor.display} </h1>
                <p style={{color: colors.emerald}}> Succesfully found {this.state.menuData.length} menu items! </p>
                <MenuTableCustom data={this.state.menuData} />
            </ContentContainer>
        );
    }
}

function _init(vendor) {
    fetchMenuData(vendor)
        .then((result) => {
            this.setState({
                menuData: result,
                busy: false,
                vendor: vendor
            });
        })
        .catch((error) => {
            this.setState({
                busy: false,
                error: true,
                errorMessage: error.message
            });
        });
}


export default Menu;
