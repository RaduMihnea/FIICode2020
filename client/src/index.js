import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from 'react-redux';
import {store, persistor} from './Reducers/configStore'
import {PersistGate} from 'redux-persist/integration/react'

import './index.css';
import './App.css';
import "normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import 'react-notifications-component/dist/theme.css';

require('dotenv').config();



const Piazeta = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

ReactDOM.render(<Piazeta />, document.getElementById('root'));
