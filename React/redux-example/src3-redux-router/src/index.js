//npm dependencies 'npm i redux react-redux react-router-dom --save'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './store/store';
import AppRoutes from './router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
