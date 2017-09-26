import React, { Component } from 'react';
import leaf from './images/leaf.svg';
import './styles/App.css';

import DispensaryList from './components/dispensary/DispensaryList';
import {fetchRequest} from './services/apiService';
import {integratedVendors} from './config';


class App extends Component {
// componentWillMount() {
//   fetchRequest('https://weedmaps.com/dispensaries/native-roots-apothecary/menu_items.json', 'GET')
//     .then((result) => {
//       console.log(result)
//     })
// }

    render() {
        return (
            <div className="App">
                <AppHeader />

                <div className="App-content">
                    <p className="App-intro">
                        Select from one of the dispensaries below to view their current inventory.
                    </p>
                    <DispensaryList
                        dispensaries={integratedVendors}
                        handleClick={dispensary => console.log(dispensary)}
                    />
                </div>
            </div>
        );
    }
}

const AppHeader = () =>
    <div className="App-header">
        <img src={leaf} className="App-logo" alt="logo" />
        <h2>CannabisR</h2>
        <h4 style={{fontWeight: 100}}>Real time inventory updates from your favorite dispensaries.</h4>
    </div>;

export default App;
