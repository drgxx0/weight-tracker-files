import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'containers/App';
import * as serviceWorker from 'serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import UIReducer from 'store/reducers/UIReducer'
import dataReducer from 'store/reducers/dataReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#afb42b',
        light: '#e4e65e',
        dark: '#7c8500'
    },
    secondary: {
        main: '#aed581'
    },
  },
});

const rootReducer = combineReducers({
    ui: UIReducer,
    data: dataReducer
})

const store = createStore(rootReducer, composeEnhancers)

const app = (
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
