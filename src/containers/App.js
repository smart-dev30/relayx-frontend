import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../services/theme';
import store from '../store/configureStore'

import Dashboard from './dashboard'
import SetHandle from './TopUps/SetHandle'
import SelectPayment from './TopUps/SelectPayment'

import 'react-notifications/lib/notifications.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <>
            <CssBaseline/>
            <Switch>
              <Route path='/topups/handle' component={SetHandle} />
              <Route path='/topups/select-payment' component={SelectPayment} />
              <Route path='/dashboard' component={Dashboard} />
              <Redirect to='/topups/handle' />
            </Switch>
          </>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
