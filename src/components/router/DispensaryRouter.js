import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import {integratedVendors} from '../../config';
import RouteNotFound from '../common/RouteNotFound';
import Menu from '../dispensary/Menu';

export default function DispensaryRouter(props) {
    console.log('rendering DispensaryRouter', props);
    return (
        <Switch>
            {integratedVendors.map(vendor => (
                <Route
                    exact
                    key={vendor.id}
                    path={vendor.internalUrl}
                    component={Menu}
                />
            ))}
            <Route component={RouteNotFound} />
        </Switch>
    );
}
