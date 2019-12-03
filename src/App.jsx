import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import Store from 'Core/store.js';

import './scss/general.scss';

const App = (
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <h1>Home</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(App, document.getElementById('app'));
});
