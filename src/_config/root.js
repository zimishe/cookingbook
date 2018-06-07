import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './../App';
import store from './store';

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        )
    }
}