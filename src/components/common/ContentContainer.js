import React from 'react';

const ContentContainer = props => (
    <div className="App-content">
        {props.busy && <Busy />}
        {!props.busy && props.children}
    </div>
);

const Busy = () => (
    <div style={{fontSize: 25}}>
        We are fetching your cannabis content...
    </div>
);

export default ContentContainer;
