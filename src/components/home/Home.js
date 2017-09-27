import React, { Component } from 'react';

import DispensaryList from '../dispensary/DispensaryList';
import {integratedVendors} from '../../config';
import ContentContainer from '../common/ContentContainer';


class Home extends Component {
    render() {
        return (
            <ContentContainer>
                <p style={{fontSize: 'large'}}>
                    Select from one of the dispensaries below to view their current inventory:
                </p>
                <DispensaryList
                    dispensaries={integratedVendors}
                    handleClick={dispensary =>
                        this.props.history.push(dispensary.internalUrl)
                    }
                />
            </ContentContainer>
        );
    }
}


export default Home;
