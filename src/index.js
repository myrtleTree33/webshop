import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import {Layout} from './app/components/layout';
import {Main} from './app/components/main';
import {Sell} from './app/components/sell';
import {Cart} from './app/components/cart';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}/>
      <Route path="sell/:type" component={Sell}/>
      <Route path="cart" component={Cart}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
