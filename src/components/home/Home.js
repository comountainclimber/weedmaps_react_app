import React, { Component } from 'react';
// import leaf from '../../images/leaf.svg';

import DispensaryList from '../dispensary/DispensaryList';

import {integratedVendors} from '../../config';
import ContentContainer from '../common/ContentContainer';


class Home extends Component {
    render() {
        return (
            <ContentContainer>
                <p className="App-intro">
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
