import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import history from './history'
import routes from './routes'
import configureStore  from './Store/Store'

import Assay from './Assay/Assay'
import Constants from './Assay/Constants'

import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";

import './Theme/Styles/Styles.css'

const store = configureStore()

Assay.initialize({ apiPort: Constants.apiPort, apiUrl: Constants.apiHost, apiProtocol: Constants.apiProtocol})
Assay.setSession('')
ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router history={history}>
        {routes}
      </Router>
    </CookiesProvider>
  </Provider>, 
  document.getElementById('root')
);
