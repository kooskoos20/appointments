import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes/Routes'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary : {
      main : '#083456'
    },
    secondary : {
      main : '#fff'
    },
  },

  typography: {
    fontSize: 15,
    useNextVariants : true,
    fontFamily: 'Montserrat'
  },
});





const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk),));
render(
  <Provider store={store}>
  <MuiThemeProvider theme={theme}>
  <CssBaseline />
    <Routes />
  </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
