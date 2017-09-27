import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StarRating from '../common/StarRating';
import {EmeraldButton} from '../common/Button';
import {fetchVendorData} from '../../services/vendorService';
import './styles/Dispensary.css';


const propTypes = {
    display: PropTypes.string,
    handleClick: PropTypes.function
};
class Dispensary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingVendorData: true
        };
        this.init = _init.bind(this);
    }

    componentDidMount() {
        this.init(this.props);
    }

    render() {
        return (
            <div className="Dispensary-column">
                <h2>
                    {this.props.display}
                </h2>
                <Details
                    loadingVendorData={this.state.loadingVendorData}
                    vendorData={this.state.vendorData}
                />
                <div style={{textAlign: 'center'}}>
                    <EmeraldButton
                        text="View Menu"
                        onClick={this.props.handleClick}
                    />
                </div>
            </div>
        );
    }
}

const Details = props => (
    <div>
        {props.loadingVendorData && <div> Fetching vendor data... </div>}
        {(!props.loadingVendorData && props.vendorData) && (
            <div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                    <img src={props.vendorData.avatar} className="Dispensary-avatar" alt="avatar" />
                    <div className="Dispensary-details-column">
                        <div>
                            Phone Number:{' '}
                            <a href={`tel:${props.vendorData.phone_number}`}>
                                {props.vendorData.phone_number}
                            </a>
                        </div>
                        <div> Address: {`${props.vendorData.address}, ${props.vendorData.city} ${props.vendorData.state} \
    ${props.vendorData.zip_code}`}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            Rating: <StarRating rating={props.vendorData.rating} />
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

function _init(vendor) {
    fetchVendorData(vendor)
        .then((result) => {
            this.setState({
                vendorData: result,
                loadingVendorData: false,
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

Dispensary.propTypes = propTypes;

export default Dispensary;
