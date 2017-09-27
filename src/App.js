import React from 'react';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';

import './styles/App.css';

import DispensaryRouter from './components/router/DispensaryRouter';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Footer from './components/navigation/Footer';
import history from './history';

const App = () => (
    <div className="App">
        <Navigation handleClick={() => history.push('/')} />
        <div className="App-container">
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dispensaries" component={DispensaryRouter} />
                </Switch>
            </Router>
        </div>
        <Footer />
    </div>
);

export default App;
