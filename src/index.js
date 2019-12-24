import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Basket from './components/basket/basket';

import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' render={()=><Home />} />
          <Route path='/basket' render={()=><Basket />} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
