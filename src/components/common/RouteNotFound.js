import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from './ContentContainer';

const propTypes = {
    location: PropTypes.object
};
const RouteNotFound = ({ location }) => (
    <ContentContainer>
        <div>
            <h1>Whoops!</h1>
            <h3>
                Looks like something went wrong. Please contact{' '}
                <a href= "mailto:mlasky46@com.com?Subject=Awesome%20Job!">
                    mlasky46@com.com
                </a>
                {' '}if you think this is in error.
                <br />
                <br />
                You were looking for: <code>{location.pathname}</code> but we couldn't find it.
            </h3>
        </div>
    </ContentContainer>
);
RouteNotFound.propTypes = propTypes;

export default RouteNotFound;
