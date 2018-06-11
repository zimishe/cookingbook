import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './../_shared/utils/history';

import App from './../App';
import store from './store';

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>
        )
    }
}