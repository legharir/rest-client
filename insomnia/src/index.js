import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoggedIn } from 'actions/auth';
import thunk from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';
import Root from './Root';
import rootReducer from './reducers';
import './index.css';

// redux and thunk initialization
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// check for JWT to persist login state
if (localStorage.appJWT) {
  const user = { token: localStorage.appJWT };
  store.dispatch(userLoggedIn(user));
}

// apply global material ui theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { main: blue[600] }, // blue is the best colour
  },
});

render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Root store={store} />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
