import React, { Component } from 'react';

import DispensaryList from '../dispensary/DispensaryList';
import {integratedVendors} from '../../config';
import ContentContainer from '../common/ContentContainer';


class Home extends Component {
    render() {
        return (
            <ContentContainer>
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
