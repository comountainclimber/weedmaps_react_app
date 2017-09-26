import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom';

import './styles/App.css';
// import {integrationVendors} from './config';
import DispensaryRouter from './components/router/DispensaryRouter';
import Home from './components/home/Home';
import leaf from './images/leaf.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={BrowserRouter}>
                    <div>
                    <Route component={AppHeader} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/dispensaries" component={DispensaryRouter} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

const AppHeader = (props) =>
    <div className="App-header">
        <div style={{cursor: 'pointer'}} onClick={() => props.history.push('/')}>
            <img src={leaf} className="App-logo" alt="logo" />
            <h2>CannabisR</h2>
        </div>
        <h4 style={{fontWeight: 100}}>Real time inventory updates from your favorite dispensaries</h4>
    </div>;

export default App;
